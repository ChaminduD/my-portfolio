import PropTypes from 'prop-types';
import './SecondaryButton.css';
import { HashLink } from 'react-router-hash-link';

function SecondaryButton({ text, onClick, type, link }){
    if(link?.startsWith("#") || link?.includes("/#")){
        // Render HashLink if the link is a hash link
        return(
            <HashLink smooth to={link} className="secondary-btn">
                {text}
            </HashLink>
        );
    }
    
    // Default to rendering a regular anchor or button
    return link ? (
        <a href={link} className="secondary-btn" target="_blank" rel="noopener noreferrer">
            {text}
        </a>
    ) : (
        <button type={type} className="secondary-btn" onClick={onClick}>
            {text}
        </button>
    );
}

SecondaryButton.propTypes = {
    text: PropTypes.string.isRequired, // The text to display inside the button
    onClick: PropTypes.func.isRequired, // Click handler function
    type: PropTypes.string, // Type of the button
    link: PropTypes.string, // Link URL for the anchor tag
}

//Set default props
SecondaryButton.defaultProps = {
    type: "button",
}

export default SecondaryButton;