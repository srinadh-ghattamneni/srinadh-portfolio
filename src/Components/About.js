import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Srinadh Ghattamneni</b> and I am from Ongole, India.
            'm a <b>MERN stack web developer</b> and a final-year B.Tech student in <b>Computer Science and Engineering</b> at <b>SRKREC, Bhimavaram</b>.

            I love to create  projects with beautiful designs, you can check out some of my work in the projects section.<br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
           
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
<div className='skills'>
    <Skills skill='React' />
    <Skills skill='Node' />
    <Skills skill='Express' />
    <Skills skill='MongoDb' />
    <Skills skill='Git' />
    <Skills skill='Github' />
    <Skills skill='Javascript' />
    <Skills skill="C/C++" />
    <Skills skill='Java' />
    <Skills skill='Python' />
    <Skills skill='SQL' />
    <Skills skill='HTML' />
    <Skills skill='CSS' />
    <Skills skill='Bootstrap' />
    <Skills skill='R' />
</div>

    </>
  )
}

export default About