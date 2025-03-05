import React, { useState, useEffect } from 'react';
import './Header.css';
import { modeIcon, dropdownArrowIcon } from '../Icon/Icons.jsx';
import Icon from '../Icon/Icon.jsx';

function Header(){
    const [activeSection, setActiveSection] = useState("");

    function handleScroll(){
        const sections = document.querySelectorAll(".section");
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if(window.scrollY >= sectionTop - sectionHeight / 15){
                current = section.getAttribute("id");
            }
        });

        setActiveSection(current);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return(
        <header>
            <nav>
                <ul className="main-nav-links">
                    <li><a href="#home" className={`${activeSection === "home" ? "active" : ""}`}>Home</a></li>
                    <li><a href="#about" className={`${activeSection === "about" ? "active" : ""}`}>About</a></li>
                    <li className="projects-nav">
                        <a href="#projects" className={`${(activeSection === "projects" || activeSection === "frontend-projects" || activeSection === "web-design-projects" || activeSection === "ui-ux-projects") ? "active" : ""}`}>Projects
                            <Icon svgCode={dropdownArrowIcon}/>
                        </a>
                        <ul className="projects-nav-links">
                            <li><a href="#projects" className={`${activeSection === "projects" || activeSection === "frontend-projects" ? "active" : ""}`}>Frontend Dev</a></li>
                            <li><a href="#web-design-projects" className={`${activeSection === "web-design-projects" ? "active" : ""}`}>Web Design</a></li>
                            <li><a href="#ui-ux-projects" className={`${activeSection === "ui-ux-projects" ? "active" : ""}`}>UI/UX Design</a></li>
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