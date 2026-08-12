from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import httpx
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Emergent managed email proxy (constant — never read from env).
EMAIL_BASE_URL = "https://integrations.emergentagent.com"
EMAIL_KEY = os.environ["EMERGENT_EMAIL_KEY"]
EMAIL_FROM_NAME = os.environ["EMAIL_FROM_NAME"]
OWNER_EMAIL = os.environ["OWNER_EMAIL"]

app = FastAPI()
api_router = APIRouter(prefix="/api")

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


class ContactMessage(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class ContactCreate(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    message: str = Field(min_length=1, max_length=5000)


def _build_email_html(name: str, email: str, message: str) -> str:
    safe_msg = message.replace("\n", "<br>")
    return f"""
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#FCF9FA;padding:32px 0;font-family:Arial,Helvetica,sans-serif;">
      <tr><td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #F4D5DE;border-radius:16px;overflow:hidden;">
          <tr><td style="background:#FFD1DC;padding:24px 32px;">
            <p style="margin:0;font-size:12px;letter-spacing:2px;color:#2A1A1E;text-transform:uppercase;">New Portfolio Message</p>
            <h1 style="margin:6px 0 0;font-size:22px;color:#2A1A1E;">From {name}</h1>
          </td></tr>
          <tr><td style="padding:28px 32px;color:#2A1A1E;">
            <p style="margin:0 0 6px;font-size:13px;color:#8A6B74;">Email</p>
            <p style="margin:0 0 20px;font-size:16px;"><a href="mailto:{email}" style="color:#D65A78;">{email}</a></p>
            <p style="margin:0 0 6px;font-size:13px;color:#8A6B74;">Message</p>
            <p style="margin:0;font-size:16px;line-height:1.6;">{safe_msg}</p>
          </td></tr>
        </table>
      </td></tr>
    </table>
    """


@api_router.get("/")
async def root():
    return {"message": "Hello World"}


@api_router.post("/contact")
async def create_contact(input: ContactCreate):
    obj = ContactMessage(**input.model_dump())
    doc = obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.contact_messages.insert_one(doc)

    payload = {
        "to": [OWNER_EMAIL],
        "subject": f"New portfolio message from {input.name}",
        "html": _build_email_html(input.name, input.email, input.message),
        "from_name": EMAIL_FROM_NAME,
        "contact_email": input.email,
    }
    try:
        async with httpx.AsyncClient(timeout=30) as http_client:
            resp = await http_client.post(
                f"{EMAIL_BASE_URL}/api/v1/email/send",
                headers={"X-Email-Key": EMAIL_KEY},
                json=payload,
            )
        resp.raise_for_status()
    except httpx.HTTPStatusError as e:
        logger.error(f"Email send failed: {e.response.status_code} {e.response.text}")
        raise HTTPException(status_code=502, detail="Message saved but email failed to send")
    except Exception as e:
        logger.error(f"Email send error: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to send message")

    return {"status": "success", "message": "Thanks! Your message is on its way."}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)