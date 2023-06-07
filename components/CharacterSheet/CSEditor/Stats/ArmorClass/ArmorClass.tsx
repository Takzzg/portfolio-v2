"use client";

import React, { useState } from "react";
import { FaShieldAlt } from "react-icons/fa";
import styles from "./ArmorClass.module.scss";
import PanelTemplate from "../../PanelTemplate/PanelTemplate";
import { DeepCopy } from "@/scripts/utilities/DeepCopy";
import { ArmorClass_I, StatModifier } from "@/types/csEditor/characterSheet";
import ModifierList from "../../ModifierList/ModifierList";

const BASE_CA = 10;

const calculateTotalCA = (modifiers: StatModifier[]) => {
	let totalCA = BASE_CA;
	if (modifiers) modifiers.forEach((mod) => mod.enabled && (totalCA += mod.value));
	return totalCA;
};

type Props = ArmorClass_I;

const ArmorClass = (props: Props) => {
	const { modifiers } = props;

	const [CAmodifiers, setCAmodifiers] = useState(modifiers || []);
	const [totalCA, setTotalCA] = useState(calculateTotalCA(CAmodifiers));

	const toggleMod = (source: string) => {
		let copy: StatModifier[] = DeepCopy(CAmodifiers);
		let mod = copy.find((m: StatModifier) => m.description.source === source)!;
		mod.enabled = !mod.enabled;

		setCAmodifiers(copy);
		setTotalCA(calculateTotalCA(copy));
	};

	return (
		<PanelTemplate Icon={FaShieldAlt} iconColor="blue" title="Armor Class" className={styles.armorClass}>
			<span className={styles.totalCA}>Total: {totalCA}</span>
			<ModifierList modifiers={CAmodifiers} toggleMod={toggleMod} />
		</PanelTemplate>
	);
};

export default ArmorClass;
