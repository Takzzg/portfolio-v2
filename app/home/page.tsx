import React from "react";
import Head from "next/head";
import Subtitle from "../../components/Headers/Subtitle";

import Section from "../../components/Section/Section";
import styles from "./Home.module.scss";
import Footer from "../../components/Layout/Footer/Footer";

type Props = {};

const Page = (props: Props) => {
	return (
		<div className={styles.home}>
			<Head>
				<title>Guido Queiroz</title>
				<meta name="description" content="Guido Queiroz's Portfolio" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className={styles.mainCont}>
				<div className={styles.mainTitle}>
					<div className={`${styles.textAccent} ${styles.firstLine}`}>Hello.</div>
					<div className={styles.secondLine}>I&apos;m Guido</div>
					<div className={styles.thirdLine}>A web developer</div>
				</div>

				<Section color={"#14191f"} divider={"mountains"}>
					<Subtitle>What do I do ?</Subtitle>
				</Section>

				<Section color={"rgb(73, 67, 67)"}>
					<Subtitle>What do I like to do ?</Subtitle>
				</Section>

				<Section color={"rgb(241, 157, 69)"} divider={"bezier"}>
					<Subtitle>About Me</Subtitle>
				</Section>

				<Section color={"#14191f"} divider={"bezier"}>
					<Subtitle>Contact</Subtitle>
				</Section>

				<Section color={"rgb(73, 67, 67)"} divider={"mountains"}>
					<Subtitle>About this Portfolio</Subtitle>
					<div className={styles.techsCont}>
						<div className={styles.tech}>HTML</div>
						<div className={styles.tech}>JS</div>
						<div className={styles.tech}>CSS</div>
						<div className={styles.tech}>React</div>
					</div>
				</Section>

				<Footer />
			</div>
		</div>
	);
};

export default Page;
