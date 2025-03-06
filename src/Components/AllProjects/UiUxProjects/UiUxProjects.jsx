import './UiUxProjects.css';
import Header from '../../Header/Header.jsx';
import Footer from '../../Footer/Footer.jsx';
import ProjectDetails from '../../ProjectDetails/ProjectDetails';
import sampleImage from '../../../assets/images/sample.png'

function UiUxProjects(){
    return(
        <>
            <Header/>
            <main className="all-uiux-container">
                <h1>UI/UX Design Projects</h1>
                <section className="all-uiux-projects">
                    <ProjectDetails
                    image={sampleImage}
                    imageRight={false}
                    title="Quiz App"
                    label="Figma"
                    problem={true}
                    solution={true}
                    description1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    description2="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea."
                    />
                    <ProjectDetails
                    image={sampleImage}
                    imageRight={true}
                    title="Quiz App"
                    label="Figma"
                    problem={true}
                    solution={true}
                    description1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    description2="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea."
                    />
                    <ProjectDetails
                    image={sampleImage}
                    imageRight={false}
                    title="Quiz App"
                    label="Figma"
                    problem={true}
                    solution={true}
                    description1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    description2="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea."
                    />
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default UiUxProjects;