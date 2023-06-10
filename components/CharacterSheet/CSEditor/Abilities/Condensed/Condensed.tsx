"use client";

import React from "react";
import styles from "./Condensed.module.scss";
import { FaMale } from "react-icons/fa";
import PanelTemplate from "../../../PanelTemplate/PanelTemplate";
import { useCombinedStore } from "@/zustand/store";
import { getStringModifierFromValue } from "@/scripts/DnD";
import { Abilities_I } from "@/types/csEditor/characterSheet/stats/abilities";

type Props = {};

const Condensed = (props: Props) => {
	const abilities = useCombinedStore((state) => state.cSheets.editingSheet?.character.stats.abilities);

	if (!abilities) return <div>Loading...</div>;

	return (
		<PanelTemplate Icon={FaMale} className={styles.condensed} title="Condensed">
			<span className={styles.header}>Ability</span>
			<span className={styles.header}>Value</span>
			<span className={styles.header}>Mod.</span>

			{Object.keys(abilities).map((key) => {
				let abilityKey = key as keyof Abilities_I;

				return (
					<React.Fragment key={key}>
						<span className={styles.title}>{abilityKey}</span>
						<span className={styles.value}>{abilities[abilityKey].value}</span>
						<span className={styles.mod}>{getStringModifierFromValue(abilities[abilityKey].value)}</span>
					</React.Fragment>
				);
			})}
		</PanelTemplate>
	);
};

export default Condensed;
