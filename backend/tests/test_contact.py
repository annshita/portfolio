"""Backend API tests for portfolio contact endpoint."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://playful-me-1.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# Health / root
def test_root(client):
    r = client.get(f"{API}/")
    assert r.status_code == 200
    assert r.json().get("message") == "Hello World"


# Valid contact submission -> 200 + status success + email dispatched
def test_contact_valid(client):
    payload = {
        "name": "TEST_Automation Tester",
        "email": "TEST_qa@example.com",
        "message": "Hello Anshita, this is an automated backend test message.",
    }
    r = client.post(f"{API}/contact", json=payload, timeout=45)
    assert r.status_code == 200, f"Body: {r.text}"
    data = r.json()
    assert data.get("status") == "success"
    assert isinstance(data.get("message"), str) and len(data["message"]) > 0


# Invalid email -> 422
def test_contact_invalid_email(client):
    r = client.post(f"{API}/contact", json={
        "name": "Tester", "email": "not-an-email", "message": "hi"
    })
    assert r.status_code == 422


# Missing fields -> 422
@pytest.mark.parametrize("payload", [
    {"email": "a@b.com", "message": "hi"},                    # no name
    {"name": "A", "message": "hi"},                            # no email
    {"name": "A", "email": "a@b.com"},                         # no message
    {"name": "", "email": "a@b.com", "message": "hi"},         # empty name
    {"name": "A", "email": "a@b.com", "message": ""},          # empty message
])
def test_contact_missing_or_empty_fields(client, payload):
    r = client.post(f"{API}/contact", json=payload)
    assert r.status_code == 422, f"Expected 422 for {payload}, got {r.status_code}: {r.text}"
