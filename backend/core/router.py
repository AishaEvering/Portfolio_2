import os
import numpy as np
from PIL import Image
from threading import Timer
from core import app, logger
from dotenv import load_dotenv
from flask import request, send_file, jsonify, Response
from core.helpers.utils import save_to_temp, clean_old_files
from core.helpers.detector import img_detector, add_video_detections, progress_dict

load_dotenv()

TEMP_DIR = './core/tmp'


@app.route("/api/process_image", methods=['POST'])
def process_image():

    if 'image' not in request.files:
        return "No file part in the request.", 400

    file = request.files['image']

    if file.filename == '' or not file.filename.lower().split(".")[-1] in ("jpg", "jpeg", "png", "webp"):
        return "Unsupported file format. Only JPG, JPEG, PNG, WEBP are supported.", 415

    try:
        img_io = img_detector(file.read())
        return send_file(img_io, mimetype='image/jpeg')
    except Exception as e:
        logger.error(f"Error processing image: {str(e)}")
        return "Error processing image", 500


@app.route("/api/process_example_image", methods=['GET', 'POST'])
def process_example_image():

    file_id = request.args.get('file_id')

    if not file_id:
        return jsonify({'error': 'No file_id provided'}), 400

    example_dir = './core/static/image-examples'

    file_path = os.path.join(example_dir, file_id)

    if not os.path.exists(file_path):
        return jsonify({'error': 'File not found'}), 404

    try:
        image = Image.open(file_path)
        img_io = img_detector(image, as_bytes=False)
        return send_file(img_io, mimetype='image/jpeg')
    except Exception as e:
        print(f"Error: {str(e)}")
        logger.error(f"Error processing image: {str(e)}")
        return "Error processing image", 500


@app.route('/api/process_frame', methods=['POST'])
def process_frame():
    if 'frame' not in request.files:
        return jsonify({"error": "No frame file provided"}), 400

    try:
        frame_file = request.files['frame']
        img_io = img_detector(frame_file.read(), stream=True)

        return send_file(
            img_io,
            mimetype='image/jpeg',
            as_attachment=False
        )
    except Exception as e:
        logger.error(f"Error processing frame: {str(e)}")
        return "Error processing frame", 500


@app.route('/api/upload_video', methods=['POST'])
def upload_video():
    if 'video' not in request.files:
        return jsonify({"error": "No video part in the request."}), 400

    file = request.files['video']

    if file.filename == '' or not file.content_type == 'video/mp4':
        return jsonify({"error": "File is not an MP4 video"}), 400

    if file:
        try:
            tempFilePath = save_to_temp(file)
            if tempFilePath is None or not os.path.exists(tempFilePath):
                logger.error(f"Temporary file not found after writing.")
                return jsonify({"error": "Temporary file not found after writing."}), 500

            return jsonify({'file_id': os.path.basename(tempFilePath)})
        except Exception as e:
            logger.error(f"Error uploading video: {str(e)}")
            return jsonify({"error": "Error uploading video"}), 500


@app.route('/api/stream_frames', methods=['GET'])
def stream_frames():
    file_id = request.args.get('file_id')

    if not file_id:
        return jsonify({'error': 'No file_id provided'}), 400

    file_path = os.path.join(TEMP_DIR, file_id)

    if not os.path.exists(file_path):
        return jsonify({'error': 'File not found'}), 404

    return Response(add_video_detections(file_path, file_id=file_id), mimetype='multipart/x-mixed-replace; boundary=frame')


@app.route('/api/stream_example_frames', methods=['GET'])
def stream_example_frames():
    file_id = request.args.get('file_id')

    if not file_id:
        return jsonify({'error': 'No file_id provided'}), 400

    example_dir = './core/static/video-examples'

    file_path = os.path.join(example_dir, file_id)

    if not os.path.exists(file_path):
        return jsonify({'error': 'File not found'}), 404

    return Response(add_video_detections(file_path, file_id=file_id, delete_src=False), mimetype='multipart/x-mixed-replace; boundary=frame')


@app.route('/api/stream_frames_progress', methods=['GET'])
def get_progress():
    file_id = request.args.get('file_id')
    if not file_id:
        return jsonify({'error': 'No file_id provided'}), 400

    progress = progress_dict.get(file_id, 0)
    return jsonify({'progress': progress})


def schedule_cleanup():
    # clean up runs every hour
    Timer(3600, schedule_cleanup).start()
    clean_old_files(TEMP_DIR, 3600)


schedule_cleanup()

if __name__ == "__main__":
    app.run(debug=bool(os.getenv("IS_DEBUG")), port=int(
        os.getenv("FLASK_RUN_PORT")), host='0.0.0.0', threaded=True)
