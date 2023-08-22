import React from "react";
import { ChangeSelection_I, SelectedTechnology_I, TechnologyCategory_I } from "@/types/home/technologies";
import styles from "./Category.module.scss";
import Accordion from "@/components/UI/Accordion/Accordion";
import Tech from "./Tech/Tech";

type Props = {
	cat: TechnologyCategory_I;
	selectedTech: SelectedTechnology_I;
	onCategoryClick: Function;
	changeSelection: ChangeSelection_I;
};

const CategoryHeader = (cat: TechnologyCategory_I) => {
	let { icon: Icon, name } = cat;
	return (
		<span className={styles.categoryHeader}>
			{Icon ? <Icon /> : undefined}
			{name}
		</span>
	);
};

const Category = (props: Props) => {
	const { cat, selectedTech, onCategoryClick, changeSelection } = props;

	return (
		<Accordion
			// className={styles.category}
			expanded={selectedTech.category === cat}
			onToggleAccordion={onCategoryClick}
			header={CategoryHeader(cat)}
			content={
				<span className={styles.categoryBody}>
					{cat.techs.map((t) => (
						<Tech
							key={t.name}
							tech={t}
							selected={selectedTech.tech === t}
							onClick={() => changeSelection(cat, t)}
						/>
					))}
				</span>
			}
		/>
	);
};

export default Category;
