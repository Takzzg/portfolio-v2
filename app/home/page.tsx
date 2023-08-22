"use client";

import React, { useContext } from "react";
import Subtitle from "../../components/Headers/Subtitle";
import Section from "../../components/Section/Section";
import styles from "./Home.module.scss";
import Footer from "../../components/Layout/Footer/Footer";
import { langCtx } from "@/context/Lang";
import Technologies from "@/components/Technologies/Technologies";

type Props = {};

const mapContentParagraphs = (parent: { title: string; text: string[] }) => {
	return parent.text.map((t, i) => <span key={`${parent.title}_text_${i}`}>{t}</span>);
};

const Page = (props: Props) => {
	const lang = useContext(langCtx).lang.translation;

	return (
		<div className={styles.home}>
			<div className={styles.mainTitle}>
				<div className={`${styles.textAccent} ${styles.firstLine}`}>Hello.</div>
				<div className={styles.secondLine}>I&apos;m Guido</div>
				<div className={styles.thirdLine}>A web developer</div>
			</div>

			<Section color={"#14191f"} divider={"mountains"} className={styles.aboutThisPage}>
				<Subtitle className={styles.sectionTitle}>{lang.content.aboutThisPage.title}</Subtitle>
				<div className={styles.content}>
					{mapContentParagraphs(lang.content.aboutThisPage)}

					<div className={styles.introduction}>
						<div>
							<span className={styles.title}>{lang.content.aboutThisPage.generalIdea.title}</span>
							{mapContentParagraphs(lang.content.aboutThisPage.generalIdea)}
						</div>

						<div>
							<span className={styles.title}>{lang.content.aboutThisPage.interactiveness.title}</span>
							{mapContentParagraphs(lang.content.aboutThisPage.interactiveness)}
						</div>

						<div>
							<span className={styles.title}>{lang.content.aboutThisPage.sourceCode.title}</span>
							{mapContentParagraphs(lang.content.aboutThisPage.sourceCode)}
						</div>
					</div>
				</div>
			</Section>

			<Section color={"rgb(73, 67, 67)"}>
				<Subtitle>Technologies used</Subtitle>
				<Technologies />
			</Section>

			<Section color={"rgb(241, 157, 69)"} divider={"bezier"}>
				<Subtitle>About Me</Subtitle>
			</Section>

			<Section color={"#14191f"} divider={"bezier"}>
				<Subtitle>Get in touch</Subtitle>
			</Section>

			<Footer />
		</div>
	);
};

export default Page;
