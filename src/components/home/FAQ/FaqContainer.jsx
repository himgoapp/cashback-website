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
import Meta from "../../../Meta";
import NewFooter from "../../common/footer/newFooter";
import NewsletterSubscription from "../subscribe/newsLetterSubscription";

import Account from "../../../assets/FAQ/AccountFAQBlack.svg"
import KYC from "../../../assets/FAQ/kycFAQ.svg"
import TDS from "../../../assets/FAQ/TDSFAQ.svg"
import Withdrawals from "../../../assets/FAQ/WithdrawalsFAQ.svg"
import IDTagging from "../../../assets/FAQ/IDTAG_FAQBLack.svg"
import ContactUs from "../../../assets/FAQ/ContactFAQ.svg"

import AccountRED from "../../../assets/FAQ/Account_FAQRed.svg"
import KYCRED from "../../../assets/FAQ/kyc_FAQRed.svg"
import TDSRED from "../../../assets/FAQ/TDS_FAQRed.svg"
import WithdrawalsRED from "../../../assets/FAQ/WITHDRAWAL_FAQRed.svg"
import IDTaggingRED from "../../../assets/FAQ/IDTAG_FAQRed.svg"
import ContactUsRED from "../../../assets/FAQ/ContactUs_FAQRed.svg"

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
  { id: "legal", title: "Account", icon: Account, activeIcon: AccountRED },
  { id: "rakeback", title: "KYC", icon: KYC, activeIcon: KYCRED },
  { id: "banking", title: "TDS", icon: TDS, activeIcon: TDSRED },
  { id: "responsible", title: "Withdrawals", icon: Withdrawals, activeIcon: WithdrawalsRED },
  { id: "unfair", title: "ID Tagging", icon: IDTagging, activeIcon: IDTaggingRED },
  { id: "promotions", title: "Contact Us", icon: ContactUs, activeIcon: ContactUsRED },
];

