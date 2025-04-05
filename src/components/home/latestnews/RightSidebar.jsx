import React, { useEffect, useState } from "react";
import styles from "./rightSidebar.module.css";
import { getProducts } from "../../../servicefile/productservice";
import { getPokerSiteImage } from "../../../helperFxns/colorCode";
import { useNavigate } from "react-router-dom";

const RightSidebar = () => {
 const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      let data = await getProducts();
      if (data && data.length > 0) {
        setProducts(data);
      }
    };
    getdata();
  }, []);
  const handleClick = (roomId) => {
    navigate(`/description/${roomId}`);
  };
  return (
    <div className={styles.sidebar}>
      <div className={styles.heading}>
      <h4 className={styles.sidebarTitle}>Top Poker Rooms</h4>
      <span className={styles.country}><img src="https://worldpokerdeals.com/icons/countries/India.svg" style={{width:"20px"}}/> for India</span>
      </div>
      <ul className={styles.list}>
      {products.slice(0, 5).map((room, index) => {
        let roomId = `${room.name}_${room._id}`;
        roomId = roomId.replace(/[\s?]/g, "_");


        return(
        <li key={index} className={styles.item} onClick={() => handleClick(roomId)}>
          <img src={getPokerSiteImage(room.name)} alt={`Logo of ${room.name}`} className={styles.logo} />
          <div className={styles.details}>
            <strong>{room.name}</strong>
            <p>🎁 {room.welcomeBonus}</p>
          </div>
          <span className={styles.arrow}>›</span>
        </li>
      )})}

      </ul>
      <button 
        className={styles.link}
        onClick={() => navigate("/offer-and-deals")}
      >
        List of all poker rooms for India
      </button>
    </div>
  );
};

export default RightSidebar;
