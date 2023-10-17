import React from "react";
import Slider from "../components/Slider/Slider";
import "../styles/Home.css";

import img3 from "../assets/3.jpeg";
import img4 from "../assets/4.jpeg";
import img5 from "../assets/5.jpeg";

import img11 from "../assets/architecture-exp.png";
import img12 from "../assets/interior-exp.png";
import img13 from "../assets/planning-exp.png";

const s = [
  { src: img3, title: "CASAGRAND MERIDIAN" },
  { src: img4, title: "NAVACHETANA HOSPITAL" },
  { src: img5, title: "CASAGRAND ORLENA" },
];

const Home = () => {
  return (
    <>
      <Slider data={s} />
      <div className="caption-container">
        At Destination, we believe quality is never an accident.
        <br />
        It is always the result of high intentions, sincere efforts and
        <br />
        skillful execution in search of Excellence...
        <h2>Expertise</h2>
        <div className="expertise-container">
          <div className="expertise-img-container">
            <img src={img11} alt="" className="expertise-img" />
            <div className="expertise-overlay">
              <h3>ARCHITECTURE</h3>
              <p>Expertise in architectural design and planning.</p>
            </div>
          </div>
          <div className="expertise-img-container">
            <img src={img12} alt="" className="expertise-img" />
            <div className="expertise-overlay">
              <h3>INTERIOR DESIGN</h3>
              <p>Expertise in interior design and decoration.</p>
            </div>
          </div>
          <div className="expertise-img-container">
            <img src={img13} alt="" className="expertise-img" />
            <div className="expertise-overlay">
              <h3>PLANNING</h3>
              <p>Expertise in urban planning and development.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;