import React from "react";
import Carousel from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Homepage = () => {
  return (
    <div className="">
      <div className="divHeight display-flex">
        <div className="mt-5 textAlign container marginBottom homeWrap">
          <div className="homeSizing">
            <Carousel />
          </div>
          <div className="textBg fw-bold textSize homeText homeSizing">
            <p className="text-white hpMarginLeft">
              Visual artist from Atlanta, Georgia
            </p>
            <p className="text-white hpMarginLeft">
              Creative freelancing in the United States and abroad, currently
              studying in Roma, Italia.
            </p>
            <br />
            <ul
              className="textAlign text-white display-flex flex-direction-column flex-wrap"
              id="marginTop"
            >
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
    </div>
  );
};

export default Homepage;
