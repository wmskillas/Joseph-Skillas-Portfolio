import React from "react";
import { Link } from "react-router-dom";

const Stills = () => {
  return (
    <body className="homepage ">
      <div className="divHeight display-flex">
        <header className="py-5">
          <h1 className="purpleText text-end">Joseph Donato Skillas</h1>
          <div className="flex-direction-row">
            <h4 className="text-start">
              <Link
                className="text-white headerList text-decoration-none headerMargin d-flex homeIcon"
                to="/Joseph-Skillas-Portfolio"
              >
                :Home:
              </Link>
            </h4>
            <h4 className="text-start">
              <Link
                className="text-white headerList text-decoration-none fw-bold headerMargin d-flex"
                to="/Joseph-Skillas-Portfolio/music-videos"
              >
                :Music Videos:
              </Link>
            </h4>
            <h4>
              <Link
                className="text-white m-2 text-decoration-none fw-bold headerMargin d-flex"
                to="/Joseph-Skillas-Portfolio/stills"
              >
                :Stills:
              </Link>
            </h4>
            <h4>
              <Link
                className="text-white m-2 text-decoration-none fw-bold headerMargin d-flex"
                to="/Joseph-Skillas-Portfolio/credits"
              >
                :Credits:
              </Link>
            </h4>
            <h4 className="about">
              <Link
                className="text-white m-2 text-decoration-none contactMargin d-flex"
                to="/Joseph-Skillas-Portfolio/about"
              >
                :About|Contact:
              </Link>
            </h4>
          </div>
        </header>
        <div></div>
        <footer>
          <h5 className="footer text-white copyRight cpBg">
            ⓒJoseph Donato Skillas
          </h5>
        </footer>
      </div>
    </body>
  );
};

export default Stills;
