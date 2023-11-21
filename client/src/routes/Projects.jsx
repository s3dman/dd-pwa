import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import ImgFetch from "../components/ImgFetch/ImgFetch";

import "../styles/Projects.css";

function Projects() {
  const [projectData, setProjectData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedClass, setSelectedClass] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to fetch projects");
        }
      })
      .then((data) => {
        setProjectData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  const handleClassChange = (classKey) => {
    setSelectedClass(classKey);
    setSelectedType("all");
  };

  const handleTypeChange = (typeKey) => {
    setSelectedType(typeKey);
  };

  return (
    <>
      <div className="project-container">
        <h1>Projects</h1>
        {isLoading && <p>Loading projects...</p>}
        {error && <p>Error: {error.message}</p>}
        <div className="filter-container">
          <div className="class-options">
            <div
              className={`class-option ${
                selectedClass === "all" ? "selected" : ""
              }`}
              onClick={() => handleClassChange("all")}
            >
              All
            </div>
            {Object.keys(projectData).map((classKey) => (
              <div
                key={classKey}
                className={`class-option ${
                  selectedClass === classKey ? "selected" : ""
                }`}
                onClick={() => handleClassChange(classKey)}
              >
                {classKey}
              </div>
            ))}
          </div>
          <div className="type-options">
            <div
              className={`type-option ${
                selectedType === "all" ? "selected" : ""
              }`}
              onClick={() => handleTypeChange("all")}
            >
              All
            </div>
            {selectedClass !== "all" &&
              Object.keys(projectData[selectedClass]).map((typeKey) => (
                <div
                  key={typeKey}
                  className={`type-option ${
                    selectedType === typeKey ? "selected" : ""
                  }`}
                  onClick={() => handleTypeChange(typeKey)}
                >
                  {typeKey}
                </div>
              ))}
          </div>
        </div>
        <div className="image-gallery">
          <ul className="image-gallery">
            {selectedClass !== "all" &&
              selectedType !== "all" &&
              projectData[selectedClass]?.[selectedType]?.map((project) => (
                <li>
                  <Link
                    key={project}
                    to={`/project/${project}`}
                    className="project-link"
                  >
                    <ImgFetch
                      key={project}
                      src={`projects/${selectedClass}/${selectedType}/${project}`}
                    />
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <Header dark={true} />
      <Navbar dark={true} />
    </>
  );
}

export default Projects;
