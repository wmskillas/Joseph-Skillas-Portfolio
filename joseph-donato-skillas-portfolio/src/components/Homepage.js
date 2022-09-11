import React from "react";
import Sunflower from "../images/sunflower.jpg";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <body className="homepage ">
      <div className="divHeight display-flex">
        <header className="py-5">
          <h1 className="purpleText text-end">Joseph Donato Skillas</h1>
          <div className="flex-direction-row">
            <h4 className="text-start">
              <Link
                className="text-white headerList text-decoration-none fw-bold headerMargin d-flex"
                to="/music-videos"
              >
                :Music Videos:
              </Link>
            </h4>
            <h4>
              <Link
                className="text-white m-2 text-decoration-none fw-bold headerMargin d-flex"
                to="/stills"
              >
                :Stills:
              </Link>
            </h4>
            <h4>
              <Link
                className="text-white m-2 text-decoration-none fw-bold headerMargin d-flex"
                to="/credits"
              >
                :Credits:
              </Link>
            </h4>
            <h4 className="about">
              <Link
                className="text-white m-2 text-decoration-none contactMargin d-flex"
                to="/about"
              >
                :About|Contact:
              </Link>
            </h4>
          </div>
        </header>
        <div className="textAlign container">
          <img
            className="hpImageAlign hpImage"
            src={Sunflower}
            alt="Photos by Joseph Skillas"
          ></img>
          <div className="textBg fw-bold">
            <p className="text-white fs-4">
              Visual artist from Atlanta, Georgia{" "}
            </p>
            <p className="text-white fs-4">
              Creative freelancing in the United States and abroad, currently
              studying in Roma, Italia.
            </p>
            <br />
            <ul className="textAlign text-white fs-4  display-flex flex-direction-column flex-wrap">
              <li className="m-4">Director of Photography</li>
              <li className="why">Art Direction</li>
              <li className="m-4">Production Design</li>
              <li className="m-4">Photo and Video Editing</li>
            </ul>
          </div>
        </div>
        <footer>
          <h5 className="footer text-white copyRight cpBg">
            ⓒJoseph Donato Skillas
          </h5>
        </footer>
      </div>
    </body>
  );
};

export default Homepage;
