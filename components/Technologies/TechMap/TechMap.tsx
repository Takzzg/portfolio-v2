import React from "react";
import Region from "./Region/Region";
import styles from "./TechMap.module.scss";
import { ChangeSelection_I, SelectedTechnology_I } from "@/types/home/technologies";
import { TechnologiesTree } from "constants/technologies/categories";

type Props = {
	selectedTech: SelectedTechnology_I;
	changeSelection: ChangeSelection_I;
};

const TechMap = (props: Props) => {
	const { selectedTech, changeSelection } = props;

	return (
		<div className={styles.techMap}>
			<Region techTree={TechnologiesTree} selectedTech={selectedTech} changeSelection={changeSelection} />
		</div>
	);
};

export default TechMap;
