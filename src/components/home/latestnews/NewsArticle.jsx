import React, { useState } from "react";
import styles from "./news_article.module.css";

import Navbar from "../../common/navbar/navbar";
import Footer from "../../common/footer/footer";

const NewArticle = ({}) => {
  return (
    <>
      <Navbar page="home" />

      <div className={styles.latest_news}>
        {/* Header */}
        <div className={styles.header_container}>Online Poker News</div>
        <div className={styles.first_container}>
          <span className={styles.image}>
            <img src="https://cms.worldpokerdeals.com/assets/20c0567f-ce1c-4981-a6ce-3ad9e9493a46?format=webp&quality=75" />
          </span>
          <span className={styles.heading}>
            Best Online Poker Sites In <br />
            Texas 2025
          </span>
        </div>
        {/* <div className={styles.para}>
        
          <font>
            Poker is one of the most popular games among gambling enthusiasts in
            the USA. However, those who decide to play online poker in Texas for
            real money may face challenges. First of all, this relates to a
            complex legal landscape. Compared to Pennsylvania, West Virginia,
            Michigan, and five more states, Texans can only choose among
            offshore online poker rooms and sweepstakes platforms. Don’t want to
            deal with the subtleties of Texas poker regulation and start playing
            as soon as possible? We prepared a comprehensive guide on the topic
            and compiled a list of the best poker sites for Texas poker players
            you can check out right away.
          </font>
        </div> */}
      </div>
    </>
  );
};

export default NewArticle;
