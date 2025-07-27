import { useState, useEffect } from "react";
import LatestNews from "./LatestNews";
import LatestNewsDesktop from "./LastesNewsDesktop";

const LatestNewsMain = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 575);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 575);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {
                isMobile ? <LatestNews /> : <LatestNewsDesktop />
            }
        </>
    );
};

export default LatestNewsMain;
