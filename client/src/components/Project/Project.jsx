import React from "react";
import { useParams, Navigate } from "react-router-dom";

function Project() {
  const { id } = useParams();
  if (id === "nigga") <Navigate to="about" replace={true} />;
  return (
    <div>
      <h2>Post ID: {id}</h2>
    </div>
  );
}

export default Project;