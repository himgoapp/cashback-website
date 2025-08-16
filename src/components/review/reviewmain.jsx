import { useState, useEffect } from "react";
import Review from "./review";
import ReviewMobile from "./reviewMobile";

const ReviewMain = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {
                isMobile ? <ReviewMobile /> : <Review />
            }
        </>
    );
};

export default ReviewMain;
