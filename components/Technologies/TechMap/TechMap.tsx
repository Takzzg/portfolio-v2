import React from "react";
import Region from "./Region/Region";
import { usedTechnologiesTree } from "constants/technologies";
import styles from "./TechMap.module.scss";
import { ChangeSelection_I, SelectedTechnology_I } from "@/types/home/technologies";

type Props = {
	selectedTech: SelectedTechnology_I;
	changeSelection: ChangeSelection_I;
};

const TechMap = (props: Props) => {
	const { selectedTech, changeSelection } = props;

	return (
		<div className={styles.techMap}>
			<Region techTree={usedTechnologiesTree} selectedTech={selectedTech} changeSelection={changeSelection} />
		</div>
	);
};

export default TechMap;
