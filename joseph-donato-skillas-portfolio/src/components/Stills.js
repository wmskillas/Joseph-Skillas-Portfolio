import React from "react";
import Carousel2 from "./Carousel2";
import Carousel3 from "./Carousel3";
import ImageStills from "../images/17.jpg";
import ImageStills2 from "../images/goldroom.jpg";

const Stills = () => {
  return (
    <div className="homepage">
      <div className="divHeight display-flex container">
        <div className="marginBottom titleBg">
          <h1 id="purple" className="titleAlign">Expire 1989</h1>
        </div>
        <div className="stillMargins">
          <div className="stillSizing">
            <Carousel2 />
          </div>
          <div>
            <img
              className="stillSizing"
              src={ImageStills}
              alt="stills.img"
            ></img>
          </div>
        </div>
        <div className="titleBg">
          <h1 id="red" className="titleAlign">Chip Away</h1>
        </div>
        <div className="stillMargins">
          <div className="stillSizing">
            <Carousel3 />
          </div>
          <div>
            <img
              id="stillImage"
              src={ImageStills2}
              alt="stills2.img"
            ></img>
          </div>
        </div>
        <footer>
          <h5 className="footer text-white copyRight cpBg">
            ⓒJoseph Donato Skillas
          </h5>
        </footer>
      </div>
    </div>
  );
};

export default Stills;
