import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './WebDesign.css';
import ProjectCard from '../ProjectCard/ProjectCard.jsx';
import project1 from '../../assets/images/sample.png';
import { navArrowIcon } from '../Icon/Icons.jsx';
import Icon from '../Icon/Icon.jsx';
import PrimaryButton from '../PrimaryButton/PrimaryButton.jsx';

function WebDesign(){
    const [count, setCount] = useState(0);

    function prevProject(){
        setCount(c=> c - 1);
    }

    function nextProject(){
        setCount(c=> c + 1);
    }

    return(
        <section id="web-design-projects" className="web-design-projects-container section">
            <h3>Web Design</h3>
            <div className="project-container">
                {count === 0 &&
                    <ProjectCard
                        title="Title"
                        label="Tag"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea."
                        image={project1}
                        primaryBtnLink=""
                        secondaryBtnLink=""
                        imageRight={true}
                    />
                }
                {count === 1 &&
                    <ProjectCard
                        title="Title 2"
                        label="Tag"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea."
                        image={project1}
                        primaryBtnLink=""
                        secondaryBtnLink=""
                        imageRight={true}
                    />
                }
                {count === 2 &&
                    <ProjectCard
                        title="Title 3"
                        label="Tag"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea."
                        image={project1}
                        primaryBtnLink=""
                        secondaryBtnLink=""
                        imageRight={true}
                    />
                }

                <button className="prev-btn" onClick={prevProject} disabled={count === 0}>
                    <Icon className="prev-btn-icon" svgCode={navArrowIcon} width={60} height={60}/>
                </button>
                
                <button className="next-btn" onClick={nextProject} disabled={count === 2}>
                    <Icon className="next-btn-icon" svgCode={navArrowIcon} width={60} height={60}/>
                </button>
            </div>

            <Link to="/projects/webdesign">
                <PrimaryButton text="View All Projects" icon="all"/>
            </Link>
        </section>
    );
}

export default WebDesign;