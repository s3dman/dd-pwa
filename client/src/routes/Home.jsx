import React from "react";
import Slider from "../components/Slider/Slider";

import img1 from "../assets/1.jpeg";
import img2 from "../assets/2.jpeg";
import img3 from "../assets/3.jpeg";
import img4 from "../assets/4.jpeg";
import img5 from "../assets/5.jpeg";

const s = [
  { src: img1, title: "title1", desc: "description1" },
  { src: img2, title: "title2", desc: "description2" },
  { src: img3, title: "title3", desc: "description3" },
  { src: img4, title: "title4", desc: "description4" },
  { src: img5, title: "title5", desc: "description5" },
];

const Home = () => {
  return (
    <div className="home">
      <Slider data={s} />
    </div>
  );
};

export default Home;