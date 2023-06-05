"use client";

// import { useCombinedStore } from "@/scripts/zustand/store";
import React, { useState } from "react";
import styles from "./CSEditor.module.scss";
import Accordion from "@/components/UI/Accordion/Accordion";
import { FaCamera, FaMale, FaScroll } from "react-icons/fa";
import { IconType } from "react-icons";
import Stats from "./Stats/Stats";

type Props = {};

type CSEditorCategory = {
	key: string;
	title: string;
	Icon: IconType;
	children?: JSX.Element | JSX.Element[];
};

const categories: CSEditorCategory[] = [
	{ key: "image", title: "Image", Icon: FaCamera, children: undefined },
	{ key: "desc", title: "Description", Icon: FaMale, children: undefined },
	{ key: "stats", title: "Stats", Icon: FaMale, children: <Stats /> },
	{ key: "spells", title: "Spells", Icon: FaScroll, children: undefined },
	{ key: "feats", title: "Feats", Icon: FaMale, children: undefined },
];

const initialState: { [key: string]: boolean } = {};
categories.forEach((cat) => (initialState[cat.key] = false));

const CSEditor = (props: Props) => {
	// const cSheetStore = useCombinedStore((state) => state.cSheets);
	// console.log("cSheetStore.editingSheet", cSheetStore.editingSheet);

	const [expanded, setExpanded] = useState(initialState);

	const toggleCategory = (key: string) => {
		let copy = structuredClone(expanded);
		copy[key] = !copy[key];
		setExpanded(copy);
	};

	return (
		<div className={styles.csEditor}>
			{categories.map((cat) => (
				<Accordion
					key={cat.key}
					expanded={expanded[cat.key]}
					Icon={cat.Icon}
					title={cat.title}
					onToggleAccordion={() => toggleCategory(cat.key)}
				>
					{cat.children}
				</Accordion>
			))}
		</div>
	);
};

export default CSEditor;
