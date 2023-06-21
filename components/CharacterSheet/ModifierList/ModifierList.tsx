import React from "react";
import styles from "./ModifierList.module.scss";
import { FaInfoCircle } from "react-icons/fa";
import { useCombinedStore } from "@/zustand/store";
import { StatModifier } from "@/types/csEditor/modifiers";
import { getModifierString, getStringModifierFromValue } from "@/scripts/DnD/utils";

const ModifierValue = (props: { modifier: StatModifier }) => {
	const stats = useCombinedStore((state) => state.cSheets.editingSheet?.character.stats);
	if (!stats) return <div>Wrong Stat ???</div>;

	const { modifier } = props;

	switch (modifier.type) {
		case "ABILITY":
			return (
				<span className={styles.value}>
					{getStringModifierFromValue(stats.abilities[modifier.ability].value)}
				</span>
			);

		case "STATIC":
			return <span className={styles.value}>{getModifierString(modifier.value)}</span>;

		default:
			return <div>Unknown Modifier type</div>;
	}
};

type Props = { modifiers: StatModifier[]; toggleModifier: Function };

const ModifierList = (props: Props) => {
	const { modifiers, toggleModifier } = props;

	if (!modifiers) return <span>Loading...</span>;

	if (!modifiers.length)
		return (
			<span className={styles.modifierList}>
				<span className={styles.empty}>No Modifiers</span>
			</span>
		);

	return (
		<span className={styles.modifierList}>
			{modifiers.map((mod) => (
				<span className={`${styles.mod} ${!mod.enabled && styles.disabled}`} key={mod.key}>
					<span className={styles.source}>{mod.title}</span>
					<ModifierValue modifier={mod} />
					<span className={styles.desc}>
						{/* TO-DO: show description on hover */}
						<FaInfoCircle />
					</span>
					<span className={styles.enabled}>
						<input
							type="checkbox"
							name="enabled"
							id={mod.key}
							checked={mod.enabled}
							onChange={() => toggleModifier(mod.key)}
						/>
					</span>
				</span>
			))}
		</span>
	);
};

export default ModifierList;
