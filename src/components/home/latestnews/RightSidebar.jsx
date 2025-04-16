import React, { useEffect, useState, useRef } from "react";
import styles from "./rightSidebar.module.css";
import { getProducts } from "../../../servicefile/productservice";
import { getPokerSiteImage } from "../../../helperFxns/colorCode";
import { useNavigate } from "react-router-dom";
import IndiaFlag from "../../../assets/Flag_of_India.png"
const RightSidebar = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const getdata = async () => {
      setIsLoading(true);
      try {
        let data = await getProducts();
        if (data && data.length > 0) {
          setProducts(data);
        }
      } catch (error) {
        console.error("Error fetching poker rooms:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getdata();
  }, []);

  useEffect(() => {
    // Add subtle animation on scroll
    const handleScroll = () => {
      if (!sidebarRef.current) return;
      
      const rect = sidebarRef.current.getBoundingClientRect();
      const isVisible = 
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
      
      if (isVisible) {
        sidebarRef.current.classList.add(styles.visible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (roomId) => {
    navigate(`/description/${roomId}`);
  };

  const handleSignUp = (roomId, e) => {
    e.stopPropagation();
    // window.open(`/sign-up/${roomId}`, '_blank');
    navigate(`/description/${roomId}`);

  };

  if (isLoading) {
    return (
      <div className={`${styles.sidebar} ${styles.loading}`}>
        <div className={styles.loadingSpinner}></div>
        <p className={styles.loadingText}>Loading top poker rooms...</p>
      </div>
    );
  }

  return (
    <div className={styles.sidebar} ref={sidebarRef}>
      <div className={styles.heading}>
        <h2 className={styles.sidebarTitle}>Top Poker Rooms</h2>
        <div className={styles.locationBadge}>
          <img src={IndiaFlag} 
               alt="India flag" 
               className={styles.flagIcon} />
        </div>
      </div>
      
      <div className={styles.roomList}>
        {products.slice(0, 5).map((room, index) => {
          let roomId = `${room.name}-${room._id}`;
          roomId = roomId.replace(/[\s?]/g, "-");

          return (
            <div 
              key={index} 
              className={styles.roomCard} 
              onClick={() => handleClick(roomId)}
              style={{"--index": index + 1}}
            >
              <div className={styles.cardHeader}>
                <div className={styles.logoWrapper}>
                  <img 
                    src={getPokerSiteImage(room.name)} 
                    alt={`${room.name}`} 
                    className={styles.logo} 
                  />
                </div>
                <h3 className={styles.roomName}>{room.name}</h3>
              </div>
              
              <div className={styles.bonusHighlight}>
                <div className={styles.bonusIcon}>🎁</div>
                <div className={styles.bonusText}>{room.welcomeBonus}</div>
              </div>
              
              <button 
                className={styles.signupBtn}
                onClick={(e) => handleSignUp(roomId, e)}
              >
                Sign up
              </button>
            </div>
          );
        })}
      </div>
      
      <div className={styles.footerLink}>
        <button 
          className={styles.allRoomsLink}
          onClick={() => navigate("/offer-and-deals")}
        >
          List of all poker rooms for India
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;