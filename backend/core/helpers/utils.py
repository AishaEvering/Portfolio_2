import os
from ultralytics import YOLO
from dotenv import load_dotenv
from core import logger
import time
from tempfile import NamedTemporaryFile

load_dotenv()


def get_class_names():
    return ["afro", "bantu knots", "bob", "braids",
            "cornrows", "fade", "locs", "long", "sisterlocs", "twa"]


def load_model():
    model_path: str = os.getenv("YOLO_PATH")
    # Load a model
    return YOLO(model_path, task="detect")


def save_to_temp(file) -> str:
    temp = NamedTemporaryFile(
        delete=False, suffix=".mp4", dir="core/tmp")

    try:
        contents = file.read()
        with temp as f:
            f.write(contents)  # saving input to temp file
            return temp.name
    except Exception as e:
        logger.error(f"Error uploading file: {str(e)}")
        raise Exception("Error uploading the file.")
    finally:
        file.close()


def clean_old_files(directory, age_in_seconds):
    now = time.time()
    for file_path in os.listdir(directory):
        full_path = os.path.join(directory, file_path)
        if os.path.getmtime(full_path) < now - age_in_seconds:
            os.remove(full_path)
