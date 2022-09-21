import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import MusicVideos from "./components/MusicVideos";
import Credits from "./components/Credits";
import Stills from "./components/Stills";
import About from "./components/About";
import ImageCycle from "./components/Carousel";
import "./App.css";
import "./custom.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/music-videos" element={<MusicVideos />} />
            <Route exact path="/stills" element={<Stills />} />
            <Route exact path="/credits" element={<Credits />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
