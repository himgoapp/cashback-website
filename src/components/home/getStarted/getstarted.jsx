import React from "react";
import styles from "./getstarted.module.css";
import getstarted from "../../../assets/getstarted.png";
const Getstarted = () => {
	return (
		<div className={`${styles.getstarted_container} container`}>
			{" "}
			<div className={styles.getstarted_content}>
				{/* Image */}{" "}
				<div className={styles.image_container}>
					<div className={styles.image}>
						{/* Image Content */}{" "}
						<img
							src={getstarted}
							style={{
								width: "100%",
								height: "100%",
							}}
							alt=''
						/>{" "}
					</div>
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
								<div className={styles.text}>
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
								<div className={styles.text}>
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
								<div className={styles.text}>
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
					</div>
				</div>
			</div>
		</div>
	);
};

export default Getstarted;
