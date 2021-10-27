from flask import Flask
from flask_cors import CORS, cross_origin
from flask.json import jsonify
from flask_cors.decorator import cross_origin
from scripts.main import get_random_song

app = Flask(__name__)
CORS(app)


@app.route("/api/random")
@cross_origin()
def random_song():
    response = get_random_song()

    return jsonify(response)


if __name__ == "__main__":
    app.run(debug=True)
