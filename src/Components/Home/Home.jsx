import './Home.css';
import Header from '../Header/Header.jsx';
import Hero from '../Hero/Hero.jsx';
import About from '../About/About.jsx';
import Projects from '../Projects/Projects.jsx';
import Contact from '../Contact/Contact.jsx';
import Footer from '../Footer/Footer.jsx';

function Home(){
    return(
        <>
            <Header/>
            <main>
                <Hero/>
                <About/>
                <Projects/>
                <Contact/>
            </main>
            <Footer/>
        </>
    );
}

export default Home;