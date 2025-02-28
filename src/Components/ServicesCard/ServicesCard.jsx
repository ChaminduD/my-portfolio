import PropTypes from 'prop-types';
import './ServicesCard.css';
import Icon from '../Icon/Icon.jsx';
import { frontendIcon, webDesignIcon, uiUxIcon, extensionIcon, cursorIcon, responsiveIcon } from '../Icon/Icons.jsx';

function ServicesCard({ icon, title, description }){
    let svgCode;
    switch(icon){
        case 'frontend':
            svgCode = frontendIcon;
            break;
        case 'webDesign':
            svgCode = webDesignIcon;
            break;
        case 'uiUx':
            svgCode = uiUxIcon;
            break;
        case 'extension':
            svgCode = extensionIcon;
            break;
        case 'cursor':
            svgCode = cursorIcon;
            break;
        case 'responsive':
            svgCode = responsiveIcon;
            break;
        default:
            svgCode = frontendIcon;
    }

    return(
        <div className="services-card">
            <Icon svgCode={svgCode}/>
            <h6>{title}</h6>
            <p>{description}</p>
        </div>
    );
}

ServicesCard.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default ServicesCard;