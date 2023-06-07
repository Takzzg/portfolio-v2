import React from "react";
import styles from "./Condensed.module.scss";
import { Abilities_I } from "@/types/csEditor/characterSheet";
import { FaMale } from "react-icons/fa";
import PanelTemplate from "../../PanelTemplate/PanelTemplate";

type Props = Abilities_I;

const calculateBaseModifier = (value: number) => {
	let mod = Math.ceil((value - 10) / 2);
	if (mod < 0) return `${mod}`;
	return `+${mod}`;
};

const Condensed = (props: Props) => {
	return (
		<PanelTemplate Icon={FaMale} className={styles.condensed} title="Condensed">
			<span className={styles.header}>Ability</span>
			<span className={styles.header}>Value</span>
			<span className={styles.header}>Modifier</span>

			{Object.keys(props).map((key) => {
				let abilityKey = key as keyof Abilities_I;

				return (
					<React.Fragment key={key}>
						<span className={styles.title}>{abilityKey}</span>
						<span className={styles.value}>{props[abilityKey].value}</span>
						<span className={styles.mod}>{calculateBaseModifier(props[abilityKey].value)}</span>
					</React.Fragment>
				);
			})}
		</PanelTemplate>
	);
};

export default Condensed;
