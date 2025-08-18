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

import Customer from "../../../assets/FAQ/customer.png"


const faqData = {
  kyc: [
    {
      question: "What is KYC, and why is it needed on Rakebackk?",
      answer:
        "KYC(Know Your Customer) is mandatory to verify your identity.It ensures legal compliance, enables withdrawals, and protects your account.",
    },
    {
      question: "How do I submit my KYC documents?",
      answer:
        `First, log in to your account, go to the KYC section, then click "Verify Now" for PAN, Aadhaar, and Bank, and enter the details to complete the verification process.`,
    },
    {
      question: "How can I check the status of my KYC?",
      answer:
        "In the KYC section, each document(PAN, Aadhaar, Bank) shows its status.A green tick is for approved, and a red cross is for rejected.",
    },
    {
      question: "Why has my KYC been rejected?",
      answer:
        "If your KYC is rejected or pending, check for issues like unclear photo, mismatched details, or incomplete documents.If all seems fine, contact us via email",
    },
    {
      question: "Why is PAN card required for KYC on Rakebackk?",
      answer:
        "A PAN card is required to complete your KYC on Rakebackk.",
    },
    {
      question: "Why do you need to submit my Aadhaar card?",
      answer:
        "An Aadhaar card is required to complete your KYC on Rakebackk.",
    },
    {
      question: "Is my personal information safe after KYC?",
      answer:
        "Yes, your personal information is safe and securely stored after KYC.",
    },
    {
      question: "Can I use someone else’s PAN or Aadhaar for KYC ?",
      answer:
        "No, you must use your own PAN and Aadhaar for KYC.",
    },
    {
      question: "Do I need to complete KYC again if I update my bank account?",
      answer:
        "Yes, you need to complete KYC again if you update your bank account.",
    },
    {
      question: "How long does KYC verification take on Rakebackk?",
      answer:
        "KYC verification on Rakebackk usually takes 24 – 48 hours.",
    },
    {
      question: "Will I get notified when my KYC is approved or rejected?",
      answer:
        "Yes, you will be notified when your KYC is approved or rejected.",
    },
    {
      question: "What happens if I don’t complete KYC?",
      answer:
        "Without KYC, you can’t receive rakeback payouts, TDS certificates, or make withdrawal.",
    },
  ],
  TDS: [
    {
      question: "How much TDS is deducted from my poker winnings while using Rakebackk services?",
      answer:
        "A TDS of 2% is deducted on your rakeback earnings, as per Section 194H of the Income Tax Act, which applies to commission or brokerage.",
    },
    {
      question: "When will I receive my TDS certificate if I use Rakebackk?",
      answer:
        "Rakebackk provides TDS certificates on a quarterly basis.The certificate is shared directly with you by the team via email.",
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
      question: "How do I create an account on Rakebackk?",
      answer:
        "To create an account on rakebackk.com, enter your mobile number, verify the OTP, and you're logged in instantly.",
    },
    {
      question: "How do I verify my email address?",
      answer:
        `After you sign in, navigate to the Profile section.Select "Verify Now" next to your email.Open the verification message from your email inbox and follow the instructions to complete the process.`,
    },
    {
      question: "How can I update my registered email or mobile number?",
      answer:
        "Login to your Rakebackk account, go to “Profile Settings,” and choose the option to edit your contact information.Make the changes and save them.",
    },

  ],
  withdrawals: [
    {
      question: "Why did my withdrawal fail ?",
      answer:
        "It might have failed due to wrong bank details, name mismatch, or bank server issues.",
    },
    {
      question: "Why was my withdrawal rejected ?",
      answer:
        "It may be due to incorrect bank details, name mismatch, or server issues.",
    },
    {
      question: "What should I do if my withdrawal is still pending?",
      answer:
        "Wait 24–48 hours.If it’s still pending, contact support.",
    },
    {
      question: "How can I check my withdrawal status on Rakebackk?",
      answer:
        "Bank transfers can take 1–3 business days.If delayed, check your bank details or contact support.",
    },
    {
      question: "What is the minimum amount required to make a withdrawal ?",
      answer:
        "₹100 is the minimum amount required for withdrawal.",
    },
    {
      question: " Can I cancel or modify a withdrawal request after placing it?",
      answer:
        "Usually not.If still pending, contact support to request changes.",
    },
    {
      question: "How much time does it take to process a withdrawal request?",
      answer:
        "Most withdrawals are processed within 12 business hours.",
    },
    {
      question: "Can I change my bank account details before withdrawing ?",
      answer:
        "Yes, update your bank details in settings before making a withdrawal..",
    },
  ],
  idTagging: [
    {
      question: "What is ID Tagging on Rakebackk?",
      answer:
        "It links your poker account to Rakebackk to track gameplay and give cashback.",
    },
    {
      question: "How do I submit my Poker ID for tagging ?",
      answer: "Log in, go to Poker IDs, choose the site, enter your ID, and click Submit.",
    },
    {
      question: "What does ‘Pending’ status mean?",
      answer:
        "Your ID is under review.It usually takes 24–48 hours.",
    },
  ],
  contactus: [
    {
      question: "How can I reach Rakebackk support?",
      answer:
        "Fill out the form on our Contact Us page or email us at[email here]",
    },
    {
      question: "Can I email Rakebackk directly?",
      answer:
        "Yes, use live chat or email us at [email here].Support is 24/7.",
    },
    {
      question: "Can I contact Rakebackk via social media?",
      answer:
        "Yes, we’re on Telegram, Facebook, Instagram, LinkedIn, and Twitter(X).",
    },
    {
      question: " What is the typical response time?",
      answer:
        " We’re available 24/7 and usually reply immediately or within a few minutes.",
    },
    {
      question: "Is live chat support available?",
      answer:
        "Yes, live chat is available on our website for quick help.",
    },
  ],
};

