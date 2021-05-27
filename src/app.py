from flask import Blueprint, render_template
from flask_login import current_user, login_required
from flask import Flask


def create_app(test_config=None):

    app = Flask(__name__, instance_relative_config=True, static_folder="angular-build", template_folder="templates")

    with app.app_context():

        main_bp = Blueprint('main', __name__)

        @main_bp.route('/')
        def index():
            return render_template("index.html")
