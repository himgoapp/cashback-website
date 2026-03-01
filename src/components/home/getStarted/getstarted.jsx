import React from "react";
import styles from "./getstarted.module.css";
import getStartedBg from "../../../assets/getStartedBg.png";
import GetStartedCarousel from "./getStartedCarousel";
import Reveal from "../../common/reveal/Reveal";

const steps = [
	{
		title: "Sign Up",
		content:
			"Sign up with your details. We don't need your shopping face; just be yourself.",
	},
	{
		title: "Link your Account",
		content:
			"Securely link your shopping accounts. We take security seriously, just like your high-stakes shopping game.",
	},
	{
		title: "Get Rewards/Cashbacks",
		content:
			"Watch the magic happen as we display your combined cashback rewards and offer you fantastic deals. It's that easy!",
	},
];
const Getstarted = () => {
	return (
		<Reveal>
			<div className={`${styles.getstarted_container} `}>
				<div className={styles.getstarted_content}>
					<div className={styles.image_container}>
						<GetStartedCarousel />
						<img
							src={getStartedBg}
							alt=''
							className={styles.image_container_bg}
						/>
					</div>

					<div className={styles.howto_container}>
						<div>
							<div className={styles.howto_q}>
								<div className={styles.head}>How to get started?</div>
								<div className={styles.subhead}>Get there in 3 easy steps!</div>
							</div>

							<div className={styles.faq_container}>
								{steps.map((step, index) => (
									<div className={styles.step_container} key={index}>
										<div className={styles.item}>
											<div className={styles.icon_minus}></div>
											<div className={styles.header}>
												<span>Step {index + 1}:</span> {step.title}
											</div>
											<div className={styles.divider}>
												<span></span>
											</div>
										</div>

										<div className={styles.text}>{step.content}</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Reveal>
	);
};

export default Getstarted;
