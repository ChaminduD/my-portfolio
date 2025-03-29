import React, { useState, useEffect } from 'react';
import './ScrollToTopBtn.css';
import { navArrowIcon } from '../Icon/Icons.jsx';
import Icon from '../Icon/Icon.jsx';

function ScrollToTopBtn(){
    const [isVisible, setIsVisible] = useState(false);

    function toggleVisibility(){
        if(window.pageYOffset > 50){
            setIsVisible(true);
        }else{
            setIsVisible(false);
        }
    }

    function scrollToTop(){
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return(
        <div>
            {isVisible && (
                <button className="scroll-to-top-arrow" onClick={scrollToTop}>
                    <Icon className="scroll-to-top-arrow-icon" svgCode={navArrowIcon}/>
                </button>
            )}
        </div>
    );
}

export default ScrollToTopBtn;