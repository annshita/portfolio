# 🌸 Anshita Verma — Personal Portfolio

> Hi! Finally made a portfolio website (with AI ofc — but ig that's everywhere rn!)

A full-stack personal portfolio website featuring a React + TailwindCSS frontend with smooth animations and a Python FastAPI backend wired to MongoDB and an email delivery service.

**Live:** [annshita.dev](https://annshita.dev) &nbsp;|&nbsp; **GitHub:** [annshita](https://github.com/annshita)

---

## Features

- **Animated hero & manifesto** — Framer Motion scroll-driven parallax and reveal animations throughout
- **Work experience & education timeline**
- **Projects showcase** — pointwise descriptions with live demo and GitHub links
- **Achievements section**
- **Contact form** — submissions stored in MongoDB and forwarded to the owner via email
- **Fully responsive** — mobile-first, tested across breakpoints
- **Smooth scroll** — powered by Lenis for buttery-smooth page scrolling

---

## Architecture

```
portfolio/
├── frontend/          # React 18 SPA (Create React App + CRACO)
│   ├── src/
│   │   ├── components/
│   │   │   ├── portfolio/   # Hero, About, Experience, Projects, Contact …
│   │   │   └── ui/          # Radix UI + shadcn/ui primitives
│   │   ├── data/
│   │   │   └── portfolio.js # Single source of truth for all content
│   │   ├── hooks/
│   │   └── lib/
│   ├── tailwind.config.js
│   └── craco.config.js
│
└── backend/           # Python FastAPI REST API
    ├── server.py      # API routes, MongoDB client, email proxy
    └── requirements.txt
```

---

## Frontend

### Core Stack

| Technology | Version | Purpose |
|---|---|---|
| **React** | 18.3 | UI library |
| **React Router DOM** | 7.15 | Client-side routing |
| **Create React App** | 5.0 | Project scaffolding |
| **CRACO** | 7.1 | CRA config override (path aliases, PostCSS) |

### Styling

| Technology | Version | Purpose |
|---|---|---|
| **TailwindCSS** | 3.4 | Utility-first CSS framework |
| **tailwind-merge** | 3.2 | Conflict-free class merging |
| **tailwindcss-animate** | 1.0 | Keyframe animation utilities |
| **PostCSS** + **Autoprefixer** | 8.5 / 10.4 | CSS processing pipeline |

### Animation & UX

| Technology | Version | Purpose |
|---|---|---|
| **Framer Motion** | 11.18 | Scroll-driven parallax, reveal animations, layout transitions |
| **Lenis** | 1.3 | Smooth scroll with lerp-based easing |
| **react-fast-marquee** | 1.6 | Infinite scrolling marquee ticker |

### UI Component Library

| Technology | Purpose |
|---|---|
| **Radix UI** (full suite) | Accessible, headless primitives (Dialog, Tooltip, Select, Toast…) |
| **shadcn/ui** conventions | Component composition layer over Radix |
| **Lucide React** | Icon set |
| **cmdk** | Command palette component |
| **Sonner** | Toast notifications |
| **Vaul** | Drawer component |
| **Embla Carousel** | Touch-friendly carousels |

### Forms & Validation

| Technology | Version | Purpose |
|---|---|---|
| **React Hook Form** | 7.56 | Performant form state management |
| **Zod** | 3.24 | Schema validation |
| **@hookform/resolvers** | 5.0 | Zod ↔ React Hook Form bridge |

### Data Fetching

| Technology | Purpose |
|---|---|
| **Axios** | HTTP client for backend API calls |
| **TanStack React Query** | Server-state management, caching |
| **SWR** | Stale-while-revalidate data fetching |

### Tooling & DX

| Technology | Purpose |
|---|---|
| **ESLint** + plugins | Linting (react, react-hooks, jsx-a11y, import) |
| **dotenv** | Environment variable loading |
| **Yarn** | Package manager |

---

## Backend

### Core Stack

| Technology | Version | Purpose |
|---|---|---|
| **Python** | 3.11+ | Runtime |
| **FastAPI** | 0.110 | Async REST API framework |
| **Uvicorn** | 0.25 | ASGI server |
| **Starlette** | 0.37 | ASGI toolkit (CORS middleware, routing) |
| **Pydantic v2** | 2.13 | Request/response validation and serialization |

### Database

| Technology | Version | Purpose |
|---|---|---|
| **MongoDB** | — | Primary datastore (contact messages) |
| **Motor** | 3.3 | Async MongoDB driver for Python |
| **PyMongo** | 4.6 | Sync MongoDB driver |

### Email

| Technology | Purpose |
|---|---|
| **Emergent Email Proxy** | Managed email delivery via `integrations.emergentagent.com` |
| **httpx** | Async HTTP client used to call the email proxy |

### AI / LLM

| Technology | Purpose |
|---|---|
| **Google GenAI SDK** (`google-genai`) | Gemini model access |
| **Google Generative AI** | Generative AI Python client |
| **LiteLLM** | Unified LLM gateway (multi-provider routing) |
| **OpenAI SDK** | OpenAI-compatible API access |
| **tiktoken** | Token counting |

### Auth & Security

| Technology | Purpose |
|---|---|
| **PyJWT** | JSON Web Token creation and verification |
| **python-jose** | JOSE standards (JWS, JWE, JWK) |
| **passlib** + **bcrypt** | Password hashing |
| **cryptography** | Low-level crypto primitives |
| **python-dotenv** | Secrets management via `.env` |

### Data & Utilities

| Technology | Purpose |
|---|---|
| **pandas** / **numpy** | Data manipulation |
| **Pillow** | Image processing |
| **boto3** / **botocore** | AWS S3 SDK (asset storage) |
| **huggingface_hub** | HuggingFace model hub access |
| **tenacity** | Retry logic with exponential backoff |
| **rich** | Terminal pretty-printing |
| **PyYAML** | YAML parsing |

### Testing & Quality

| Technology | Purpose |
|---|---|
| **pytest** | Test runner |
| **pytest-xdist** | Parallel test execution |
| **flake8** | PEP 8 linting |
| **mypy** | Static type checking |
| **black** | Code formatting |
| **isort** | Import sorting |

---

## Getting Started

### Prerequisites

- **Node.js** >= 18 and **Yarn** 1.x
- **Python** >= 3.11
- A running **MongoDB** instance (local or Atlas)

### Frontend

```bash
cd portfolio/frontend
yarn install
yarn start          # Dev server → http://localhost:3000
yarn build          # Production bundle → build/
```

### Backend

```bash
cd portfolio/backend

# Create and activate virtual environment
python -m venv venv
venv\Scripts\activate        # Windows
# source venv/bin/activate   # macOS / Linux

pip install -r requirements.txt

uvicorn server:app --reload  # Dev server → http://localhost:8000
```

### Environment Variables

**`backend/.env`**

```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=portfolio
EMERGENT_EMAIL_KEY=<your-email-proxy-key>
EMAIL_FROM_NAME=Portfolio Contact
OWNER_EMAIL=you@example.com
CORS_ORIGINS=http://localhost:3000
```

**`frontend/.env`**

```env
REACT_APP_BACKEND_URL=http://localhost:8000
```

---

## Content Management

All site content lives in a single file — `frontend/src/data/portfolio.js`:

| Export | Description |
|---|---|
| `PROFILE` | Name, role, tagline, bio |
| `LINKS` | GitHub, LinkedIn, LeetCode handles |
| `MANIFESTO` | Three personal philosophy cards |
| `SKILLS` | Languages, focus areas, tools |
| `EXPERIENCE` | Work experience and education with bullet points |
| `PROJECTS` | Projects with `points[]` array or `desc` string, GitHub and live URLs |
| `ACHIEVEMENTS` | Honours and achievements list |
| `MARQUEE_WORDS` | Scrolling ticker keywords |

Projects support two description formats:
- **`points: [...]`** — rendered as a bullet list (used for detailed AI/engineering projects)
- **`desc: "..."`** — rendered as a plain paragraph (used for shorter descriptions)

---

## Testing

```bash
# Backend tests
cd portfolio/backend
pytest -n auto          # runs in parallel via pytest-xdist

# Frontend tests
cd portfolio/frontend
yarn test
```

Test reports are saved to `test_reports/` and a summary is in `test_result.md`.

---

## Design System

Custom rose-plum palette defined in `frontend/tailwind.config.js`:

| Token | Usage |
|---|---|
| `blush-*` | Primary accent (pinks / roses) |
| `plum` | Dark text and headings |
| `cream` | Light backgrounds |
| `blush-100/40` | Translucent section backgrounds |

Typography uses **DM Serif Display** for headings paired with **Inter / system-ui** for body text.

---

## License

Personal portfolio — feel free to draw inspiration, but please don't copy content or deploy as-is.
