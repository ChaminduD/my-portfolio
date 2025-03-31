import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProjectsSubSections.css';
import ProjectCard from '../ProjectCard/ProjectCard.jsx';
import { topProjects } from '../../data/projectsData.js';
import { navArrowIcon } from '../Icon/Icons.jsx';
import Icon from '../Icon/Icon.jsx';
import PrimaryButton from '../PrimaryButton/PrimaryButton.jsx';

function Frontend(){
    const [count, setCount] = useState(0);
    const frontendTopProjects = topProjects.frontend;

    function prevProject(){
        setCount(c=> c - 1);
    }

    function nextProject(){
        setCount(c=> c + 1);
    }

    return(
        <section id="frontend-projects" className="frontend-projects-container section">
            <h3>Frontend Development</h3>
            <div className="project-container">
                {frontendTopProjects.map((project, index) => (
                    count === index && <ProjectCard key={index} {...project}/>
                ))}

                <button className="prev-btn" onClick={prevProject} disabled={count === 0}>
                    <Icon className="prev-btn-icon" svgCode={navArrowIcon} width={60} height={60}/>
                </button>
                
                <button className="next-btn" onClick={nextProject} disabled={count === frontendTopProjects.length - 1}>
                    <Icon className="next-btn-icon" svgCode={navArrowIcon} width={60} height={60}/>
                </button>
            </div>

            <Link to="/projects/frontend">
                <PrimaryButton text="View All Projects" icon="all"/>
            </Link>
        </section>
    );
}

export default Frontend;