import React, { useState } from "react";
import styles from "./faq.module.css";
import Reveal from "../../common/reveal/Reveal";

const QandA = [
  {
    question: "What is Poker-Cash, and how does it work?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Is Poker-Cash secure?",
    answer: "Answer here",
  },
  {
    question: "What poker apps are compatible with Poker-Cash?",
    answer: "Answer here",
  },
  {
    question:
      "Are the exclusive deals and discounts tailored to my poker preferences?",
    answer: "Answer here",
  },
  {
    question: "How can I get in touch with Poker-Cash support?",
    answer: "Answer here",
  },
  {
    question: "What sets Poker-Cash apart from other poker tracking platforms?",
    answer: "Answer here",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggleAnswer = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div id="faq" className={`${styles.faq_container}`}>
      <div className={`${styles.faq_content} container_max`}>
        <Reveal>
          <div className={styles.faq_header}>
            <div className={styles.head}>Frequently asked questions</div>
            {/* <div className={styles.subhead}>
              Lorem ipsum dolor sit amet consectetur.
            </div> */}
          </div>
        </Reveal>

        <div className={styles.faq_item_container}>
          {QandA.map((qa, index) => {
            return (
              <div
                className={`${styles.faq_item} ${open === index ? styles.open : ""}`}
                key={index}
                onClick={() => toggleAnswer(index)}
              >
                <Reveal>
                  <div className={styles.item_content}>
                    <div className={styles.q_and_ans}>
                      <div className={styles.question}>{qa.question}</div>
                      {open === index ? (
                        <div className={styles.ans}>{qa.answer}</div>
                      ) : null}
                    </div>

                    <div className={styles.faq_icon}>
                      {/* Show plus or minus icon inside a circle */}
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
  );
};

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
      stroke="#28a745"  /* Green color for plus sign */
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
      stroke="#e74c3c"  /* Red color for minus sign */
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default FAQ;
