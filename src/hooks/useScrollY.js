import { useState, useEffect } from "react";

export const useScrollY = () => {
    const [scrollY, setScrollY] = useState(0);
    const scrollHandler = () => {
        const scroll = window.scrollY || document.documentElement.scrollTop;
        setScrollY(scroll);
    };
    useEffect(() => {
        scrollHandler();
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);
    return [scrollY];
};
