import React from "react";
import Joseph from "../images/Joseph.jpeg";
import { Icon } from "@iconify/react";

const About = () => {
  return (
    <div className="homepage aboutPadding aboutBg aboutSizing">
      <div className="divHeight display-flex textSize text-white aboutMargin">
        <div className="flexWrap">
          <img className="imageSize" src={Joseph}></img>
          <p className="">
            1996 born and raised in Atlanta, Georgia to an Italian immigrant
            mother and an Ohio born father.{" "}
          </p>
          <p>
            My first experience with a camera was taking a highschool film
            photography class; the same year I found my parents old home-movie
            palmcorders buried in a closet.
          </p>
          <p>
            As a filmmaker, I gravitate towards the use of film and tape to
            create experimental films and documentaries. The medium of analog
            film, resonates a more natural view of how the world looks to us. So
            in a sense I reject the 4K revolution because our eyes can never
            render the world the way modern cameras depict it. I suppose the
            same could have been said for traditional film mediums, but the way
            light interacts with analog formats more closely resembles the very
            biology of our eyes.
          </p>
        </div>
        <div className="aboutAlign">
          <p className="aboutMargin">I will leave you with this:</p>
          <p className=""> Love thy neighbor, love thy friend</p>
          <p className="">Care for the earth that we all must defend</p>
          <p className="">
            For when we have reached the end of our life marathon
          </p>
          <p> Will those that remain be able to live on?</p>
        </div>
        <div className="border-top">
          <h2 className="my-3">Contact</h2>
          <a
            className="aboutIcon"
            href="https://www.linkedin.com/in/joseph-donato-skillas/"
          >
            <Icon className="" icon="logos:linkedin" />
          </a>
          <br />
          <a href="https://www.upwork.com/freelancers/~01189cfda62bffa0a8">
            <Icon className="" icon="logos:upwork" />
          </a>
        </div>
        <footer className="">
          <h5 className="footer text-white copyRight cpBg">
            ⓒJoseph Donato Skillas
          </h5>
        </footer>
      </div>
    </div>
  );
};

export default About;
