import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  // Updated descriptions and links with matching keys
  const desc = {
    Diabetes_Prediction_using_ML: {
      desc: "This project predicts diabetes using machine learning algorithms, based on medical data. It includes data preprocessing, model training, and evaluation.",
      github: "https://github.com/srinadh-ghattamneni/Diabetes-Predection-using-ML", // Update this URL
      website: "" ,// Leave empty if no demo
      name:"Diabetes Prediction using ML"
    },
    To_Do_app: {
      desc: "A simple to-do app that allows users to create, edit, and delete tasks. It was built to understand react functionality.",
      github: "ss", // Leave empty if no GitHub repo
      website: "ss", // Leave empty if no demo
      name:"To Do app"
    }
  };

  // Safely access the project description and links
  const projectDetails = desc[projectName];

  if (!projectDetails) {
    // Return an error or a fallback if the projectName doesn't match any key
    return <div>Error: Project details not found for {projectName}</div>;
  }

  // Conditional rendering for Github and Website links
  const showGithub = projectDetails.github !== "" ? "block" : "none";
  const showWebsite = projectDetails.website !== "" ? "block" : "none";

  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={projectPhoto} alt={`${projectName} display`} />
      <div>
        <br />
        <h3>{projectDetails.name}</h3>
        <br />
        <p>{projectDetails.desc}</p>
        <br />
        <a style={{ display: showGithub }} href={projectDetails.github} target='_blank' rel='noopener noreferrer'>
          <button className='projectbtn'><FaGithub /> Github</button>
        </a>
        <a style={{ display: showWebsite }} href={projectDetails.website} target='_blank' rel='noopener noreferrer'>
          <button className='projectbtn'><CgFileDocument /> Demo</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
