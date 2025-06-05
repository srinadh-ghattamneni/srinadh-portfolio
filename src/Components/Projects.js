import React from 'react';
import ProjectBox from './ProjectBox';

import Diabetes from '../images/Diabetes.png';
import Todo from '../images/Todo.png';
import ChatSphere from '../images/ChatSphere.png';
import HolidayHub from '../images/HolidayHub.png';
import Loan from '../images/Loan.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={HolidayHub} projectName="Holiday Hub" />
        <ProjectBox projectPhoto={ChatSphere} projectName="ChatSphere" />
        <ProjectBox projectPhoto={Todo} projectName="To_Do_app" />
        <ProjectBox projectPhoto={Diabetes} projectName="Diabetes_Prediction_using_ML" />
        <ProjectBox projectPhoto={Loan} projectName="Loan Approval prediction" />
      </div>
    </div>
  );
};

export default Projects;
