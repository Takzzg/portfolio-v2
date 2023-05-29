"use client";

import React, { useEffect, useState } from "react";
import styles from "./Disclaimer.module.scss";
import { GrClose } from "react-icons/gr";
import { checkDisclaimerExpiration } from "../../../scripts/utilities/LocalStorage";

const Disclaimer = () => {
	const [showDisclaimer, setShowDisclaimer] = useState(false);

	useEffect(() => {
		let expValid = checkDisclaimerExpiration();
		if (!expValid) setShowDisclaimer(true);
	}, []);

	if (!showDisclaimer) return null;

	return (
		<div className={styles.disclaimerCont}>
			<div className={styles.disclaimer}>
				<span className={styles.title}>Disclaimer</span>
				<span className={styles.close} onClick={() => setShowDisclaimer(false)}>
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
