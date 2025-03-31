import './FrontendProjects.css';
import ProjectDetails from '../../ProjectDetails/ProjectDetails';
import { projects } from '../../../data/projectsData.js';
import ScrollToTopBtn from '../../ScrollToTopBtn/ScrollToTopBtn';

function FrontendProjects(){
    const frontendProjects = projects.frontend;

    return(
        <>
            <main className="all-frontend-container">
                <h1>Frontend Projects</h1>
                <section className="all-frontend-projects">
                    {frontendProjects.map((project, index) => (
                        <ProjectDetails key={index} {...project}/>
                    ))}
                </section>
                <ScrollToTopBtn/>
            </main>
        </>
    );
}

export default FrontendProjects;