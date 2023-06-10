"use client";

import React, { useEffect, useState } from "react";
import styles from "./CSEditor.module.scss";
import Accordion from "@/components/UI/Accordion/Accordion";
import { FaMale, FaScroll } from "react-icons/fa";
import { IconType } from "react-icons";
import Stats from "./Stats/Stats";
import { DeepCopy } from "@/scripts/utilities/DeepCopy";
import Abilities from "./Abilities/Abilities";
import { useCombinedStore } from "@/zustand/store";
import testSheet from "testSheet";
import { getBaseInitiativeModifier } from "@/scripts/DnD";
import { CharacterSheet_I } from "@/types/csEditor/characterSheet";

type Props = {};

type CSEditorCategory = {
	key: string;
	title: string;
	Icon: IconType;
	children?: JSX.Element | JSX.Element[];
};

const categories: CSEditorCategory[] = [
	{ key: "desc", title: "Description", Icon: FaMale, children: undefined },
	{ key: "stats", title: "Stats", Icon: FaMale, children: <Stats /> },
	{ key: "abilities", title: "Abilities", Icon: FaMale, children: <Abilities /> },
	{ key: "spells", title: "Spells", Icon: FaScroll, children: undefined },
	{ key: "feats", title: "Feats", Icon: FaMale, children: undefined },
];

const initialState: { [key: string]: boolean } = {};
categories.forEach((cat) => (initialState[cat.key] = false));

const CSEditor = (props: Props) => {
	const setEditingCS = useCombinedStore((state) => state.cSheets.setEditingSheet);
	const [expanded, setExpanded] = useState(initialState);

	useEffect(() => {
		setEditingCS(testSheet);
	}, [setEditingCS]);

	const toggleCategory = (key: string) => {
		let copy = DeepCopy(expanded);
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
