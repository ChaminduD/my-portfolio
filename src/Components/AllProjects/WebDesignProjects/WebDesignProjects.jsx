import './WebDesignProjects.css';
import ProjectDetails from '../../ProjectDetails/ProjectDetails.jsx';
import { projects } from '../../../data/projectsData.js';
import ScrollToTopBtn from '../../ScrollToTopBtn/ScrollToTopBtn.jsx';

function WebDesignProjects(){
    const webDesignProjects = projects.webDesign;
    return(
        <>
            <main className="all-web-design-container">
                <h1>Web Design Projects</h1>
                <section className="all-web-design-projects">
                    {webDesignProjects.map((project, index) => (
                        <ProjectDetails key={index} {...project}/>
                    ))}
                </section>
                <ScrollToTopBtn/>
            </main>
        </>
    );
}

export default WebDesignProjects;