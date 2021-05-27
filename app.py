from flask import Blueprint, send_from_directory
from flask_login import current_user, login_required
from flask import Flask


def create_app(test_config=None):

    app = Flask(__name__, instance_relative_config=True, static_folder="angular-build")

    with app.app_context():

        #main_bp = Blueprint('main', __name__, template_folder="angular-build")

        @app.route('/<path:path>', methods=['GET'])
        def static_proxy(path):
            if path.endswith(".js"):
                return send_from_directory('./angular-build', path, mimetype="application/javascript")
            return send_from_directory('./angular-build', path)

        @app.route('/')
        def index():
            print("index()")
            return send_from_directory('./angular-build/', 'index.html')

        return app
