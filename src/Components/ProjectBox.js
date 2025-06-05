import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    Holiday_Hub: {
      name: "Holiday Hub",
      desc: "A full-stack travel booking website allowing users to search destinations, view hotel options, and make bookings. Features authentication, REST APIs, and MongoDB.",
      github: "https://github.com/srinadh-ghattamneni",
      website: ""
    },
    ChatSphere: {
      name: "ChatSphere",
      desc: "A real-time MERN-based chat application with WhatsApp-like UI, Socket.io messaging, user auth, private/group chat support, and responsive design.",
      github: "https://github.com/srinadh-ghattamneni",
      website: ""
    },
    To_Do_app: {
      name: "ToDo App",
      desc: "A basic yet functional React app that allows users to add, delete, and manage daily tasks efficiently, with support for local storage. Useful for understanding state and props.",
      github: "https://github.com/srinadh-ghattamneni",
      website: ""
    },
    Diabetes_Prediction_using_ML: {
      name: "Diabetes Prediction using ML",
      desc: "Machine learning-based app to predict diabetes using medical attributes. Includes data preprocessing, model training, and accuracy evaluation.",
      github: "https://github.com/srinadh-ghattamneni",
      website: ""
    },
    Loan_Approval_prediction: {
      name: "Loan Approval Prediction",
      desc: "A web app to predict loan approval based on applicant details. Frontend in PHP/JS, backend with Flask ML API, and MySQL DB integration.",
      github: "https://github.com/srinadh-ghattamneni",
      website: ""
    }
  };

  // Convert projectName to match key format (replace spaces with underscores)
  const formattedName = projectName.replace(/\s+/g, "_");
  const projectDetails = desc[formattedName];

  if (!projectDetails) {
    return <div>Error: Project details not found for {projectName}</div>;
  }

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
