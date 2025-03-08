import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Header.css';
import { modeIcon, dropdownArrowIcon } from '../Icon/Icons.jsx';
import Icon from '../Icon/Icon.jsx';

function Header(){
    const [activeSection, setActiveSection] = useState("");
    const [isManualScroll, setIsManualScroll] = useState(true);
    const location = useLocation();
    const scrollTimeout = useRef(null);
    const scrollPositionRef = useRef(0);

    // Handel route changes
    useEffect(() => {
        const { pathname } = location;

        // Handle projects pages
        if(pathname.startsWith("/projects/frontend")){
            setActiveSection("frontend-projects");
        }else if(pathname.startsWith("/projects/webdesign")){
            setActiveSection("web-design-projects");
        }else if(pathname.startsWith("/projects/uiux")){
            setActiveSection("ui-ux-projects");
        }  
    }, [location]);

    // Handle scroll detection
    useEffect(() => {
        const handleScroll = () => {
            if (!isManualScroll || location.pathname !== "/") return;

            const currentPosition = window.scrollY;
            // Ignore small scroll diffs during animation
            if (Math.abs(currentPosition - scrollPositionRef.current) < 50) return;

            scrollPositionRef.current = currentPosition;
            const sections = document.querySelectorAll(".section");
            let current = "";
            const scrollPosition = currentPosition + window.innerHeight * 0.4;

            sections.forEach((section) => {
                const { offsetTop, offsetHeight, id } = section;
                const sectionStart = offsetTop - window.innerHeight * 0.2;
                const sectionEnd = offsetTop + offsetHeight - window.innerHeight * 0.2;

                if (scrollPosition >= sectionStart && scrollPosition <= sectionEnd) {
                    current = id;
                }
            });

            setActiveSection(prev => current && current !== prev ? current : prev);
        };

        const debouncedScroll = () => {
            clearTimeout(scrollTimeout.current);
            scrollTimeout.current = setTimeout(handleScroll, 150);
        };

        window.addEventListener("scroll", debouncedScroll);
        return () => {
            window.removeEventListener("scroll", debouncedScroll);
            clearTimeout(scrollTimeout.current);
        };
    }, [location.pathname, isManualScroll]);

    // Unified click handler
    const handleNavClick = (sectionId) => {
        setIsManualScroll(false);
        setActiveSection(sectionId);
        
        // Match CSS transition duration
        setTimeout(() => setIsManualScroll(true), 1200);
    };

    // Determine if Projects dropdown should be active
    const isProjectsActive = [
        "projects",
        "frontend-projects",
        "web-design-projects",
        "ui-ux-projects"
    ].includes(activeSection) || location.pathname.startsWith('/projects/');
    
    return(
        <header>
            <nav>
                <ul className="main-nav-links">
                    <li>
                        <HashLink
                            smooth
                            to="/#home"
                            className={activeSection === "home" ? "active" : ""}
                            onClick={() => handleNavClick("home")}
                        >
                            Home
                        </HashLink>
                    </li>
                    <li>
                        <HashLink
                            smooth
                            to="/#about"
                            className={activeSection === "about" ? "active" : ""}
                            onClick={() => handleNavClick("about")}
                        >
                            About
                        </HashLink>
                    </li>
                    <li className="projects-nav">
                        <HashLink
                            smooth
                            to="/#projects"
                            className={isProjectsActive ? "active" : ""}
                            onClick={() => handleNavClick("projects")}
                        >
                            Projects
                            <Icon svgCode={dropdownArrowIcon}/>
                        </HashLink>
                        <ul className="projects-nav-links">
                            <li>
                                <Link
                                    to="/projects/frontend"
                                    className={activeSection === "frontend-projects" ? "active" : ""}
                                    onClick={() => handleNavClick("frontend-projects")}
                                >
                                    Frontend Dev
                                </Link>
                            </li>
                            <li>
                                <Link
                                to="/projects/webdesign"
                                className={activeSection === "web-design-projects" ? "active" : ""}
                                onClick={() => handleNavClick("web-design-projects")}
                                >
                                    Web Design
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/projects/uiux"
                                    className={activeSection === "ui-ux-projects" ? "active" : ""}
                                    onClick={() => handleNavClick("ui-ux-projects")}
                                >
                                    UI/UX Design
                                </Link>
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
                            className={activeSection === "contact" ? "active" : ""}
                            onClick={() => handleNavClick("contact")}
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