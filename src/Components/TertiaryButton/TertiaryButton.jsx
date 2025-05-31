import PropTypes from 'prop-types';
import './TertiaryButton.css';
import { arrowIcon, allIcon } from '../Icon/Icons.jsx';
import Icon from '../Icon/Icon.jsx'
import { HashLink } from 'react-router-hash-link';

function TertiaryButton({ text, onClick, type, icon, link }){
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

    if(link?.startsWith("#") || link?.includes("/#")){
        // Render HashLink if the link is a hash link
        return(
            <HashLink smooth to={link} className="tertiary-btn">
                {text}
                {svgCode && <Icon svgCode={svgCode} />}
            </HashLink>
        );
    }

    // Default to rendering a regular anchor or button
    return link ? (
        <a href={link} className="tertiary-btn" target="_blank" rel="noopener noreferrer">
            {text}
            {svgCode && <Icon svgCode={svgCode} />}
        </a>
    ) : (
        <button type={type} className="tertiary-btn" onClick={onClick}>
            {text}
            {svgCode && <Icon svgCode={svgCode} />}
        </button>
    );
}

TertiaryButton.propTypes = {
    text: PropTypes.string.isRequired, // The text to display inside the button
    onClick: PropTypes.func, // Click handler function
    type: PropTypes.string, // Type of the button
    icon: PropTypes.string,
    link: PropTypes.string, // Link URL for the anchor tag
}
    
//Set default props
TertiaryButton.defaultProps = {
    type: 'button',
    icon: null,
}

export default TertiaryButton;