import React from "react";
import Head from "next/head";
import Subtitle from "../../components/Headers/Subtitle";

import Section from "../../components/Section/Section";
import styles from "./Home.module.scss";

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
					<div>I design and create great web applications with a variety of technologies</div>
					<div className={styles.techsCont}>
						<div className={styles.tech}>HTML</div>
						<div className={styles.tech}>JS</div>
						<div className={styles.tech}>CSS</div>
						<div className={styles.tech}>React</div>
					</div>
				</Section>

				<Section color={"rgb(73, 67, 67)"}>
					<Subtitle>What do I like to do ?</Subtitle>
					<div>
						I enjoy creating robust and modular systems, as well as tinkering with different animations and
						visualizations
					</div>
				</Section>

				<Section color={"rgb(241, 157, 69)"} divider={"bezier"}>
					<Subtitle>About Me</Subtitle>
					<div>
						My name is Guido Queiroz, I was born in Buenos Aires, Argentina.
						<br />I was involved with programming since I was around 13 years old, participating in a local
						robotics league
					</div>
				</Section>

				<Section color={"#14191f"} divider={"bezier"}>
					<Subtitle>Contact</Subtitle>
					<div>
						Wanna reach me ?
						<br />
						Feel free to use any of the following platforms. I&apos;ll awnser as soon as posible
					</div>
				</Section>

				<Section color={"rgb(73, 67, 67)"} divider={"mountains"}>
					<Subtitle>About this Portfolio</Subtitle>
					<div>
						This website was developed in my free time, using and incorporating different technologies as I
						learned them
					</div>
					<div className={styles.techsCont}>
						<div className={styles.tech}>HTML</div>
						<div className={styles.tech}>JS</div>
						<div className={styles.tech}>CSS</div>
						<div className={styles.tech}>React</div>
					</div>
				</Section>
			</div>
		</div>
	);
};

export default Page;
