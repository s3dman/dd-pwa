import React, { useEffect, useState } from "react";
import fetchImages from "../components/IBP";

function Projects() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetchImages("http://localhost:3000/image-bundle/sliders", true)
      .then((fetchedImages) => {
        setImages(fetchedImages);
      })
      .catch((error) => {
        console.error("Failed to fetch and process images:", error);
      });
  }, []);

  return (
    <div>
      {images.map((img, index) => (
        <img key={index} src={img.src} alt={`Image ${index}`} />
      ))}
    </div>
  );
}

export default Projects;
