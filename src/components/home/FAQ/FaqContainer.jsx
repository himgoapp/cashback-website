import React, { useState, useEffect } from "react";
import styles from "./faq_container.module.css";
import Navbar from "../../common/navbar/navbar";
import Footer from "../../common/footer/footer";
import Reveal from "../../common/reveal/Reveal";

// Static FAQ Data about Rakeback
const faqData = [
  {
    question: "What is Rakeback?",
    answer: "Rakeback is a reward system offered by online poker sites where a portion of the rake (the fee the site takes from each pot) is returned to the player. Rakeback typically ranges from 20% to 50%, but this can vary depending on the poker site and the player's activity."
  },
  {
    question: "How does Rakeback work?",
    answer: "Rakeback works by returning a percentage of the rake you contribute while playing poker. As you play, a small portion of the pot goes to the poker site as a rake. The poker site then returns a percentage of that rake to you, typically on a weekly or monthly basis."
  },
  {
    question: "How is Rakeback calculated?",
    answer: "Rakeback is usually calculated based on how much rake you've contributed in a given time period. Some sites use a formula based on the total amount of rake you've generated, while others might use points or loyalty tiers. The more you play, the more rakeback you can earn."
  },
  {
    question: "Why should I care about Rakeback?",
    answer: "Rakeback is essentially free money. It reduces the cost of playing poker by giving you back a portion of the rake you contribute. Over time, this can add up to a significant amount of money and improve your overall profitability, especially if you're a regular player."
  },
  {
    question: "How do I sign up for Rakeback?",
    answer: "To sign up for rakeback, you'll typically need to register through a dedicated affiliate link or promo code provided by the poker site. This ensures that you are eligible for rakeback rewards. Some sites require you to opt-in to rakeback programs after registration."
  },
  {
    question: "Can I earn Rakeback on all poker games?",
    answer: "Yes, rakeback is usually available on most types of poker games, including cash games, sit-and-gos, and multi-table tournaments. However, you should verify with the poker site’s terms, as some promotions may apply only to specific game formats."
  },
  {
    question: "Is Rakeback the same on every site?",
    answer: "No, rakeback terms vary by site. While some poker sites offer a flat percentage (e.g., 30% rakeback), others may provide more complex rewards structures, such as loyalty points or bonuses that increase with play volume. It's important to compare rakeback offers before choosing a site."
  },
  {
    question: "Are there any restrictions with Rakeback?",
    answer: "Yes, some sites have restrictions on rakeback. For example, certain games or promotions may not contribute to your rakeback, or you may need to reach a minimum threshold before rakeback is credited. Always check the terms and conditions of the rakeback program."
  },
  {
    question: "What is a Rakeback deal?",
    answer: "A rakeback deal refers to the agreement between a player and an affiliate or poker site where the player receives a portion of the rake generated from their play. These deals are often negotiated, and affiliates may offer additional bonuses or higher rakeback percentages depending on the player's volume."
  },
  {
    question: "Can I track my Rakeback earnings?",
    answer: "Most poker sites provide a tracking system where players can view their rakeback earnings, either through a dedicated section in their account or by checking their poker logs. You can also track your rakeback earnings through third-party affiliates who offer tracking services."
  },
  {
    question: "Is there a maximum limit on Rakeback?",
    answer: "Some sites may have a maximum cap on how much rakeback you can earn, while others offer unlimited earning potential. Always check the terms and conditions of the specific poker site to understand any restrictions or limits on your rakeback earnings."
  },
  {
    question: "Does Rakeback apply to all players?",
    answer: "Rakeback is generally available to all players, but certain conditions may apply. For example, some sites may have specific promotions or loyalty programs that grant rakeback based on your play volume or activity level."
  },
  {
    question: "What happens if I don't claim my Rakeback?",
    answer: "If you don't claim your rakeback within a specific time period, the rewards might expire. Many poker sites have rules that specify when and how rakeback is credited, so it's important to keep track of your eligible earnings and claim them within the designated time frame."
  },
  {
    question: "Can I withdraw my Rakeback immediately?",
    answer: "Most sites allow players to withdraw their rakeback earnings once they reach a certain threshold. However, some sites may require players to meet additional criteria, such as wagering requirements, before they can withdraw their rakeback."
  },
  {
    question: "Can I use Rakeback for bonuses or other rewards?",
    answer: "In some cases, poker sites allow you to use your rakeback earnings to redeem bonuses, free tournament tickets, or other rewards. However, it's essential to check the specific terms and conditions of the poker site to see if this is possible."
  }
];

const FaqContainer = () => {
  const [faqList, setFaqList] = useState([]);
  const [open, setOpen] = useState(null);

  useEffect(() => {
    setFaqList(faqData);
  }, []);

  const toggleAnswer = (index) => {
    setOpen(open === index ? null : index); // Toggle open state
  };

  return (
    <>
      <Navbar page="home" />
      <div className={styles.main_container}>
      <div className={styles.faq_container}>
      

 
        <Reveal>
          <div className={styles.faq_header}>
            <div className={styles.head}>Frequently asked questions</div>
          </div>
        </Reveal>
        <div className={styles.faq_item_container}>
  {faqData.map((qa, index) => {
    return (
      <div
        className={`${styles.faq_item} ${open === index ? styles.open : ""}`}
        key={index}
        onClick={() => toggleAnswer(index)}
      >
        <Reveal>
          <div className={styles.item_content}>
            <div className={styles.q_and_ans}>
              {/* Display the question number */}
              <div className={styles.question}>
                {index + 1}. {qa.question}
              </div>
              {open === index ? <div className={styles.ans}>{qa.answer}</div> : null}
            </div>

            <div className={styles.faq_icon}>
              <div className={styles.icon}>
                {open === index ? <HideIcon /> : <ShowIcon />}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    );
  })}
</div>
</div>
      </div>
      <div style={{ width: "100%", backgroundColor: "#3968eb", marginTop: "10rem" }} className="flex_center">
        <Footer />
      </div>
      
    </>
  );
};

export default FaqContainer;

const ShowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 8V16M8 12H16" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const HideIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M8 12H16" stroke="#e74c3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
