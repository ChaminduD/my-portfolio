import PropTypes from 'prop-types';
import './Label.css';
import Icon from '../Icon/Icon.jsx';
import { htmlIcon, tailwindCssIcon, bootstrapIcon, javaScriptIcon, wordPressIcon, pythonIcon, cssIcon, reactIcon, vsCodeIcon, canvaIcon, figmaIcon, webflowIcon, gitIcon } from '../Icon/Icons.jsx';

function Label({ icon, label }){
    let svgCode;
    switch(icon){
        case 'html':
            svgCode = htmlIcon;
            break;
        case 'tailwind':
            svgCode = tailwindCssIcon;
            break;
        case 'bootstrap':
            svgCode = bootstrapIcon;
            break;
        case 'javaScript':
            svgCode = javaScriptIcon;
            break;
        case 'wordPress':
            svgCode = wordPressIcon;
            break;
        case 'python':
            svgCode = pythonIcon;
            break;
        case 'css':
            svgCode = cssIcon;
            break;
        case 'react':
            svgCode = reactIcon;
            break;
        case 'vsCode':
            svgCode = vsCodeIcon;
            break;
        case 'canva':
            svgCode = canvaIcon;
            break;
        case 'figma':
            svgCode = figmaIcon;
            break;
        case 'webflow':
            svgCode = webflowIcon;
            break;
        case 'git':
            svgCode = gitIcon;
            break;
        default:
            svgCode = htmlIcon;
    }

    return(
        <div className="label-container">
            <Icon className="label-icon" svgCode={svgCode} width={40} height={40}/>
            <span className="label-text">{label}</span>
        </div>
    );
}

Label.propTypes = {
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
}

export default Label;