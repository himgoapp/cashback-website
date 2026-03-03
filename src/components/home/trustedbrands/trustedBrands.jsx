import React, { useRef } from "react";
import styles from "./trustedBrands.module.css"
import { getShoppingSiteImage } from "../../../helperFxns/colorCode";

const TrustedBrands = () => {
    const sliderRef = useRef(null);
    const users = [
        { name: "Junglee Shopping" },
        { name: "MPL" },
        { name: "Shopping Baazi" },
        { name: "A23shopping" },
        { name: "ShoppingCircle" },
        { name: "ShoppingDangal" },
        { name: "Natural8" },
        { name: "Pocket52" },
        { name: "Adda52" },
        { name: "ACRshopping" },
        { name: "CoinShopping" },
        { name: "WPTglobal" }
    ];
    const shoppingSites = {
        "Junglee Shopping": "https://www.jungleeshopping.com/",
        "MPL": "https://www.mpl.live/",
        "Shopping Baazi": "https://www.shoppingbaazi.com/",
        "A23shopping": "https://www.a23.com/",
        "ShoppingCircle": "https://www.shoppingcircle.com/",
        "ShoppingDangal": "https://www.shoppingdangal.com/",
        "Natural8": "https://www.natural8.com/",
        "Pocket52": "https://www.pocket52.com/",
        "Adda52": "https://www.adda52.com/",
        "ACRshopping": "https://www.americascardroom.eu/",
        "CoinShopping": "https://www.coinshopping.com/",
        "WPTglobal": "https://www.wptglobal.com/"
    };


    return (
<>
<div className={styles.heading}>Trusted by great brands</div>     

             <div className={styles.slider_container} ref={sliderRef}>
            <div className={styles.slider}>
                {[...users, ...users].map((user, index) => (
                    <a
                        key={index}
                        href={shoppingSites[user.name] || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.card_link}
                    >
                        <div className={styles.user_card}>
                            <div className={styles.card_body_custom}>
                                <div className={styles.logo_container}>
                                    <img src={getShoppingSiteImage(user.name)} alt={user?.name} className={styles.logo} />
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
     </>
    )
};

export default TrustedBrands;



