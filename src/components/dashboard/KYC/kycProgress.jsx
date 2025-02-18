import React from "react";
import styles from "./kycProgress.module.css";
import illustration3 from "../../../assets/illustration3.svg"
const steps = [
	{
		head: "Pan Card",
		subhead: "Verify Your PAN Card",
	},
	{
		head: "Upload Address Proof",
		subhead: "Please provide your Address Proof",
	},
	{
		head: "Bank Details",
		subhead: "A few details about your Bank",
	},
];

function kycProgress({ activeIndex }) {
	return (
		<div className={styles.ProgressbarContainer}>
				<div>
        <img src={illustration3} className={styles.illustration3_design}/>
      </div>
			<div className={styles.ProgressContent}>
		
				{steps.map((progress, index) => {
					let indexStyle = `StepBase${index + 1}`;
					let status =
						index + 1 < activeIndex
							? styles.StepBaseCompleted
							: index + 1 === activeIndex
							? styles.StepBaseCurrent
							: "";
					return (
						<div
							className={`${styles.StepBase} ${status} ${styles[indexStyle]}`}
						>
							<div className={styles.StepIcon}>
								<div className={styles.Icon}>
									{index + 1 < activeIndex ? completeIcon : <CurrentIcon />}
								</div>
							</div>
							<div className={styles.StepContent}>
								<div className={styles.Head}>{progress.head}</div>
								<div className={styles.Subhead}>{progress.subhead}</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default kycProgress;
const completeIcon = (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='32'
		height='32'
		viewBox='0 0 32 32'
		fill='none'
	>
		<path
			fill-rule='evenodd'
			clip-rule='evenodd'
			d='M22.7953 9.85338L13.2487 19.0667L10.7153 16.3601C10.2487 15.9201 9.51534 15.8934 8.982 16.2667C8.462 16.6534 8.31534 17.3334 8.63534 17.8801L11.6353 22.7601C11.9287 23.2134 12.4353 23.4934 13.0087 23.4934C13.5553 23.4934 14.0753 23.2134 14.3687 22.7601C14.8487 22.1334 24.0087 11.2134 24.0087 11.2134C25.2087 9.98672 23.7553 8.90672 22.7953 9.84005V9.85338Z'
			fill='white'
		/>
	</svg>
);
const CurrentIcon = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='32'
			height='32'
			viewBox='0 0 32 32'
			fill='none'
		>
			<circle cx='16' cy='16' r='5' fill='white' />
		</svg>
	);
};
