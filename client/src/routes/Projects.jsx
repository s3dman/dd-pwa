import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";

import "../styles/Projects.css";

function Projects() {
  const [projectData, setProjectData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return (
    <>
      <div className="container">
        {isLoading && <p>Loading projects...</p>}
        {error && <p>Error: {error.message}</p>}
        {Object.entries(projectData).map(([classKey, classData]) => (
          <ul key={classKey}>
            <h3 className="class-heading">{classKey}</h3>
            <ul>
              {Object.entries(classData).map(([typeKey, projects]) => (
                <li key={typeKey}>
                  <h4 className="type-heading">{typeKey}</h4>
                  <ol>
                    {projects.map((project) => (
                      <li key={project}>
                        <Link
                          to={`/project/${project}`}
                          className="project-link"
                        >
                          {project}
                        </Link>
                      </li>
                    ))}
                  </ol>
                </li>
              ))}
            </ul>
          </ul>
        ))}
      </div>
      <Header dark={true} />
      <Navbar dark={true} />
    </>
  );
}

export default Projects;
