import React from "react";
import styles from "./TechSidebar.module.scss";
import { usedTechnologies } from "constants/technologies";
import Category from "./Category/Category";
import { ChangeSelection_I, SelectedTechnology_I } from "@/types/home/technologies";

type Props = {
	selectedTech: SelectedTechnology_I;
	changeSelection: ChangeSelection_I;
};

const TechSidebar = (props: Props) => {
	const { selectedTech, changeSelection } = props;

	return (
		<div className={styles.techSidebar}>
			{usedTechnologies.map((cat) => (
				<Category
					key={cat.name}
					cat={cat}
					selectedTech={selectedTech}
					onCategoryClick={() => changeSelection(cat)}
					changeSelection={changeSelection}
				/>
			))}
		</div>
	);
};

export default TechSidebar;
