import React from "react";
import "./about.css";
import { FaHandPointRight } from "react-icons/fa";
import BlurText from "../BlurText/BlurText";
import myImage from "../About/IMG_6890.jpg";

function About() {
  const style = {
    color: "#e4b1f0",
    marginRight: "10px",
  };

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <div className="aboutWrapper">
      <section className="div1">
        <BlurText
          text="Hi my nam is Daniel Gustafsson and I am from Stockholm, Sweden. I am currently studying to become a web/app developer at NTI Södertörn"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-2xl mb-8"
        />
      </section>

      <section className="div2">
        <p className="hobbyListTitle">
          Apart from coding, my hobbies include: <br />
          <ul className="hobbies">
            <li>
              <FaHandPointRight style={style} />
              <span id="hobbiesList">Body Building</span>
            </li>
            <li>
              <FaHandPointRight style={style} />
              Socializing with friends
            </li>
            <li>
              <FaHandPointRight style={style} />
              Fast Cars
            </li>
          </ul>
        </p>
      </section>

      <div className="imageBox">
        <img
          src={myImage}
          alt="Description"
          className="imageInsideBox"
        />
      </div>
    </div>
  );
}

export default About;
