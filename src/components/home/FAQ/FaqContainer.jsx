import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./faq_container.module.css";
import Navbar from "../../common/navbar/navbar";
import Footer from "../../common/footer/footer";
import Reveal from "../../common/reveal/Reveal";
import bank from "../../../assets/bank.svg";
import rakeback from "../../../assets/rackback.svg";
import legal from "../../../assets/legal.svg";
import myaccount from "../../../assets/myaccount.svg";
import promotions from "../../../assets/promotions.svg";
import responsible from "../../../assets/responsible gaiming.svg";
import rewards from "../../../assets/reward.svg";
import unfair from "../../../assets/unfair.svg";

const faqData = {
  legal: [
    {
      question: "What is the legality of online poker?",
      answer:
        "Online poker is legal in certain jurisdictions, but it’s essential to check local laws in your region before playing.",
    },
    {
      question: "Can I play poker on my mobile device?",
      answer:
        "Yes, many online poker sites offer mobile applications for both iOS and Android devices, allowing you to play on the go.",
    },
    {
      question: "Are online poker sites secure?",
      answer:
        "Most reputable poker sites use encryption technologies to ensure that your personal and financial information is secure. Always play on licensed and regulated sites.",
    },
    {
      question: "What are the system requirements for playing online poker?",
      answer:
        "Typically, you need a modern computer or mobile device with an internet connection. Specific requirements can vary by site, so check the platform for more details.",
    },
    {
      question: "Can I use third-party software while playing poker?",
      answer:
        "Most poker sites prohibit the use of third-party software that provides an unfair advantage. Using such software may result in account suspension.",
    },
  ],
  rakeback: [
    {
      question: "How does Rakeback.com work?",
      answer:
        "Rakeback.com connects poker players with the best rakeback deals from various poker sites, allowing them to maximize their earnings through rakeback rewards.",
    },
    {
      question: "Is it safe to sign up for rakeback through Rakeback.com?",
      answer:
        "Yes, Rakeback.com is a trusted platform that partners with regulated poker sites to ensure a safe and legitimate experience for players.",
    },
    {
      question: "How do I know if I'm eligible for rakeback?",
      answer:
        "Eligibility for rakeback depends on the specific site and the deal you're signed up for. Check the terms of the deal and your activity to see if you qualify.",
    },
    {
      question: "Can I earn rakeback on all poker games?",
      answer:
        "Rakeback is usually earned from cash games and certain tournaments, depending on the poker site. Always verify the games eligible for rakeback.",
    },
    {
      question: "What is the difference between Rakeback and VIP rewards?",
      answer:
        "Rakeback is a direct percentage of the rake paid back to you, while VIP rewards are typically earned through a loyalty program based on points accumulated during gameplay.",
    },
  ],
  account: [
    {
      question: "How can I recover my account if I forget my login details?",
      answer:
        "Click on 'Forgot Password' and follow the instructions to reset your login credentials. If you need further assistance, contact customer support.",
    },
    {
      question: "How do I update my contact information?",
      answer:
        "To update your contact information, visit the 'Account Settings' section and modify your email, phone number, or address as needed.",
    },
    {
      question: "Can I have multiple accounts on the same platform?",
      answer:
        "Most poker platforms allow only one account per person. Having multiple accounts can violate the site's terms of service and may result in account suspension.",
    },
    {
      question: "How can I deactivate my account?",
      answer:
        "To deactivate your account, contact customer support. They will guide you through the necessary steps to deactivate your account or request self-exclusion.",
    },
    {
      question: "How do I check my account balance?",
      answer:
        "You can check your account balance by visiting the 'Cashier' or 'Balance' section in your account dashboard. This will show your current funds and available balance.",
    },
  ],
  banking: [
    {
      question: "What payment methods can I use to deposit funds?",
      answer:
        "Popular payment methods include credit/debit cards, e-wallets like PayPal, bank transfers, and sometimes cryptocurrencies. Refer to the 'Deposit' section for a full list.",
    },
    {
      question: "Can I deposit using cryptocurrency?",
      answer:
        "Some poker sites accept cryptocurrency deposits, such as Bitcoin or Ethereum. Check the platform's deposit options to confirm if this method is available.",
    },
    {
      question: "How can I change my banking details?",
      answer:
        "To change your banking details, go to the 'Account Settings' or 'Banking' section. You can update your preferred payment method for deposits and withdrawals.",
    },
    {
      question: "Is there a minimum deposit requirement?",
      answer:
        "Most platforms have a minimum deposit amount. Check the 'Deposit' section for the specific minimum deposit threshold.",
    },
    {
      question: "How long does it take for a deposit to appear in my account?",
      answer:
        "Deposits are usually processed instantly for e-wallets and credit cards, but bank transfers may take a few business days to be completed.",
    },
  ],
  responsible: [
    {
      question: "What should I do if I feel I am gambling too much?",
      answer:
        "If you feel you are gambling excessively, seek support from a professional or utilize self-exclusion options available on the platform.",
    },
    {
      question: "Can I set limits on my gameplay?",
      answer:
        "Yes, many poker sites allow you to set deposit, loss, and session time limits to help you stay in control of your gambling.",
    },
    {
      question: "What is the self-exclusion process?",
      answer:
        "Self-exclusion is a voluntary decision to temporarily or permanently close your account to prevent gambling. You can set it up by contacting customer support or using available tools on the site.",
    },
    {
      question: "How can I check my gambling activity?",
      answer:
        "Most platforms offer a 'History' or 'Activity' section, where you can review your betting and gambling patterns. This can help you track your gameplay.",
    },
    {
      question: "What resources are available for problem gambling?",
      answer:
        "Many poker sites offer links to organizations that specialize in gambling addiction support. Resources can include hotlines, counseling, and self-help guides.",
    },
  ],
  unfair: [
    {
      question: "What is unfair gameplay?",
      answer:
        "Unfair gameplay refers to actions or tactics that violate the rules of the game, such as cheating, using third-party software, or collusion with other players.",
    },
    {
      question: "How can I report unfair gameplay?",
      answer:
        "If you encounter unfair gameplay, you should report it to the support team of the platform. Most sites provide an option to file a complaint.",
    },
    {
      question: "What happens if I'm caught using unfair methods to play?",
      answer:
        "If you're caught using unfair methods, your account may be suspended or permanently banned. Additionally, any winnings earned through unfair means may be forfeited.",
    },
    {
      question: "Can I get a refund if I am a victim of unfair gameplay?",
      answer:
        "Some platforms may offer a refund or adjust the results if you have been affected by unfair gameplay, but this depends on their policies. Contact customer support for assistance.",
    },
    {
      question: "What steps are taken by platforms to prevent unfair gameplay?",
      answer:
        "Poker sites implement various security measures, including software monitoring, anti-cheat systems, and player behavior analysis to prevent unfair gameplay.",
    },
  ],
  promotions: [
    {
      question: "How do I claim rakeback promotions?",
      answer:
        "To claim rakeback promotions, you typically need to register through an affiliate link or enter a promo code. After registration, ensure your account is tracked properly to receive your rakeback rewards.",
    },
    {
      question: "Are there any special rakeback promotions for new players?",
      answer:
        "Yes, many poker sites offer enhanced rakeback deals or bonuses for new players. These promotions often include higher percentage returns or additional bonuses based on your first deposit or gameplay.",
    },
    {
      question: "Can I combine rakeback promotions with other bonuses?",
      answer:
        "It depends on the poker site’s terms and conditions. Some platforms allow you to combine rakeback with other bonuses like welcome bonuses or reload promotions, while others may restrict stacking multiple promotions.",
    },
    {
      question: "How often do rakeback promotions change?",
      answer:
        "Rakeback promotions can change frequently, often depending on special events, time of year, or player activity. It's important to keep an eye on the site’s promotions page to stay updated on new deals",
    },
    {
      question:
        "Do I need to meet specific requirements to qualify for rakeback promotions?",
      answer:
        "Yes, there may be specific requirements such as playing a certain number of hands, reaching a minimum deposit amount, or qualifying through an affiliate program. Always review the promotion's terms to ensure eligibility.",
    },
  ],
  refunds: [
    {
      question: "How do I claim my winnings?",
      answer:
        "To claim your winnings, log into your account, navigate to the 'Winnings' section, and follow the instructions provided. You may be asked to verify your identity before processing the payout.",
    },
    {
      question: "What should I do if I haven't received my winnings?",
      answer:
        "If you haven't received your winnings, check your account for any updates or notifications. Ensure your payment method details are up-to-date. If the issue persists, contact customer support for assistance.",
    },
    {
      question: "Can I get a refund if I made a mistake with my bet?",
      answer:
        "Refunds are generally not offered for mistaken bets. However, if there's an issue with the bet due to a system error or technical problem, you may be eligible for a refund. Please contact customer support for further assistance.",
    },
    {
      question: "How long does it take to process a refund?",
      answer:
        "Refund processing times vary depending on the payment method. Typically, refunds take between 3 to 7 business days to reflect in your account, though this can vary.",
    },
    {
      question: "Can I withdraw my winnings to any payment method?",
      answer:
        "Winnings can generally be withdrawn to the payment method you used for deposit, but it may depend on the platform's policies. Please check the available withdrawal options in your account settings.",
    },
  ],
};

