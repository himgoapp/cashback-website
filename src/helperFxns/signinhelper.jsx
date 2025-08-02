import { useEffect } from "react";

export default function useViewportHeight() {
    useEffect(() => {
        function setVh() {
            document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
        }

        setVh(); // set on first load
        window.addEventListener("resize", setVh); // reset on resize

        return () => window.removeEventListener("resize", setVh); // cleanup on unmount
    }, []);
}