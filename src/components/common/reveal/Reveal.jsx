import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";

const Reveal = ({
	children,
	variants = {
		hidden: {
			opacity: 0,
			y: 100,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				delay: 0.25,
			},
		},
	},
}) => {
	// reveal animation using framer
	const ref = useRef();
	const isInView = useInView(ref, {
		once: true,
	});

	const mainControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start("visible");
		}
	}, [isInView]);

	return (
		<div
			ref={ref}
			style={{
				position: "relative",
				width: "100%",
			}}
		>
			<motion.div
				variants={variants}
				initial='hidden'
				animate={mainControls}
				style={{ width: "100%", height: "100%" }}
			>
				{children}
			</motion.div>
		</div>
	);
};

export default Reveal;