const tabs = [
  { id: "legal", title: "LEGALITY, GAMEPLAY & TECHNICAL", icon: legal },
  { id: "rakeback", title: "RAKEBACK.COM", icon: rakeback },
  { id: "account", title: "MY ACCOUNT", icon: myaccount },
  { id: "banking", title: "BANKING", icon: bank },
  { id: "responsible", title: "RESPONSIBLE GAMING", icon: responsible },
  { id: "unfair", title: "UNFAIR GAMEPLAY", icon: unfair },
  { id: "promotions", title: "PROMOTIONS", icon: promotions },
  { id: "refunds", title: "REFUNDS & WINNINGS", icon: rewards },
];

const FaqContainer = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [faqList, setFaqList] = useState([]);
  const [open, setOpen] = useState(null);

  useEffect(() => {
    if (!category || !faqData[category]) {
      navigate("/faq_container/legal", { replace: true });
    } else {
      setFaqList(faqData[category]);
    }
    setOpen(null);
  }, [category, navigate]);
  const handleTabClick = (tabId) => {
    navigate(`/faq_container/${tabId}`);
  };

  const toggleAnswer = (index) => {
    setOpen((prevOpen) => (prevOpen === index ? null : index));
  };

  return (
    <>
      <Navbar page="home" />
      <div className={styles.main_container}>
        <div className={styles.faq_container}>
          <Reveal>
            <div className={styles.faq_header}>
              <div className={styles.head}>Frequently Asked Questions</div>
            </div>
          </Reveal>

          <div className={styles.tabs_container}>
            <div className={styles.tabs}>
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`${styles.tab_box} ${
                    category === tab.id ? styles.active_box : ""
                  }`}
                  onClick={() => handleTabClick(tab.id)}
                >
                  <div className={styles.tab}>
                    <div className={styles.tab_icon}>
                      {/* {tab.icon} */}
                      <img
                        src={tab.icon}
                        alt={tab.title}
                        width="35"
                        height="35"
                      />
                    </div>
                    <div className={styles.tab_title}>{tab.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.faq_item_container}>
            {faqList.length > 0 ? (
              faqList.map((qa, index) => (
                <div
                  className={`${styles.faq_item} ${
                    open === index ? styles.open : ""
                  }`}
                  key={index}
                  onClick={() => toggleAnswer(index)}
                >
                  <Reveal>
                    <div className={styles.item_content}>
                      <div className={styles.q_and_ans}>
                        <div className={styles.question}>
                          {index + 1}. {qa.question}
                        </div>
                        {open === index && (
                          <div className={styles.ans}>{qa.answer}</div>
                        )}
                      </div>
                      <div className={styles.faq_icon}>
                        <div className={styles.icon}>
                          {open === index ? <HideIcon /> : <ShowIcon />}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </div>
              ))
            ) : (
              <div className={styles.no_faq}>
                No FAQs available for this category.
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className="flex_center"
        style={{ width: "100%", backgroundColor: "#0052cc" }}
      >
        <Footer />
      </div>
    </>
  );
};

export default FaqContainer;

const ShowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M12 8V16M8 12H16"
      stroke="#28a745"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HideIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M8 12H16"
      stroke="#e74c3c"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