const FaqContainer = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [faqList, setFaqList] = useState([]);
  const [open, setOpen] = useState(null);
  const [animateTab, setAnimateTab] = useState(false);

  useEffect(() => {
    if (!category || !faqData[category]) {
      navigate("/faq/legal", { replace: true });
    } else {
      setFaqList(faqData[category]);
    }
    setOpen(null);
  }, [category, navigate]);

  const handleTabClick = (tabId) => {
    setAnimateTab(true);
    setTimeout(() => {
      navigate(`/faq/${tabId}`);
      setAnimateTab(false);
    }, 300);
  };

  const toggleAnswer = (index) => {
    setOpen((prevOpen) => (prevOpen === index ? null : index));
  };

  return (
    <div>
      <Meta
        title="FAQ - Rakeback"
        description="Find answers to commonly asked questions about legalities, gameplay, account settings, banking, and more."
        link={`https://www.rakebackk.com`}
      />

      <Navbar page="home" />

      <div className="container-fluid faqcontainer">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12">
              <div className={styles.hero_section}>
                <div className={styles.hero_content}>
                  <h1 className={styles.hero_title}>Frequently Asked Questions</h1>
                  <div className={styles.MobileFAWhed}>
                    <h1 className={styles.hero_title}>FAQs</h1>
                     <div className={styles.hero_subtitle}>
                            How can we help you?
                      </div>
                  </div>
                  {/* <div className={styles.hero_subtitle}>
                            Find answers to your most important questions about our platform
                          </div> */}
                </div>
              </div>

              <div className={styles.main_container}>
                <div className={styles.faq_container}>
                  <div className={`${styles.tabs_container} ${animateTab ? styles.fade : ''}`}>
                    <div className={styles.tabs}>
                      {tabs.map((tab) => (
                        <div
                          key={tab.id}
                          className={`${styles.tab_box} ${category === tab.id ? styles.active_box : ""
                            }`}
                          onClick={() => handleTabClick(tab.id)}
                        >
                          <div className={styles.tab}>
                            <div className={styles.tab_icon}>
                              <img
                                src={tab.icon}
                                alt={tab.title}
                                width="35"
                                height="35"
                                className={styles.tab_icon_img}
                              />
                              <img
                                src={tab.activeIcon}
                                alt={tab.title}
                                width="35"
                                height="35"
                                className={styles.tab_icon_imgActive}
                              />
                            </div>
                            <div className={styles.tab_title}>{tab.title} </div>
                            <div className={styles.hero_subtitle}>
                              KYC procedures, required documents
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={styles.faq_item_container}>
                    {faqList.length > 0 ? (
                      faqList.map((qa, index) => (
                        <Reveal key={index}>
                          <div
                            className={`${styles.faq_item} ${open === index ? styles.open : ""
                              }`}
                            onClick={() => toggleAnswer(index)}
                          >
                            <div className={styles.item_content}>
                              <div className={styles.q_and_ans}>
                                <div className={styles.question}>
                                  {/* <span className={styles.question_number}>{index + 1}.</span>  */}
                                  {qa.question}
                                </div>
                                <div className={`${styles.ans} ${open === index ? styles.ans_visible : ''}`}>
                                  {qa.answer}
                                </div>
                              </div>
                              <div className={styles.faq_icon}>
                                <div className={`${styles.icon} ${open === index ? styles.icon_active : ''}`}>
                                  {open === index ? <HideIcon /> : <ShowIcon />}
                                </div>
                              </div>
                            </div>
                          </div>
                        </Reveal>
                      ))
                    ) : (
                      <div className={styles.no_faq}>
                        No FAQs available for this category.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row  justify-content-center GetINtouchHed">
            <div className="col-lg-8 text-left">
              <div className={styles.hero_section}>
                <div className={styles.hero_content}>
                  <h1 className={styles.GetINtouchHedhero_title}>Get in touch</h1>
                  {/* <div className={styles.hero_subtitle}>
                            Find answers to your most important questions about our platform
                          </div> */}
                </div>
              </div>
              <div className="col-lg-12 ">
                <div className="moreQuestionsActionsFAQ">
                  <a target="_blank" rel="noopener noreferrer" className="actionButton">
                    <span className="actionIcon">
                      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                        <path fill="#25D366" d="M12 2C6.477 2 2 6.477 2 12c0 1.85.504 3.58 1.38 5.07L2 22l5.13-1.35A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Z"></path><path fill="#fff" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.166-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.148-.669-1.612-.916-2.21-.242-.58-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.098 3.205 5.077 4.37.71.306 1.263.489 1.695.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347Z"></path></svg>
                    </span>Chat with Us <span className="ChatSmallDes">Chat with Us</span><svg className="arrowIcon" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.36523 1.69421L11.3998 6.49996L6.36523 11.3057" stroke="#848484" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.3995 6.5L1.59961 6.5" stroke="#848484" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
                  <a className="actionButton">
                    <span className="actionIcon">
                      <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" fill="#fff" stroke="#848484" stroke-width="1.5" rx="4"></rect><path stroke="#848484" stroke-width="1.5" d="m4 6 8 7 8-7"></path></svg>
                    </span>Drop a Mail <span className="ChatSmallDes">Drop a Mail</span>
                    <svg className="arrowIcon" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.36523 1.69421L11.3998 6.49996L6.36523 11.3057" stroke="#848484" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.3995 6.5L1.59961 6.5" stroke="#848484" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </a>
                </div>
              </div>
              <div className="col-lg-12 ">
                <div className="moreQuestionsActionsFAQ GetINtouch">
                  <div className="actionButton">
                    <span className="actionIcon">
                    </span>Still have questions?
                    <span className="ChatSmallDes">Can’t find the answer you’re looking for? Please chat to our friendly team.</span>
                    <button className="GetINtouchBtn">Get in touch</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsletterSubscription></NewsletterSubscription>
      <NewFooter></NewFooter>
      {/* <div
        className="flex_center"
        style={{ width: "100%", backgroundColor: "#0052cc" }}
      >
        <Footer />
      </div> */}
    </div>
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
      stroke="currentColor"
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
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);