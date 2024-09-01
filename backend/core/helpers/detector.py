import cv2
import os
import io
import time
import numpy as np
from PIL import Image
from io import BytesIO
from flask import send_file
from dotenv import load_dotenv
from ultralytics.utils.plotting import Annotator
from core.helpers.utils import get_class_names, load_model, logger


# Load the model
model = load_model()

load_dotenv()

progress_dict = {}


def img_detector(img, stream: bool = False, as_bytes: bool = True):

    if as_bytes:
        image = Image.open(BytesIO(img))
    else:
        image = img

    width = image.width
    height = image.height

    image = np.array(image)

    image = __process_img(image, stream=stream)
    image = cv2.resize(image, (width, height))
    image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    _, img_encoded = cv2.imencode('.jpg', image)

    return io.BytesIO(img_encoded.tobytes())


def add_video_detections(videoPath, file_id, delete_src=True):
    try:
        cap = cv2.VideoCapture(videoPath)

        if not cap.isOpened():
            raise IOError(f"Cannot open video file: {videoPath}")

        width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
        height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))

        total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
        frame_count = 0

        while True:
            success, frame = cap.read()
            if success:
                # process frame with the object detector
                processed_frame = __process_img(frame, stream=True)
                processed_frame = cv2.resize(processed_frame, (width, height))

                # convert processed frame to JPEG
                _, buffer = cv2.imencode('.jpg', processed_frame)

                frame_count += 1
                progress_dict[file_id] = int(
                    (frame_count / total_frames) * 100)

                yield (b'--frame\r\n'
                       b'Content-Type: image/jpeg\r\n\r\n' + buffer.tobytes() + b'\r\n')
            else:
                break

        # Ensure the progress reaches 100% after the loop
        if frame_count >= total_frames:
            progress_dict[file_id] = 100
            time.sleep(1)

    except Exception as e:
        logger.error(f"An error occurred: {e}")
    finally:
        cap.release()
        if os.path.exists(videoPath) and delete_src:
            os.remove(videoPath)
        del progress_dict[file_id]
        cv2.destroyAllWindows()


def __process_img(img, stream: bool = False):

    test_image = cv2.resize(img, (640, 640))

    results = model([test_image], stream=stream)

    for r in results:
        annotator = Annotator(test_image)
        boxes = r.boxes

        for box in boxes:
            box_coords = box.xyxy[0]
            conf = float(box.conf[0])
            cls = int(box.cls[0])

            class_names = get_class_names()
            label = f'{class_names[cls]} {conf:.2f}'
            annotator.box_label(box_coords, label, color=(232, 21, 21))

    return annotator.result()
