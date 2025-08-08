import { useState, useEffect } from "react";
import Navbar from "../common/navbar/navbar";
import NewFooter from "../common/footer/newFooter";
import DictionaryComponent from "./dictionaypage";
const DictionaryPage = () => {
    // const [showModal, setShowModal] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div className="MobileHomepage">
            <DictionaryComponent />
        </div>
    );
};

export default DictionaryPage;
