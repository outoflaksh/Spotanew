import requests
from secrets import CLIENT_ID, CLIENT_SECRET


def get_token():

    payload = {
        "Content-Type": "application/x-www-form-urlencoded",
        "grant_type": "client_credentials",
    }

    END_POINT = "https://accounts.spotify.com/api/token"

    response = requests.post(END_POINT, auth=(CLIENT_ID, CLIENT_SECRET), data=payload)

    return response.json()["access_token"]
