import { useEffect, useState } from "react";

export const useViewPort = () => {
    const [windowWidth, setWindowWidth] = useState(
        window.innerWidth || document.documentElement.clientWidth
    );
    useEffect(() => {
        const windowWidthHandler = () => {
            const width =
                window.innerWidth || document.documentElement.clientWidth;
            setWindowWidth(width);
        };
        windowWidthHandler();
        window.addEventListener("resize", windowWidthHandler);
        return () => {
            window.removeEventListener("resize", windowWidthHandler);
        };
    }, []);
    return [windowWidth];
};
