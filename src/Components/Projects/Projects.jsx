import './Projects.css';
import Frontend from '../ProjectsSubSections/Frontend.jsx';
import WebDesign from '../ProjectsSubSections/WebDesign.jsx';
import UiUx from '../ProjectsSubSections/UiUx.jsx';

function Projects(){
    return(
        <section id="projects" className="all-projects-container section">
            <h2 className="projects-title">My Work</h2>
            <div className="projects-category-container">
                <Frontend/>
                <WebDesign/>
                <UiUx/>
            </div>
            
        </section>
    );
}

export default Projects;