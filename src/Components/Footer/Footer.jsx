import './Footer.css';
import { sendIcon, linkedInIcon, gitHubIcon } from '../Icon/Icons.jsx';
import Icon from '../Icon/Icon.jsx';

function Footer(){
    const currentYear = new Date().getFullYear(); 

    return(
        <footer>
            <div className="email-link">
                <a href="mailto:chamindud.dahanayaka@gmail.com?subject=Portfolio Inquiry&body=Hi Chamindu,">
                    <p>SEND ME AN EMAIL</p>
                    <Icon svgCode={sendIcon} width={32} height={32}/>
                </a>
            </div>
            <div className="social-links">
                <a href="https://www.linkedin.com/in/chamindudahanayaka/" target="_blank" rel="noopener noreferrer">
                    <Icon svgCode={linkedInIcon} width={48} height={48}/>
                </a>
                <a href="https://github.com/ChaminduD" target="_blank" rel="noopener noreferrer">
                    <Icon svgCode={gitHubIcon} width={48} height={48}/>
                </a>
            </div>
            <p className="copyright-text">&copy; {currentYear} Chamindu Dahanayaka</p>
        </footer>
    );
}

export default Footer;