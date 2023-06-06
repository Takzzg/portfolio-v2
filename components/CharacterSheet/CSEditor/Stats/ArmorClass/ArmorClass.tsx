"use client";

import React, { useState } from "react";
import { FaInfoCircle, FaShieldAlt } from "react-icons/fa";
import styles from "./ArmorClass.module.scss";
import PanelTemplate from "../../PanelTemplate/PanelTemplate";
import { DeepCopy } from "@/scripts/utilities/DeepCopy";
import { ArmorClass_I, StatModifier } from "@/types/csEditor/characterSheet";

const Modifiers = (props: { modifiers: StatModifier[]; toggleMod: Function }) => {
	const { modifiers, toggleMod } = props;
	if (!modifiers) return null;

	return (
		<span className={styles.modifiers}>
			{modifiers.map((mod) => (
				<span className={`${styles.mod} ${!mod.enabled && styles.disabled}`} key={mod.description.source}>
					<span className={styles.source}>{mod.description.source}</span>
					<span className={styles.value}>{mod.value}</span>
					<span className={styles.desc}>
						{/* TO-DO: show description on hover */}
						<FaInfoCircle />
					</span>
					<span className={styles.enabled}>
						<input
							type="checkbox"
							name="enabled"
							id={mod.description.source}
							checked={mod.enabled}
							onChange={() => toggleMod(mod.description.source)}
						/>
					</span>
				</span>
			))}
		</span>
	);
};

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
			<Modifiers modifiers={CAmodifiers} toggleMod={toggleMod} />
		</PanelTemplate>
	);
};

export default ArmorClass;
