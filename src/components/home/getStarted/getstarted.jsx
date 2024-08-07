import React from "react";
import styles from "./getstarted.module.css";
import getStartedBg from "../../../assets/getStartedBg.png";
import GetStartedCarousel from "./getStartedCarousel";

const Getstarted = () => {
	return (
		<div className={`${styles.getstarted_container} container`}>
			{" "}
			<div className={styles.getstarted_content}>
				{/* Image */}{" "}
				<div className={styles.image_container}>
					<GetStartedCarousel />
					<img
						src={getStartedBg}
						alt=''
						className={styles.image_container_bg}
					/>
				</div>
				{/* How To Container */}
				<div className={styles.howto_container}>
					{/* How To Content */}
					<div className={styles.howto_q}>
						<div className={styles.head}>
							{/* Head Content */}How to get started?
						</div>
						<div className={styles.subhead}>
							{/* Subhead Content */}Get there in 3 easy steps!
						</div>
					</div>

					{/* FAQ Container */}
					<div className={styles.faq_container}>
						{/* Step Container */}
						<div className={styles.step_container}>
							{/* Item */}
							<div className={styles.item}>
								<div className={styles.icon_minus}>
									{/* Icon Minus Content */}
								</div>
								<div className={styles.header}>
									{/* Text Content */} <span>Step 1:</span> Sign Up
								</div>
								<div className={styles.divider}>
									{/* Divider Content */} <span></span>
								</div>
							</div>

							{/* Add more items as needed */}
							{/* Text */}
							<div className={styles.text}>
								{/* Text Content */}Sign up with your details. We don't need
								your poker face; just be yourself.
							</div>
						</div>
						{/* Step Container */}
						<div className={styles.step_container}>
							{/* Item */}
							<div className={styles.item}>
								<div className={styles.icon_minus}>
									{/* Icon Minus Content */}
								</div>
								<div className={styles.header}>
									{/* Text Content */} <span>Step 2:</span> Link your Account
								</div>
								<div className={styles.divider}>
									{/* Divider Content */} <span></span>
								</div>
							</div>

							{/* Add more items as needed */}
							{/* Text */}
							<div className={styles.text}>
								{/* Text Content */}Securely link your poker accounts. We take
								security seriously, just like your high-stakes poker game.
							</div>
						</div>
						{/* Step Container */}
						<div className={styles.step_container}>
							{/* Item */}
							<div className={styles.item}>
								<div className={styles.icon_minus}>
									{/* Icon Minus Content */}
								</div>
								<div className={styles.header}>
									{/* Text Content */} <span>Step 3:</span> Get
									Rewards/Cashbacks
								</div>
								<div className={styles.divider}>
									{/* Divider Content */} <span></span>
								</div>
							</div>

							{/* Add more items as needed */}
							{/* Text */}
							<div className={styles.text}>
								{/* Text Content */}Watch the magic happen as we display your
								combined cashback rewards and offer you fantastic deals. It's
								that easy!
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Getstarted;
