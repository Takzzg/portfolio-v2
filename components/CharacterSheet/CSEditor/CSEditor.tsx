// "use client";

// import { useCombinedStore } from "@/scripts/zustand/store";
import React from "react";
import HitPoints from "./HitPoints/HitPoints";
import testSheet from "./testSheet";
import styles from "./CSEditor.module.scss";
import ArmorClass from "./ArmorClass/ArmorClass";

type Props = {};

const CSEditor = (props: Props) => {
	// const cSheetStore = useCombinedStore((state) => state.cSheets);
	// console.log("cSheetStore.editingSheet", cSheetStore.editingSheet);

	return (
		<div className={styles.csEditor}>
			<div>IMAGE</div>
			<HitPoints {...testSheet.character.stats.hp} />
			<ArmorClass {...testSheet.character.stats.ac} />
		</div>
	);
};

export default CSEditor;
