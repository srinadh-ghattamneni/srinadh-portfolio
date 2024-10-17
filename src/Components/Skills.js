import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import { FaReact, FaGitAlt, FaGithub, FaBootstrap, FaJava, FaPython, FaHtml5 } from "react-icons/fa";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import { SiExpress, SiMongodb, SiCss3 } from "react-icons/si";
import { TbFileTypeSql } from "react-icons/tb";  
import { FaRProject } from "react-icons/fa6";
// Map each skill to its corresponding icon
const iconMap = {
    react: <FaReact />,
    node: <DiNodejs />,
    express: <SiExpress />,
    mongodb: <SiMongodb />,
    git: <FaGitAlt />,
    github: <FaGithub />,
    javascript: <DiJavascript1 />,
    'c++': <CgCPlusPlus />,
    java: <FaJava />,
    python: <FaPython />,
    sql: <TbFileTypeSql />,
    html: <FaHtml5 />,
    css: <SiCss3 />,
    bootstrap: <FaBootstrap />,
    r:<FaRProject />

};

const Skills = ({ skill }) => {
    const normalizedSkill = skill.toLowerCase();  // Normalize the skill for consistency
    const Icon = iconMap[normalizedSkill];  // Get the corresponding icon from the map

    return (
        <div className='SkillBox' title={skill}>
            {Icon || <span>Icon Not Available</span>} {/* Fallback if icon doesn't exist */}
            <p class="skill-name">{skill}</p> {/* Display skill name below the icon */}
        </div>
    );
};

export default Skills;