const tabs = [
  { id: "account", title: "Account", icon: Account, activeIcon: AccountRED },
  { id: "kyc", title: "KYC", icon: KYC, activeIcon: KYCRED },
  { id: "TDS", title: "TDS", icon: TDS, activeIcon: TDSRED },
  { id: "withdrawals", title: "Withdrawals", icon: Withdrawals, activeIcon: WithdrawalsRED },
  { id: "idTagging", title: "ID Tagging", icon: IDTagging, activeIcon: IDTaggingRED },
  // { id: "contactus", title: "Contact Us", icon: ContactUs, activeIcon: ContactUsRED },
];

const FaqContainer = () => {

  const navigate = useNavigate();
  const [faqList, setFaqList] = useState(faqData["account"] || []);
  const [open, setOpen] = useState(null);
  const [category, setCategory] = useState("account");
  const [animateTab, setAnimateTab] = useState(false);

  const handleTabClick = (tabId) => {
    setAnimateTab(true);
    setFaqList(faqData[tabId]);
    setCategory(tabId);
    setAnimateTab(false);
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

      <div className="container-fluid faqcontainer ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12">
              <div className={styles.hero_section}>
                <div className={styles.hero_content}>
                  <h1 className={styles.hero_title}>Frequently Asked Questions</h1>
                  <div className={styles.MobileFAWhed}>
                    <h1 className={styles.hero_title}>FAQs</h1>
                    <div className={styles.hero_subtitle}>
                      How can we help you?
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.main_container}>
                <div className={styles.MobileShow}>
                  <div className={styles.ReachUs}>
                    <h3>Reach Us</h3>
                    <a href="#">
                      <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_6604_28001)">
                          <circle cx="14.5" cy="14.3242" r="11" fill="black" />
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 0.783203C10.0522 0.783203 6.74558 2.15284 4.30761 4.59082C1.86964 7.02879 0.5 10.3354 0.5 13.7832C0.5 17.231 1.86964 20.5376 4.30761 22.9756C6.74558 25.4136 10.0522 26.7832 13.5 26.7832C16.9478 26.7832 20.2544 25.4136 22.6924 22.9756C25.1304 20.5376 26.5 17.231 26.5 13.7832C26.5 10.3354 25.1304 7.02879 22.6924 4.59082C20.2544 2.15284 16.9478 0.783203 13.5 0.783203ZM7.393 9.7912H19.617L13.507 14.6382L7.393 9.7912ZM6.516 10.3732L13.201 15.6702C13.2893 15.74 13.3985 15.7779 13.511 15.7779C13.6235 15.7779 13.7327 15.74 13.821 15.6702L20.486 10.3772V18.7752H6.516V10.3732Z" fill="#EBEBEB" />
                        </g>
                        <defs>
                          <clipPath id="clip0_6604_28001">
                            <rect width="26" height="26" fill="white" transform="translate(0.5 0.783203)" />
                          </clipPath>
                        </defs>
                      </svg>
                      support@rakebackk.com
                    </a>
                    <div className={styles.ReachUsBtn}>
                      <button> <img src={Customer} /></button>
                      <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                          <path d="M0.613281 28.2603L2.53748 21.2307C1.35011 19.1731 0.726201 16.8405 0.727342 14.4487C0.730764 6.97088 6.8159 0.885742 14.2926 0.885742C17.9208 0.886883 21.3267 2.30009 23.8885 4.86418C26.4492 7.42826 27.8589 10.8364 27.8578 14.4612C27.8544 21.9402 21.7692 28.0253 14.2926 28.0253C12.0228 28.0242 9.78604 27.455 7.8048 26.3737L0.613281 28.2603ZM8.13786 23.918C10.0495 25.0529 11.8745 25.7327 14.288 25.7338C20.502 25.7338 25.564 20.6764 25.5675 14.459C25.5697 8.22896 20.5317 3.17836 14.2971 3.17608C8.07855 3.17608 3.01996 8.23353 3.01768 14.4498C3.01654 16.9877 3.76021 18.8879 5.00918 20.876L3.86971 25.0369L8.13786 23.918ZM21.1259 17.6857C21.0415 17.5443 20.8157 17.4599 20.4758 17.2899C20.137 17.12 18.4706 16.2999 18.1592 16.187C17.849 16.0741 17.6231 16.017 17.3962 16.3569C17.1703 16.6957 16.5202 17.4599 16.3228 17.6857C16.1255 17.9116 15.9271 17.9401 15.5883 17.7701C15.2495 17.6002 14.1568 17.2432 12.8623 16.0877C11.8551 15.1889 11.1742 14.0791 10.9768 13.7392C10.7795 13.4005 10.9563 13.2168 11.1251 13.048C11.2779 12.8963 11.4639 12.6522 11.6338 12.4538C11.806 12.2576 11.8619 12.1162 11.976 11.8892C12.0889 11.6633 12.033 11.4649 11.9475 11.2949C11.8619 11.1261 11.1844 9.4574 10.9027 8.77874C10.6267 8.11833 10.3472 8.20729 10.1396 8.19703L9.48948 8.18562C9.26364 8.18562 8.89636 8.27003 8.58612 8.60993C8.27587 8.94983 7.39989 9.76878 7.39989 11.4375C7.39989 13.1062 8.61463 14.7179 8.78344 14.9437C8.95339 15.1696 11.173 18.5937 14.5732 20.0616C15.3818 20.4106 16.0137 20.6194 16.5053 20.7756C17.3175 21.0334 18.0566 20.9969 18.6406 20.9102C19.2918 20.8133 20.6457 20.0901 20.9286 19.2985C21.2115 18.5058 21.2115 17.8272 21.1259 17.6857Z" fill="#FF4053" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
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

                    <div className={styles.ReachUs}>
                      <h3>Reach Us</h3>
                      <a href="#">
                        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_6604_28001)">
                            <circle cx="14.5" cy="14.3242" r="11" fill="black" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 0.783203C10.0522 0.783203 6.74558 2.15284 4.30761 4.59082C1.86964 7.02879 0.5 10.3354 0.5 13.7832C0.5 17.231 1.86964 20.5376 4.30761 22.9756C6.74558 25.4136 10.0522 26.7832 13.5 26.7832C16.9478 26.7832 20.2544 25.4136 22.6924 22.9756C25.1304 20.5376 26.5 17.231 26.5 13.7832C26.5 10.3354 25.1304 7.02879 22.6924 4.59082C20.2544 2.15284 16.9478 0.783203 13.5 0.783203ZM7.393 9.7912H19.617L13.507 14.6382L7.393 9.7912ZM6.516 10.3732L13.201 15.6702C13.2893 15.74 13.3985 15.7779 13.511 15.7779C13.6235 15.7779 13.7327 15.74 13.821 15.6702L20.486 10.3772V18.7752H6.516V10.3732Z" fill="#EBEBEB" />
                          </g>
                          <defs>
                            <clipPath id="clip0_6604_28001">
                              <rect width="26" height="26" fill="white" transform="translate(0.5 0.783203)" />
                            </clipPath>
                          </defs>
                        </svg>
                        support@rakebackk.com
                      </a>
                      <div className={styles.ReachUsBtn}>
                        <button> <img src={Customer} /></button>
                        <button>
                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                            <path d="M0.613281 28.2603L2.53748 21.2307C1.35011 19.1731 0.726201 16.8405 0.727342 14.4487C0.730764 6.97088 6.8159 0.885742 14.2926 0.885742C17.9208 0.886883 21.3267 2.30009 23.8885 4.86418C26.4492 7.42826 27.8589 10.8364 27.8578 14.4612C27.8544 21.9402 21.7692 28.0253 14.2926 28.0253C12.0228 28.0242 9.78604 27.455 7.8048 26.3737L0.613281 28.2603ZM8.13786 23.918C10.0495 25.0529 11.8745 25.7327 14.288 25.7338C20.502 25.7338 25.564 20.6764 25.5675 14.459C25.5697 8.22896 20.5317 3.17836 14.2971 3.17608C8.07855 3.17608 3.01996 8.23353 3.01768 14.4498C3.01654 16.9877 3.76021 18.8879 5.00918 20.876L3.86971 25.0369L8.13786 23.918ZM21.1259 17.6857C21.0415 17.5443 20.8157 17.4599 20.4758 17.2899C20.137 17.12 18.4706 16.2999 18.1592 16.187C17.849 16.0741 17.6231 16.017 17.3962 16.3569C17.1703 16.6957 16.5202 17.4599 16.3228 17.6857C16.1255 17.9116 15.9271 17.9401 15.5883 17.7701C15.2495 17.6002 14.1568 17.2432 12.8623 16.0877C11.8551 15.1889 11.1742 14.0791 10.9768 13.7392C10.7795 13.4005 10.9563 13.2168 11.1251 13.048C11.2779 12.8963 11.4639 12.6522 11.6338 12.4538C11.806 12.2576 11.8619 12.1162 11.976 11.8892C12.0889 11.6633 12.033 11.4649 11.9475 11.2949C11.8619 11.1261 11.1844 9.4574 10.9027 8.77874C10.6267 8.11833 10.3472 8.20729 10.1396 8.19703L9.48948 8.18562C9.26364 8.18562 8.89636 8.27003 8.58612 8.60993C8.27587 8.94983 7.39989 9.76878 7.39989 11.4375C7.39989 13.1062 8.61463 14.7179 8.78344 14.9437C8.95339 15.1696 11.173 18.5937 14.5732 20.0616C15.3818 20.4106 16.0137 20.6194 16.5053 20.7756C17.3175 21.0334 18.0566 20.9969 18.6406 20.9102C19.2918 20.8133 20.6457 20.0901 20.9286 19.2985C21.2115 18.5058 21.2115 17.8272 21.1259 17.6857Z" fill="#FF4053" />
                          </svg>
                        </button>
                      </div>
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

          {/* <div className="row  justify-content-center GetINtouchHed">
            <div className="col-lg-12 text-left">
              <div className={styles.hero_section}>
                <div className={styles.hero_content}>
                  <h1 className={styles.GetINtouchHedhero_title}>Get in touch</h1>
                  
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
          </div> */}
        </div>
      </div>
      <NewsletterSubscription></NewsletterSubscription>
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