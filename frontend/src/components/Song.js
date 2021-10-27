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
    const response = await axios.get("http://127.0.0.1:5000/api/random");
    const data = response.data;
    console.log(data);
    setRandomSong(data);

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
    <div className="container">
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
      <button className="spotify">
        <a href={randomSong.spotify_url}> Open in Spotify</a>
      </button>
      <button className="shuffle" onClick={getRandomSong}>
        Play random
      </button>
    </div>
  );
};

export default Song;
