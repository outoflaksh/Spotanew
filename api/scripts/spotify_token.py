import os
import requests
from dotenv import load_dotenv

load_dotenv()

CLIENT_ID = os.environ['CLIENT_ID']
CLIENT_SECRET = os.environ['CLIENT_SECRET']


def get_token():

    payload = {
        "Content-Type": "application/x-www-form-urlencoded",
        "grant_type": "client_credentials",
    }

    END_POINT = "https://accounts.spotify.com/api/token"

    response = requests.post(END_POINT, auth=(
        CLIENT_ID, CLIENT_SECRET), data=payload)

    return response.json()["access_token"]
