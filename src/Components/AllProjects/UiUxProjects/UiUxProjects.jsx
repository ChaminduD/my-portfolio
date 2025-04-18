import './UiUxProjects.css';
import ProjectDetails from '../../ProjectDetails/ProjectDetails.jsx';
import { projects } from '../../../data/projectsData.js';
import ScrollToTopBtn from '../../ScrollToTopBtn/ScrollToTopBtn.jsx';

function UiUxProjects(){
    const uiUxProjects = projects.uiux;

    return(
        <>
            <main className="all-uiux-container">
                <h1>UI/UX Design Projects</h1>
                <section className="all-uiux-projects">
                    {uiUxProjects.map((project, index) => (
                        <ProjectDetails key={index} {...project}/>
                    ))}
                </section>
                <ScrollToTopBtn/>
            </main>
        </>
    );
}

export default UiUxProjects;