import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="title">
        <p>Visiting Hours</p>
      </div>
      <div className="artist">
        <p>ED SHEERAN</p>
      </div>
      <div className="cover">
        <img
          src="https://i.scdn.co/image/ab67616d0000b273a5cf426490a6e1c1bde53fb1"
          alt=""
        />
      </div>
      <div className="player">
        <audio
          src="https://p.scdn.co/mp3-preview/a26c21c3454638cd22c40faf44d6e68b58bcfef8?cid=774b29d4f13844c495f206cafdad9c86"
          autoplay
        ></audio>
      </div>
      <button className="spotify">Open in Spotify</button>
      <button className="shuffle">Random</button>
    </div>
  );
}

export default App;
