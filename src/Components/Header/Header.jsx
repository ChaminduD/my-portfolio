import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import './Header.css';
import { modeIcon, dropdownArrowIcon } from '../Icon/Icons.jsx';
import Icon from '../Icon/Icon.jsx';

function Header(){
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        function handleScroll() {
            const sections = document.querySelectorAll(".section");
            let current = "";
    
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
    
                if (
                    window.scrollY >= sectionTop - sectionHeight / 10 && 
                    window.scrollY < sectionTop + sectionHeight
                ) {
                    current = section.getAttribute("id");
                }
            });
    
            if (current && current !== activeSection) {
                setActiveSection(current);
                window.history.pushState(null, "", `/#${current}`); // Update the URL without reloading
            }
        }
    
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [activeSection]);
    
    return(
        <header>
            <nav>
                <ul className="main-nav-links">
                    <li>
                        <HashLink
                            smooth to="/#home"
                            className={`${activeSection === "home" ? "active" : ""}`}
                        >
                            Home
                        </HashLink>
                    </li>
                    <li>
                        <HashLink
                            smooth to="/#about"
                            className={`${activeSection === "about" ? "active" : ""}`}
                        >
                            About
                        </HashLink>
                    </li>
                    <li className="projects-nav">
                        <HashLink
                            smooth to="/#projects"
                            className={`${(activeSection === "projects" || activeSection === "frontend-projects" || activeSection === "web-design-projects" || activeSection === "ui-ux-projects") ? "active" : ""}`}
                        >
                            Projects
                            <Icon svgCode={dropdownArrowIcon}/>
                        </HashLink>
                        <ul className="projects-nav-links">
                            <li>
                                <HashLink
                                    smooth to="/#projects"
                                    className={`${activeSection === "projects" || activeSection === "frontend-projects" ? "active" : ""}`}
                                >
                                    Frontend Dev
                                </HashLink>
                            </li>
                            <li>
                                <HashLink
                                smooth to="/#web-design-projects"
                                className={`${activeSection === "web-design-projects" ? "active" : ""}`}
                                >
                                    Web Design
                                </HashLink>
                            </li>
                            <li>
                                <HashLink
                                    smooth to="/#ui-ux-projects"
                                    className={`${activeSection === "ui-ux-projects" ? "active" : ""}`}
                                >
                                    UI/UX Design
                                </HashLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="">
                            Resume
                        </a>
                    </li>
                    <li>
                        <HashLink
                            smooth to="/#contact"
                            className={`${activeSection === "contact" ? "active" : ""}`}
                        >
                            Contact
                        </HashLink>
                    </li>
                </ul>
                <Icon className="mode-icon" svgCode={modeIcon} width={48} height={48}/>
            </nav>
        </header>
    );
}

export default Header;