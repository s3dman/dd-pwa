import React from "react";
import "../styles/Careers.css";
import img10 from "../assets/main_logo_black.png";

const s = [
  { src: img10, title: "BLACK LOGO" },
  { src: img4, title: "NAVACHETANA HOSPITAL" },
  { src: img5, title: "CASAGRAND ORLENA" },
];

function Careers() {
  return (
    <>
    <Slider data={s} />
    <div className="careers">
      <img src={img10} alt="LOGO" className="BLACK_LOGO" />
    </div>
  </>
  );

}
export default Careers;