import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHash() {
    const { hash, pathname } = useLocation();
    const hasScrolled = useRef(false);

    useEffect(() => {
        if (hash && pathname === "/") {
            const element = document.getElementById(hash.replace("#", ""));
            if (!element || hasScrolled.current) return;

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        hasScrolled.current = true;
                        observer.unobserve(element);
                    }
                });
            });

            element.scrollIntoView({ behavior: "smooth" });
            observer.observe(element);

            return () => observer.disconnect();
        }
        hasScrolled.current = false;
    }, [hash, pathname]);

    return null;
}

export default ScrollToHash;