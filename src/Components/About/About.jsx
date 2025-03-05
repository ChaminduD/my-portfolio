import './About.css';
import Services from '../Services/Services.jsx';
import Tools from '../Tools/Tools.jsx';
import WorkMethod from '../WorkMethod/WorkMethod.jsx';

function About(){
    return(
        <section id="about" className="about-container section">
            <h2 className="about-title">What I Do</h2>
            <p className="about-description">I bring creativity, technical skill, and a strategic approach to craft exceptional digital experiences. From visually stunning designs to responsive, user-friendly websites, I deliver tailored solutions that align with your goals. Explore my services, tools, and workflow to see how I bring ideas to life.</p>
            <Services/>
            <Tools/>
            <WorkMethod/>
        </section>
    );
}

export default About;