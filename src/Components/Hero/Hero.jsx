import './Hero.css';
import profilePic from '../../assets/images/profile-pic.jpg';
import PrimaryButton from '../PrimaryButton/PrimaryButton.jsx';
import SecondaryButton from '../SecondaryButton/SecondaryButton.jsx';

function Hero(){
    return(
        <section id="home" className="hero-container section">
            <img src={profilePic} alt="Profile Picture"/>
            <h1>
                <span className="intro-text">Hi, I&apos;m</span>
                <span className="name">Chamindu Dahanayaka</span>
            </h1>
            <p>A passionate Frontend Developer and Web Designer</p>
            <div className="button-container">
                <PrimaryButton text="About Me" icon="arrow" link="/#about"/>
                <SecondaryButton text="Contact Me" link="/#contact"/>
            </div>
        </section>
    );
}

export default Hero;