import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Srinadh Ghattamneni</h4>
      <h4>Copyright &copy; 2024 SG</h4>
      <div className='footerLinks'>
        <a href="https://github.com/srinadh-ghattamneni" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/srinadhghattamneni/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:srinadhghattamneni1990@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/u/srinadh_1_2_3_/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer