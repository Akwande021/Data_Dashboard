from flask import Blueprint, jsonify, request

from app.db import db
from app.models.task import PRIORITIES, Task

bp = Blueprint("tasks", __name__, url_prefix="/api/tasks")


@bp.get("")
def list_tasks():
    tasks = Task.query.order_by(Task.created_at.desc()).all()
    return jsonify([t.to_dict() for t in tasks])


@bp.post("")
def create_task():
    data = request.get_json(silent=True) or {}
    title = (data.get("title") or "").strip()
    if not title:
        return jsonify({"error": "title is required"}), 400

    priority = data.get("priority", "Medium")
    if priority not in PRIORITIES:
        return jsonify({"error": f"priority must be one of {PRIORITIES}"}), 400

    task = Task(title=title, priority=priority)
    db.session.add(task)
    db.session.commit()
    return jsonify(task.to_dict()), 201


@bp.put("/<int:task_id>")
def update_task(task_id):
    task = db.get_or_404(Task, task_id)
    data = request.get_json(silent=True) or {}

    if "title" in data:
        title = (data["title"] or "").strip()
        if not title:
            return jsonify({"error": "title cannot be empty"}), 400
        task.title = title

    if "priority" in data:
        if data["priority"] not in PRIORITIES:
            return jsonify({"error": f"priority must be one of {PRIORITIES}"}), 400
        task.priority = data["priority"]

    if "completed" in data:
        task.completed = bool(data["completed"])

    db.session.commit()
    return jsonify(task.to_dict())


@bp.delete("/<int:task_id>")
def delete_task(task_id):
    task = db.get_or_404(Task, task_id)
    db.session.delete(task)
    db.session.commit()
    return "", 204
