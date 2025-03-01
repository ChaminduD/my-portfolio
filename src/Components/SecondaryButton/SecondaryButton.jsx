import PropTypes from 'prop-types';
import './SecondaryButton.css';

function SecondaryButton({ text, onClick, type, link }){
    return link ? (
        <a href={link} className="secondary-btn">
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