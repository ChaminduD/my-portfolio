import PropTypes from 'prop-types';
import './PrimaryButton.css';
import { arrowIcon, allIcon } from '../Icon/Icons.jsx';
import Icon from '../Icon/Icon.jsx'

function PrimaryButton({ text, onClick, type, icon }){
    let svgCode;
    switch (icon) {
      case 'arrow':
        svgCode = arrowIcon;
        break;
      case 'all':
        svgCode = allIcon;
        break;
      default:
        svgCode = null;
    }

    return(
        <button type={type} className="primary-btn" onClick={onClick}>
            {text}
            {svgCode && <Icon svgCode={svgCode} />}
        </button>
    );
}

PrimaryButton.propTypes = {
    text: PropTypes.string.isRequired, // The text to display inside the button
    onClick: PropTypes.func.isRequired, // Click handler function
    type: PropTypes.string, // Type of the button
    icon: PropTypes.string,
}

//Set default props
PrimaryButton.defaultProps = {
    type: 'button',
    icon: null,
}

export default PrimaryButton;