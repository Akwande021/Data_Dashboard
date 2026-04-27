Data_Dashboard (Python Edition)

A personal multi-domain data dashboard and task manager built with Python + web technologies.

This project evolves the original static dashboard into a dynamic Python-powered application with backend logic, persistent storage, and API-driven data handling.

🚀 Overview

Nexus Dashboard (Python Version) is a multi-domain personal dashboard that allows users to manage and visualize:

Finance
Projects
Fitness
Study
Tasks

Instead of relying on localStorage, this version uses a Python backend + database for real persistence and scalability.

🧠 Features
Multi-domain tracking — Finance, Projects, Fitness, Study
Priority task manager — Critical / High / Medium / Low
Persistent storage — SQLite/PostgreSQL database
REST API backend — Powered by Python (Flask/FastAPI)
Charts & analytics — Chart.js (frontend) + API data
Dark mode UI — Light/dark toggle
Collapsible sidebar navigation
Global task creation — Add tasks from any page
Filtering & search — Backend-powered queries
🧱 Tech Stack
Backend
Python 3.10+
Flask or FastAPI
SQLite (default) or PostgreSQL
SQLAlchemy (ORM)
Frontend
HTML / CSS / JavaScript
Chart.js
Lucide Icons
Google Fonts (Syne + DM Sans)
📄 Pages
Page	Description
/	Overview dashboard — stats, charts, recent tasks
/finance	Balance, income/expenses, spending breakdown
/projects	Progress tracking, deadlines
/fitness	Workout streaks, activity charts
/study	Study hours, subjects, goals
/tasks	All tasks with filtering & search
⚙️ Getting Started
1. Clone the repo
git clone https://github.com/your-username/nexus-dashboard.git
cd nexus-dashboard
2. Create virtual environment
python -m venv venv
source venv/bin/activate   # Mac/Linux
venv\Scripts\activate      # Windows
3. Install dependencies
pip install -r requirements.txt
4. Run the app
Flask
python app.py
OR FastAPI
uvicorn app:app --reload

Then visit:

http://localhost:5000   (Flask)
http://localhost:8000   (FastAPI)
🗂️ Project Structure
nexus-dashboard/
├── app/
│   ├── __init__.py        # App factory
│   ├── routes/            # API routes
│   │   ├── tasks.py
│   │   ├── finance.py
│   │   ├── projects.py
│   │   ├── fitness.py
│   │   └── study.py
│   ├── models/            # Database models
│   │   ├── task.py
│   │   └── user_data.py
│   ├── services/          # Business logic
│   └── db.py              # Database connection
│
├── static/
│   ├── css/
│   ├── js/
│   └── assets/
│
├── templates/             # HTML templates (Jinja2)
│   ├── index.html
│   ├── finance.html
│   ├── projects.html
│   ├── fitness.html
│   ├── study.html
│   └── tasks.html
│
├── migrations/            # (optional) DB migrations
├── tests/
├── requirements.txt
├── config.py
├── run.py / app.py
└── README.md
🗄️ Data Handling
All data is stored in a database instead of localStorage
Backend exposes endpoints like:
GET    /api/tasks
POST   /api/tasks
PUT    /api/tasks/<id>
DELETE /api/tasks/<id>
Frontend fetches data via fetch() or Axios
🎨 Customisation

You can customize:

Default data via database seed scripts
Color themes via CSS variables
Domain categories in backend models
Chart data via API responses

🔮 Roadmap
Export data to CSV
Recurring tasks / habits tracker
Budget category editor
Authentication system (login/signup)
Mobile PWA support
Advanced charts (heatmaps, gauges)
Cloud sync (deploy backend to cloud)
Multi-user support