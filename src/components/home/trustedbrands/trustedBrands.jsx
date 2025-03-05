import React, { useRef } from "react";
import styles from "./trustedBrands.module.css"
import { getPokerSiteImage } from "../../../helperFxns/colorCode";

const TrustedBrands = () => {
    const sliderRef = useRef(null);
    const users = [
        { name: "Junglee Poker" },
        { name: "MPL" },
        { name: "Poker Baazi" },
        { name: "A23poker" },
        { name: "PokerCircle" },
        { name: "PokerDangal" },
        { name: "Natural8" },
        { name: "Pocket52" },
        { name: "Adda52" },
        { name: "ACRpoker" },
        { name: "CoinPoker" },
        { name: "WPTglobal" }
    ];
    const pokerSites = {
        "Junglee Poker": "https://www.jungleerummy.com/",
        "MPL": "https://www.mpl.live/",
        "Poker Baazi": "https://www.pokerbaazi.com/",
        "A23poker": "https://www.a23.com/",
        "PokerCircle": "https://www.pokercircle.com/",
        "PokerDangal": "https://www.pokerdangal.com/",
        "Natural8": "https://www.natural8.com/",
        "Pocket52": "https://www.pocket52.com/",
        "Adda52": "https://www.adda52.com/",
        "ACRpoker": "https://www.americascardroom.eu/",
        "CoinPoker": "https://www.coinpoker.com/",
        "WPTglobal": "https://www.wptglobal.com/"
    };


    return (
        <div className={styles.main_container}>
            <div className={styles.heading}>Trusted by great brands</div>     
             <div className={styles.slider_container} ref={sliderRef}>
            <div className={styles.slider}>
                {[...users, ...users].map((user, index) => (
                    <a
                        key={index}
                        href={pokerSites[user.name] || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.card_link}
                    >
                        <div className={styles.user_card}>
                            <div className={styles.card_body_custom}>
                                <div className={styles.logo_container}>
                                    <img src={getPokerSiteImage(user.name)} alt={user?.name} className={styles.logo} />
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
        </div>

    )
};

export default TrustedBrands;



