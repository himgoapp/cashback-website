import { useState, useEffect } from "react";
import BlogWebPage from "./blogWebPage";
import BlogMobilePage from "./blogMobilePage";
import Navbar from "../../../common/navbar/navbar";
import NewFooter from "../../../common/footer/newFooter";


const BlogMain = () => {
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
                isMobile ? <BlogMobilePage /> : <BlogWebPage />
            }
        </>
    );
};

export default BlogMain;
