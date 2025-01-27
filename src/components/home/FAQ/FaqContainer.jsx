import React from "react";
import styles from "./faq_container.module.css";
import Navbar from "../../common/navbar/navbar";


const FaqContainer = () => {
	return (
        <>
        	<Navbar page='home' />
            <div
            className={`${styles.faq_container} container_max`}
            >
                <div 
                className={styles.header_container}
                >
                Frequently asked questions
            </div>
		</div>
        </>
    );
};

export default FaqContainer;
