import React from "react";
import Slider from "../components/Slider/Slider";
import "../styles/Home.css";

import img3 from "../assets/3.jpeg";
import img4 from "../assets/4.jpeg";
import img5 from "../assets/5.jpeg";

const s = [
  { src: img3, title: "CASAGRAND MERIDIAN" },
  { src: img4, title: "NAVACHETANA HOSPITAL" },
  { src: img5, title: "CASAGRAND ORLENA" },
];

const Home = () => {
  return (
    <>
      <Slider data={s} />
      <div className="expertise-container">
        At Destination we believe quality is never an accident.
        <br />
        It is always the result of high intentions, sincere efforts and
        <br />
        skillful execution in search of Excellence...
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default Home;