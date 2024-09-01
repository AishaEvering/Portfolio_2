import os
import logging
from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv


load_dotenv()

origins: list[str] = [
    "http://localhost:3000",
    "http://localhost:8000",
    "https://www.aishaeportfolio.com"
]

app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('FLASK_SECRET_KEY')
CORS(app, origins=origins)

# Set up logging
logging.basicConfig(filename='app.log', level=logging.INFO,
                    format='%(asctime)s %(levelname)s: %(message)s [in %(pathname)s:%(lineno)d]')
logger = logging.getLogger(__name__)

# fmt: off
from core import router
# fmt: on
