import React from "react";
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
    <div>
      <div>
        <Homepage />
      </div>
      <div>
        <Router>
          <Routes>
            <Route path="/Joseph-Skillas-Portfolio" element={<Homepage />} />
            <Route
              path="/Joseph-Skillas-Portfolio/music-videos"
              element={<MusicVideos />}
            />
            <Route
              path="/Joseph-Skillas-Portfolio/credits"
              element={<Credits />}
            />
            <Route
              path="/Joseph-Skillas-Portfolio/stills"
              element={<Stills />}
            />
            <Route path="/Joseph-Skillas-Portfolio/about" element={<About />} />
            <Route
              path="/Joseph-Skillas-Portfolio/carousel"
              element={<ImageCycle />}
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
