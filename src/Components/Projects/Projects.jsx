import './Projects.css';
import Frontend from '../Frontend/Frontend.jsx';
import WebDesign from '../WebDesign/WebDesign.jsx';
import UiUx from '../UiUx/UiUx.jsx';

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