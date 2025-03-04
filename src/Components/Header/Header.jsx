import './Header.css';
import { modeIcon, dropdownArrowIcon } from '../Icon/Icons.jsx';
import Icon from '../Icon/Icon.jsx';

function Header(){
    return(
        <header>
            <nav>
                <ul className="main-nav-links">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li className="projects-nav">
                        <a href="">Projects
                            <Icon svgCode={dropdownArrowIcon}/>
                        </a>
                        <ul className="projects-nav-links">
                            <li><a href="">Frontend Dev</a></li>
                            <li><a href="">Web Design</a></li>
                            <li><a href="">UI/UX Design</a></li>
                        </ul>
                    </li>
                    <li><a href="">Resume</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                <Icon className="mode-icon" svgCode={modeIcon} width={48} height={48}/>
            </nav>
        </header>
    );
}

export default Header;