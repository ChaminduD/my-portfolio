import './FrontendProjects.css';
import Header from '../../Header/Header.jsx';
import Footer from '../../Footer/Footer.jsx';
import ProjectDetails from '../../ProjectDetails/ProjectDetails';
import sampleImage from '../../../assets/images/sample.png'

function FrontendProjects(){
    return(
        <>
            <Header/>
            <main className="all-frontend-container">
                <h1>Frontend Projects</h1>
                <section className="all-frontend-projects">
                    <ProjectDetails
                    image={sampleImage}
                    imageRight={false}
                    title="Weather App"
                    label="HTML/CSS/JavaScript"
                    problem={true}
                    solution={true}
                    description1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    description2="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea."
                    />
                    <ProjectDetails
                    image={sampleImage}
                    imageRight={true}
                    title="Weather App"
                    label="HTML/CSS/JavaScript"
                    problem={true}
                    solution={true}
                    description1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    description2="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea."
                    />
                    <ProjectDetails
                    image={sampleImage}
                    imageRight={false}
                    title="Weather App"
                    label="HTML/CSS/JavaScript"
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

export default FrontendProjects;