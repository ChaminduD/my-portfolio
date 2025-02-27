import PropTypes from 'prop-types';
import './SecondaryButton.css';

function SecondaryButton({ text, onClick, type }){
    return(
        <button type={type} className="secondary-btn" onClick={onClick}>
            {text}
        </button>
    );
}

SecondaryButton.propTypes = {
    text: PropTypes.string.isRequired, // The text to display inside the button
    onClick: PropTypes.func.isRequired, // Click handler function
    type: PropTypes.string, // Type of the button
}

//Set default props
SecondaryButton.defaultProps = {
    type: "button",
}

export default SecondaryButton;