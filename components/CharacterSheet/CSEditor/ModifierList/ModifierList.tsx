import { StatModifier } from "@/types/csEditor/characterSheet";
import React from "react";
import styles from "./ModifierList.module.scss";
import { FaInfoCircle } from "react-icons/fa";

type Props = { modifiers: StatModifier[]; toggleMod: Function };

const ModifierList = (props: Props) => {
	const { modifiers, toggleMod } = props;
	if (!modifiers) return null;

	return (
		<span className={styles.modifierList}>
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

export default ModifierList;
