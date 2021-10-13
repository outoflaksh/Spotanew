from flask import Flask
from flask.json import jsonify
from scripts.main import get_random_song

app = Flask(__name__)


@app.route("/random")
def random_song():
    response = get_random_song()

    return jsonify(response)


if __name__ == "__main__":
    app.run(debug=True)
