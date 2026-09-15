# Routes that render server-side HTML pages (as opposed to the JSON API in tasks.py)
from flask import Blueprint, render_template

bp = Blueprint("pages", __name__)


@bp.get("/")
def index():
    # Main dashboard overview page
    return render_template("index.html")


@bp.get("/tasks")
def tasks_page():
    # Full task list page with filtering/search (frontend fetches data from /api/tasks)
    return render_template("tasks.html")
