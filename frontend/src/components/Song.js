import React, { useState, useEffect } from "react";
import Warning from "./Warning";
import axios from "axios";
import LoadingScreen from "./LoadingScreen";

const Song = () => {
  const [randomSong, setRandomSong] = useState({
    artist: [],
    cover_img: "",
    preview_url: "",
    spotify_url: "",
    title: "",
  });
  const [previewAvailable, setPreviewAvailable] = useState(true);
  const [loading, setLoading] = useState(true);
  const [progressInfo, setProgressInfo] = useState({});

  const getRandomSong = async () => {
    const response = await axios.get(
      "https://spotanew-api.onrender.com/random"
    );
    const data = response.data;
    setRandomSong(data);
    setLoading(false);
    document.body.style = `background: url(${data.cover_img}) no-repeat; background-size: cover; background-position: center;`;

    if (data.preview_url === "") {
      setPreviewAvailable(false);
    } else {
      setPreviewAvailable(true);
    }
  };

  useEffect(() => {
    getRandomSong();
  }, []);

  return loading ? (
    <LoadingScreen />
  ) : (
    <div className="song-container">
      <div className="title">
        <p>{randomSong.title}</p>
      </div>
      <div className="artist">
        <p>{randomSong.artist.join(", ")}</p>
      </div>
      <Warning previewAvailable={previewAvailable} />
      <div className="cover">
        <img src={randomSong.cover_img} alt="" />
        {previewAvailable && (
          <div class="hp_slide">
            <div
              class="hp_range"
              style={{
                width:
                  (progressInfo.currentTime / progressInfo.duration) * 100 +
                  "%",
              }}
            ></div>
          </div>
        )}
      </div>
      {previewAvailable && (
        <div className="player">
          <audio
            src={randomSong.preview_url}
            autoPlay
            onTimeUpdate={(e) => {
              setProgressInfo({
                currentTime: e.target.currentTime,
                duration: e.target.duration,
              });
            }}
          >
            <source src={randomSong.preview_url} />
          </audio>
        </div>
      )}
      <button className="shuffle control-btn" onClick={getRandomSong}>
        New random
      </button>
      <button className="spotify control-btn">
        <a href={randomSong.spotify_url}> Open in Spotify</a>
      </button>
    </div>
  );
};

export default Song;
