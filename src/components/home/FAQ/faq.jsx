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
		question: "What sets Poker-Cash apart from other poker tracking platforms?",
		answer: "",
	},
];

const FAQ = () => {
	const [open, setOpen] = useState(0);

	return (
		<div id='faq' className={`${styles.faq_container}`}>
			<div className={`${styles.faq_content} container_max`}>
				<Reveal>
					<div className={styles.faq_header}>
						<div className={styles.head}>Frequently asked questions</div>
						<div className={styles.subhead}>
							Lorem ipsum dolor sit amet consectetur.{" "}
						</div>
					</div>
				</Reveal>

				<div className={styles.faq_item_container}>
					{QandA.map((qa, index) => {
						return (
							<div
								className={styles.faq_item}
								key={index}
								onClick={() => setOpen(index)}
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
											<div className={styles.minus_icon}>
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
		xmlns='http://www.w3.org/2000/svg'
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill='none'
	>
		<path
			d='M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z'
			stroke='#232334'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);

const HideIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill='none'
	>
		<path
			d='M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z'
			stroke='#232334'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);

export default FAQ;
