import './Home.css';
import Hero from '../Hero/Hero.jsx';
import About from '../About/About.jsx';
import Projects from '../Projects/Projects.jsx';
import Contact from '../Contact/Contact.jsx';

function Home(){
    return(
        <>
            <main>
                <Hero/>
                <About/>
                <Projects/>
                <Contact/>
            </main>
        </>
    );
}

export default Home;