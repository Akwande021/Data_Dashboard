# Flask application factory
import os

from flask import Flask

from config import Config
from app.db import db


def create_app(config_class=Config):
    # Create and configure the Flask app instance
    app = Flask(__name__, template_folder="../templates", static_folder="../static")
    app.config.from_object(config_class)

    # Make sure the instance/ folder exists (holds the SQLite db file)
    os.makedirs(app.instance_path, exist_ok=True)

    # Bind SQLAlchemy to this app
    db.init_app(app)

    # Register blueprints (JSON API + HTML pages)
    from app.routes.tasks import bp as tasks_bp
    from app.routes.pages import bp as pages_bp

    app.register_blueprint(tasks_bp)
    app.register_blueprint(pages_bp)

    # Create tables on startup if they don't exist yet
    with app.app_context():
        db.create_all()

    return app
