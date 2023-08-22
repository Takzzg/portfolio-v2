import React from "react";
import styles from "./TechSidebar.module.scss";
import Category from "./Category/Category";
import { ChangeSelection_I, SelectedTechnology_I } from "@/types/home/technologies";
import { TechCategoryList } from "constants/technologies/categories";

type Props = {
	selectedTech: SelectedTechnology_I;
	changeSelection: ChangeSelection_I;
};

const TechSidebar = (props: Props) => {
	const { selectedTech, changeSelection } = props;

	return (
		<div className={styles.techSidebar}>
			{TechCategoryList.map((cat) => (
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
