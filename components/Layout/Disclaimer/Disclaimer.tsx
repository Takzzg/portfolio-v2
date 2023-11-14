"use client";

import React, { useEffect, useState } from "react";
import styles from "./Disclaimer.module.scss";
import { GrClose } from "react-icons/gr";
import { checkDisclaimerExpiration, createNewDisclaimerExpiration } from "@/scripts/localStorage/disclaimer";

const Disclaimer = () => {
	const [showDisclaimer, setShowDisclaimer] = useState(false);

	const updateDisclaimerExpiration = () => {
		createNewDisclaimerExpiration()
		setShowDisclaimer(false)
	}

	useEffect(() => {
		let expValid = checkDisclaimerExpiration();
		if (!expValid) setShowDisclaimer(true);
	}, []);

	if (!showDisclaimer) return null;

	return (
		<div className={styles.disclaimerCont}>
			<div className={styles.disclaimer}>
				<span className={styles.title}>Disclaimer</span>
				<span className={styles.close} onClick={updateDisclaimerExpiration}>
					<GrClose />
				</span>
				<hr />
				<p className={styles.body}>
					This webpage is in early development; which means that some, if not most of the features, will not
					be working as intended. Please consider reading the Readme.md from the{" "}
					<a href="https://github.com/Takzzg/portfolio">github repo</a> to learn more about the current state
					and development.
				</p>
			</div>
		</div>
	);
};

export default Disclaimer;
