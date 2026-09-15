import os

from flask import Flask

from config import Config
from app.db import db


def create_app(config_class=Config):
    app = Flask(__name__, template_folder="../templates", static_folder="../static")
    app.config.from_object(config_class)

    os.makedirs(app.instance_path, exist_ok=True)

    db.init_app(app)

    from app.routes.tasks import bp as tasks_bp

    app.register_blueprint(tasks_bp)

    with app.app_context():
        db.create_all()

    return app
