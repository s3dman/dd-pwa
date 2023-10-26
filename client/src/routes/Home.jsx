import React from "react";
import Slider from "../components/Slider/Slider";
import "../styles/Home.css";

import img1 from "../assets/slides/AQUA.jpg";
import img2 from "../assets/slides/CASAGRAND MERIDIAN.jpg";
import img3 from "../assets/slides/CASAGRAND ORLENA.jpg";
import img4 from "../assets/slides/NAVACHETANA HOSPITAL.jpg";
import img5 from "../assets/slides/SPECTRUM.jpg";

import img11 from "../assets/architecture-exp.png";
import img12 from "../assets/interior-exp.png";
import img13 from "../assets/planning-exp.png";

const s = [
  { src: img3, title: "CASAGRAND ORLENA" },
  { src: img2, title: "CASAGRAND MERIDIAN" },
  { src: img1, title: "AQUA" },
  { src: img4, title: "NAVACHETANA HOSPITAL" },
  { src: img5, title: "SPECTRUM" },
];

// TODO fix align for expertise-title
function Home() {
  return (
    <>
      <Slider data={s} />
      <div className="caption-container">
        At Destination, we believe quality is never an accident.
        <br />
        It is always the result of high intentions, sincere efforts and
        <br />
        skillful execution in search of Excellence...
        <div className="expertise-title">
          <h2>Expertise</h2>
        </div>
        <div className="expertise-container">
          <div className="expertise-img-container">
            <img src={img11} alt="" className="expertise-img" />
            <div className="expertise-overlay">
              <h3>ARCHITECTURE</h3>
              <p className="overlay-desc">
                We are passionate about responsible design and the impact it has
                on the lives we touch every day.
              </p>
            </div>
          </div>
          <div className="expertise-img-container">
            <img src={img12} alt="" className="expertise-img" />
            <div className="expertise-overlay">
              <h3>INTERIOR DESIGN</h3>
              <p className="overlay-desc">
                We create functional interior design solutions which address the
                needs & requirements of our client.
              </p>
            </div>
          </div>
          <div className="expertise-img-container">
            <img src={img13} alt="" className="expertise-img" />
            <div className="expertise-overlay">
              <h3>PLANNING</h3>
              <p className="overlay-desc">
                We are committed to delivering environmental and socially
                sustainable communities with a strong sense of design value on
                an urban level.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;