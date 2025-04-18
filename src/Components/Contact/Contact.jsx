import './Contact.css';
import PrimaryButton from '../PrimaryButton/PrimaryButton.jsx';

function Contact(){
    const handleSubmit = (e) => {
        // Prevent default to handle form data manually
        e.preventDefault();

        const form = e.target; // Get the form element

        // Submit the form data to Formspree
        form.submit(); // Let Formspree handle the submission
        
        // Reset the form fields after submission
        form.reset(); 
    };

    return(
        <section id="contact" className="contact-container section">
            <h2 className="contact-title">Contact Me</h2>
            <p className="personal-email">chamindud.dahanayaka@gmail.com</p>
            <p className="contact-description">Feel free to reach out to me for any inquiries, collaborations, or project discussions.</p>

            <form
                action="https://formspree.io/f/xpwpgyyw"
                method="POST"
                className="contact-form"
                onSubmit={handleSubmit}
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