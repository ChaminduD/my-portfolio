import { useEffect } from 'react'; 
import './Contact.css';
import PrimaryButton from '../PrimaryButton/PrimaryButton.jsx';

function Contact(){
    useEffect(() => {
        const form = document.querySelector('.contact-form');

        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault(); // Prevent navigation during testing
                form.reset(); // Clears all inputs and textareas
                window.location.href = 'https://formspree.io/thanks?language=en'; // Redirect to the thank-you page
            });
        }

        // Cleanup the event listener when the component unmounts
        return () => {
            if (form) {
                form.removeEventListener('submit', () => {});
            }
        };
    }, []);

    return(
        <section id="contact" className="contact-container section">
            <h2 className="contact-title">Contact Me</h2>
            <p className="personal-email">chamindud.dahanayaka@gmail.com</p>
            <p className="contact-description">Feel free to reach out to me for any inquiries, collaborations, or project discussions.</p>

            <form
                action="https://formspree.io/f/xpwpgyyw"
                method="POST"
                className="contact-form"
            >
                <input type="text" placeholder="Name" name="name" required/>
                <input type="email" placeholder="Email" name="email" required/>
                <textarea placeholder="Message" name="message" required></textarea>

                <PrimaryButton type="submit" text="Send Message"/>
            </form>
        </section>
        
    );
}

export default Contact;