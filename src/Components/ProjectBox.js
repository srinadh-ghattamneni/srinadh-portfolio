import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    Holiday_Hub: {
      name: "Holiday Hub",
      desc: "A full-stack holiday booking web app using MVC architecture with Passport.js auth, RESTful APIs, MongoDB, image uploads, interactive maps, and a responsive UI built with EJS and Bootstrap.",
      github: "https://github.com/srinadh-ghattamneni",
      website: "https://wanderlust-6vll.onrender.com/"
    },
    ChatSphere: {
      name: "ChatSphere",
      desc: "A full-stack real-time chat app with JWT-based authentication, joinable rooms via unique codes, dynamic room capacity tracking, Socket.IO messaging, and a clean, responsive UI.",
      github: "https://github.com/srinadh-ghattamneni",
      website: "https://chat-sphere-neon.vercel.app/"
    },
    To_Do_app: {
      name: "ToDo App",
      desc: "A basic yet functional React app that allows users to add, delete, and manage daily tasks efficiently, with support for local storage. Useful for understanding state and props.",
      github: "https://github.com/srinadh-ghattamneni",
      website: "https://github.com/srinadh-ghattamneni/srinadh-ITask"
    },
    Diabetes_Prediction_using_ML: {
      name: "Diabetes Prediction using ML",
      desc: "Machine learning-based app to predict diabetes using medical attributes. Includes data preprocessing, model training, and accuracy evaluation.",
      github: "https://github.com/srinadh-ghattamneni",
      website: "https://github.com/srinadh-ghattamneni/Diabetes-Predection-using-ML"
    },
    Loan_Approval_prediction: {
      name: "Loan Approval Prediction",
      desc: "A web app to predict loan approval based on applicant details. Frontend in PHP/JS, backend with Flask ML API, and MySQL DB integration.",
      github: "https://github.com/srinadh-ghattamneni",
      website: "https://github.com/srinadh-ghattamneni/loan_prediction_app"
    },
    AI_Chat_Bot: {
      name: "AI Chat Bot",
      desc: "A full-stack AI chatbot web application built using Google Gemini API with JWT-based authentication, real-time chat interface, rate limiting, and a responsive design. ",
      github: "https://github.com/srinadh-ghattamneni/AI-Chat-Bot",
      website: "https://ai-chat-bot-ten-gamma.vercel.app/"
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
