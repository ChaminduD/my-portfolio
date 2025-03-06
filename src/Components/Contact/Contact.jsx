import './Contact.css';
import PrimaryButton from '../PrimaryButton/PrimaryButton.jsx';

function Contact(){
    return(
        <section id="contact" className="contact-container section">
            <h2 className="contact-title">Contact Me</h2>
            <p className="personal-email">chamindud.dahanayaka@gmail.com</p>
            <p className="contact-description">Feel free to reach out to me for any inquiries, collaborations, or project discussions.</p>

            <form action="" className="contact-form">
                <input type="text" placeholder="Name" name="name" required/>
                <input type="email" placeholder="Email" name="email" required/>
                <textarea placeholder="Message" name="message" required></textarea>

                <PrimaryButton type="submit" text="Send Message"/>
            </form>
        </section>
        
    );
}

export default Contact;