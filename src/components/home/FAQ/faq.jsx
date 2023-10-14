import React from "react";
import styles from "./faq.module.css";
import faqbg from "../../../assets/faqbg.png";
const FAQ = () => {
  const QandA = [
    {
      question: "What is Poker-Cash, and how does it work?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Is Poker-Cash secure?",
      answer: "",
    },
    {
      question: "What poker apps are compatible with Poker-Cash?",
      answer: "",
    },
    {
      question:
        "Are the exclusive deals and discounts tailored to my poker preferences?",
      answer: "",
    },
    {
      question: "How can I get in touch with Poker-Cash support?",
      answer: "",
    },
    {
      question:
        "What sets Poker-Cash apart from other poker tracking platforms?",
      answer: "",
    },
  ];
  return (
    <div className={styles.faq_container}>
      {/* FAQ Content */}
      <div className={styles.faq_content}>
        {/* FAQ Header */}
        <div className={styles.faq_header}>
          {/* Header Content */}
          <div className={styles.header_content}>
            {/* Head and Subhead */}
            <div className={styles.head_and_subhead}>
              <div className={styles.head}>
                {/* Head Content */}Frequently asked questions
              </div>
              <div className={styles.subhead}>
                {/* Subhead Content */}Lorem ipsum dolor sit amet consectetur.{" "}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Item Container */}
        <div className={styles.faq_item_container}>
          {/* FAQ Item */}
          <div className={styles.faq_item}>
            {/* Item Content */}
            <div className={styles.item_content}>
              {/* Question and Answer */}
              <div className={styles.q_and_ans}>
                <div className={styles.question}>
                  {/* Question Content */}What is Poker-Cash, and how does it
                  work?
                </div>
                <div className={styles.ans}>
                  {/* Answer Content */}Yes, you can try us for free for 30
                  days. If you want, we’ll provide you with a free, personalized
                  30-minute onboarding call to get you up and running as soon as
                  possible.
                </div>
              </div>

              {/* FAQ Icon */}
              <div className={styles.faq_icon}>
                {/* Minus Icon */}
                <div className={styles.minus_icon}>
                  {/* Minus Icon Content */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                      stroke="#232334"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {QandA.map((qa) => {
            return (
              <div className={styles.faq_item}>
                {/* Item Content */}
                <div className={styles.item_content}>
                  {/* Question and Answer */}
                  <div className={styles.q_and_ans}>
                    <div className={styles.question}>{qa.question}</div>
                    {/* <div className={styles.ans}>
                Yes, you can try us for free for 30
                  days. If you want, we’ll provide you with a free, personalized
                  30-minute onboarding call to get you up and running as soon as
                  possible.
                </div> */}
                  </div>

                  {/* FAQ Icon */}
                  <div className={styles.faq_icon}>
                    {/* Minus Icon */}
                    <div className={styles.minus_icon}>
                      {/* Minus Icon Content */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                          stroke="#232334"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Add more FAQ Items as needed */}
        </div>
      </div>
      {/* <div className="bg1">
        <img src={faqbg} alt="" />
      </div> */}
    </div>
  );
};

export default FAQ;
