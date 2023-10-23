import React from "react";
import "../styles/Careers.css";
import "../styles/global.css";
import img10 from "../assets/main_logo_black.png";

function Careers() {
  return (
    <>
      <div className="logo">
        <img src={img10} alt="LOGO" className="BLACK_LOGO" />
      </div>
      <div id="careers-heading">
        <h1>Careers</h1>
      </div>
      <div id="career-paragraph">
        <h3>
          Our studio has grown to become more than just a place of work to our
          staff members. It is a place where people can achieve great things,
          invest in themselves
          <br /> and be rewarded for it. This has contributed to a phenomenal
          team that is strong and able and this sort of functionality gives us
          the freedom to focus on our
          <br /> core business practice and what we do best. It has allowed us
          to serve our clients to the best of our ability, achieving their
          satisfaction, and not stopping until
          <br /> we have done so.
        </h3>
      </div>
    </>
  );
}
export default Careers;