import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  // State to track visibility of the button
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on scroll position
  const handleScroll = () => {
    if (window.pageYOffset > 300) { // Show button after scrolling 300px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll effect
    });
  };

  // Add scroll event listener on component mount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    
    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={buttonStyle}
        >
          ↑
        </button>
      )}
    </>
  );
};

// Button style for positioning it at the bottom-right of the page
const buttonStyle = {
  position: "fixed",
  bottom: "30px",
  right: "20px",
//   backgroundColor: "#007BFF",
  backgroundColor: "#3968eb",
  color: "white",
  border: "none",
  borderRadius: "50%",
  padding: "10px 15px",
  fontSize: "20px",
  cursor: "pointer",
//   fontWeight:"bold",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

export default ScrollToTopButton;
