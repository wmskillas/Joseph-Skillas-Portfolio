import React from "react";
import Image1 from "../images/8.jpg";
import Image2 from "../images/9.jpg";
import Image3 from "../images/breakdown.jpg";
import Image4 from "../images/ritual.jpg";
import Image5 from "../images/kilter.jpg";
import Image6 from "../images/tingeoffear.jpg";
import Image7 from "../images/out.jpg";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <Carousel autoPlay infiniteLoop stopOnHover thumbWidth={90} onClickItem emulateTouch>
    <div className="carouselSize">
      <img alt="ritual.img" src={Image4} />
    </div>
    <div className="carouselSize">
      <img alt="breakdown.img" src={Image3} />
    </div>
    <div className="carouselSize">
      <img alt="kilter.img" src={Image5} />
    </div>
    <div className="carouselSize">
      <img alt="8.img" src={Image1} />
    </div>
    <div className="carouselSize">
      <img alt="9.img" src={Image2} />
    </div>
    <div className="carouselSize">
      <img alt="tingeoffear.img" src={Image6} />
    </div>
  </Carousel>
);
