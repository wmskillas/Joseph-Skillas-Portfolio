import React from "react";
import Image1 from "../images/2.jpg";
import Image2 from "../images/3.jpg";
import Image3 from "../images/4.jpg";
import Image4 from "../images/5.jpg";
import Image5 from "../images/6.jpg";
import Image6 from "../images/7.jpg";
import Image7 from "../images/8.jpg";
import Image8 from "../images/9.jpg";
import Image9 from "../images/11.jpg";
import Image10 from "../images/21.jpg";
import Image11 from "../images/13.jpg";
import Image12 from "../images/15.jpg";
import Image13 from "../images/16.jpg";
import Image14 from "../images/10.jpg";
import Image15 from "../images/18.jpg";
import Image16 from "../images/19.jpg";
import Image17 from "../images/20.jpg";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <Carousel autoPlay infiniteLoop stopOnHover thumbWidth={90} onClickItem>
    <div className="carouselSize">
      <img alt="1.img" src={Image1} />
    </div>
    <div className="carouselSize">
      <img alt="2.img" src={Image2} />
    </div>
    <div className="carouselSize">
      <img alt="3.img" src={Image3} />
    </div>
    <div className="carouselSize">
      <img alt="4.img" src={Image4} />
    </div>
    <div className="carouselSize">
      <img alt="5.img" src={Image5} />
    </div>
    <div className="carouselSize">
      <img alt="6.img" src={Image6} />
    </div>
    <div className="carouselSize">
      <img alt="7.img" src={Image7} />
    </div>
    <div className="carouselSize">
      <img alt="8.img" src={Image8} />
    </div>
    <div className="carouselSize">
      <img alt="9.img" src={Image9} />
    </div>
    <div className="carouselSize">
      <img alt="10.img" src={Image10} />
    </div>
    <div className="carouselSize">
      <img alt="11.img" src={Image11} />
    </div>
    <div className="carouselSize">
      <img alt="12.img" src={Image12} />
    </div>
    <div className="carouselSize">
      <img alt="13.img" src={Image13} />
    </div>
    <div className="carouselSize">
      <img alt="14.img" src={Image14} />
    </div>
    <div className="carouselSize">
      <img alt="15.img" src={Image15} />
    </div>
    <div className="carouselSize">
      <img alt="16.img" src={Image16} />
    </div>
    <div className="carouselSize">
      <img alt="17.img" src={Image17} />
    </div>
  </Carousel>
);
