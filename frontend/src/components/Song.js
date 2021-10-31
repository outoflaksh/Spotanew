import React, { useState, useEffect } from "react";
import Warning from "./Warning";
import axios from "axios";

const Song = () => {
  const [randomSong, setRandomSong] = useState({
    artist: [],
    cover_img: "",
    preview_url: "",
    spotify_url: "",
    title: "",
  });
  const [previewAvailable, setPreviewAvailable] = useState(true);

  const getRandomSong = async () => {
    const response = await axios.get(
      "https://spotanew-api.herokuapp.com/api/random"
    );
    const data = response.data;
    setRandomSong(data);
    document.body.style = `background: url(${data.cover_img}) no-repeat; background-size: cover;`;

    if (data.preview_url === "") {
      setPreviewAvailable(false);
    } else {
      setPreviewAvailable(true);
    }
  };

  useEffect(() => {
    getRandomSong();
  }, []);

  return (
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
      </div>
      <div className="player">
        <audio src={randomSong.preview_url} autoPlay>
          <source src={randomSong.preview_url} />
        </audio>
      </div>
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
