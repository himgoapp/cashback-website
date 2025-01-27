import React from "react";
import styles from "./latest_news.module.css";
import Navbar from "../../common/navbar/navbar";


const LatestNews = () => {
	return (
        <>
        	<Navbar page='home' />
            <div className={`${styles.latest_news} container_max`}>
                <div className={styles.header_container}>
     			Online Poker News

            </div>
		</div>
        </>
    );
};

export default LatestNews;
