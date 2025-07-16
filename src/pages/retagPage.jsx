import { useState, useEffect } from "react";
import Navbar from "../components/common/navbar/navbar";
import MainContainer from "../layout/mainContainer";
import NewsletterSubscription from "../components/home/subscribe/newsLetterSubscription";
import NewFooter from "../components/common/footer/newFooter";
import Meta from "../Meta";

const RetagPage = () => {
  useEffect(() => {}, []);
  return (
    <div>
      <Meta
        title="Best Poker Rakeback Site India | Win Real Money "
        description="Top Poker Rakeback and Cashback Site in India | Play Online Poker Games in India with Your Choice of Poker Website and Win Real Money 2025."
        link="https://rakebackk.com"
      />

      {/*---Latest Code--*/}
      <Navbar page="home" />

      <MainContainer>
        <p>Retag Page</p>
        <NewsletterSubscription />
        <NewFooter />
      </MainContainer>
    </div>
  );
};

export default RetagPage;
