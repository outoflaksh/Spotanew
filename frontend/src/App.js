import "./App.css";
import Song from "./components/Song";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <Song />
      <Footer />
    </div>
  );
}

export default App;
