import React from 'react';
import ProjectBox from './ProjectBox';
import Diabetes from '../images/Diabetes.png';
import Todo from '../images/Todo.png';


const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={Diabetes} projectName="Diabetes_Prediction_using_ML" />
        <ProjectBox projectPhoto={Todo} projectName="To_Do_app" />
       
      </div>

    </div>
  )
}

export default Projects