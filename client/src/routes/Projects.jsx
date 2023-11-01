import React, { useState, useEffect } from "react";
import ImgFetch from "../components/ImgFetch/ImgFetch";
import "../styles/Projects.css";

function Projects() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "http://localhost:3000/project/ARCHITECTURE/residential/CASAGRAND ORLENA",
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Project not found");
        }
      })
      .then((data) => {
        setImages(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className="image-grid">
        {images.map((image, index) => (
          <ImgFetch
            key={index}
            src={`projects/ARCHITECTURE/residential/CASAGRAND ORLENA/${image}`}
          />
        ))}
      </div>
    </>
  );
}

export default Projects;
