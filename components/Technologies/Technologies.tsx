"use client";

import React, { useState } from "react";
import TechSidebar from "./TechSidebar/TechSidebar";
import TechMap from "./TechMap/TechMap";
import { ChangeSelection_I, SelectedTechnology_I, TechnologyCategory_I, Technology_I } from "@/types/home/technologies";
import styles from "./Technologies.module.scss";

type Props = {};

const defaultState: SelectedTechnology_I = { category: null, tech: null };

const Technologies = (props: Props) => {
	const [selectedTech, setSelectedTech] = useState(defaultState);

	const changeSelection: ChangeSelection_I = (category: TechnologyCategory_I | null, tech?: Technology_I | null) => {
		let finalCat = selectedTech.category;
		let finalTech = selectedTech.tech;

		if (tech) {
			finalCat = category;
			finalTech = selectedTech.tech === tech ? null : tech;
		} else {
			finalCat = selectedTech.category === category ? null : category;
			finalTech = null;
		}

		setSelectedTech({ category: finalCat, tech: finalTech });
	};

	return (
		<div className={styles.technologies}>
			<TechSidebar selectedTech={selectedTech} changeSelection={changeSelection} />
			<TechMap selectedTech={selectedTech} changeSelection={changeSelection} />
		</div>
	);
};

export default Technologies;
