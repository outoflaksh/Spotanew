import requests
import random
from .spotify_token import get_token
from .data import playlist_ids


def get_random_song() -> dict:
    ACCESS_TOKEN = get_token()

    random_playlist_id = random.choice(playlist_ids)

    PLAYIST_URL = f"https://api.spotify.com/v1/playlists/{random_playlist_id}/tracks"

    headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": f"Bearer {ACCESS_TOKEN}",
    }

    response = requests.get(PLAYIST_URL, headers=headers)

    if response.status_code == 200:
        songs = response.json()["items"]
        random_song = random.choice(songs)["track"]
        song_details = {
            "title": random_song["name"],
            "artist": [artist["name"] for artist in random_song["artists"]],
            "cover_img": random_song["album"]["images"][0]["url"],
            "preview_url": random_song["preview_url"] or "",
            "spotify_url": random_song["external_urls"]["spotify"],
        }

        return song_details
    else:
        return {}
