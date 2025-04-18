import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProjectsSubSections.css';
import ProjectCard from '../ProjectCard/ProjectCard.jsx';
import { topProjects } from '../../data/projectsData.js';
import { navArrowIcon } from '../Icon/Icons.jsx';
import Icon from '../Icon/Icon.jsx';
import PrimaryButton from '../PrimaryButton/PrimaryButton.jsx';

function UiUx(){
    const [count, setCount] = useState(0);
    const uiUxProjects = topProjects.uiux;

    function prevProject(){
        setCount(c=> c - 1);
    }

    function nextProject(){
        setCount(c=> c + 1);
    }

    return(
        <section id="ui-ux-projects" className="ui-ux-projects-container section">
            <h3>UI/UX Design</h3>
            <div className="project-container">
                {uiUxProjects.map((project, index) => (
                    count === index && <ProjectCard key={index} {...project}/>
                ))}
                
                <button className="prev-btn" onClick={prevProject} disabled={count === 0}>
                    <Icon className="prev-btn-icon" svgCode={navArrowIcon} width={60} height={60}/>
                </button>
                                
                <button className="next-btn" onClick={nextProject} disabled={count === uiUxProjects.length - 1}>
                    <Icon className="next-btn-icon" svgCode={navArrowIcon} width={60} height={60}/>
                </button>
            </div>

            <Link to="/projects/uiux">
                <PrimaryButton text="View All Projects" icon="all"/>
            </Link>
        </section>
    );
}

export default UiUx;