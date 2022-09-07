import React from "react";
import "../custom.css";
import MusicVideos from "../components/MusicVideos";
import Sunflower from "../images/sunflower.jpg";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <main className="homepage">
      <div className="align-text-left goRight">
        <header className="div3">
          <div className="text-white">
            <h4>
              <Link className="text-white" to="/music-videos">
                Music Videos
              </Link>
            </h4>
            <h4>
              <Link className="text-white" to="/stills">
                Stills
              </Link>
            </h4>
            <h4>
              <Link className="text-white" to="/credits">
                Credits
              </Link>
            </h4>
            <h4>
              <Link className="text-white" to="/about">
                About
              </Link>
            </h4>
          </div>
        </header>
        <div className="div1">
          <h1 className="purpleText mt-4">Joseph Donato Skillas</h1>
          <br />
          <div className="textBg">
            <p className="text-white fs-4">
              Visual artist from Atlanta, Georgia{" "}
            </p>
            <p className="text-white fs-4">
              Creative freelancing in the United States and abroad, currently
              studying in Roma, Italia.
            </p>
            <br />
            <ul className="textAlign text-white fs-4">
              <li>: Director of Photography</li>
              <li>: Production Design</li>
              <li>: Art Direction</li>
              <li>: Photo and Video Editing</li>
            </ul>
            <br />
            <header className="div3">
              <ul className="text-white fs-4">
                <li>
                  <Link to="/music-videos">Music Videos</Link>
                </li>
                <li>
                  <Link to="/stills">Stills</Link>
                </li>
                <li>
                  <Link to="/credits">Credits</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </header>
          </div>
        </div>
        <div>
          <img className="div6 photoBorder hpImage" src={Sunflower}></img>
        </div>
      </div>
      <footer>
        <h5 className="text-white copyRight cpBg">ⓒJoseph Skillas</h5>
      </footer>
    </main>
  );
};

export default Homepage;
