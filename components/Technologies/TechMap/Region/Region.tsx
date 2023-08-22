import React from "react";
import styles from "./Region.module.scss";
import Tech from "./Tech/Tech";
import { ChangeSelection_I, SelectedTechnology_I, TechnologyTree_I } from "@/types/home/technologies";

type Props = {
	techTree: TechnologyTree_I;
	selectedTech: SelectedTechnology_I;
	changeSelection: ChangeSelection_I;
};

const Region = (props: Props) => {
	const { techTree, selectedTech, changeSelection } = props;

	const isSelected = selectedTech.category?.key === techTree.category.key;

	return (
		<div className={`${styles.region} ${isSelected && styles.selected}`}>
			<span className={styles.regionName} onClick={() => changeSelection(techTree.category)}>
				{techTree.category.name}
			</span>
			<span className={styles.regionContent}>
				<span className={`${styles.regionTechs} ${techTree.children && styles.horizontal}`}>
					{techTree.category.techs.map((tech) => (
						<Tech
							key={tech.name}
							tech={tech}
							selected={false}
							onClick={() => changeSelection(techTree.category, tech)}
						/>
					))}
				</span>
				{techTree.children && (
					<span className={styles.regionChildren}>
						{techTree.children.map((c) => (
							<Region
								key={c.category.name}
								techTree={c}
								selectedTech={selectedTech}
								changeSelection={changeSelection}
							/>
						))}
					</span>
				)}
			</span>
		</div>
	);
};

export default Region;
