"use client";

import React from "react";
import { useCombinedStore } from "../../../scripts/zustand/store";
import { FaPlus } from "react-icons/fa";
import styles from "./CSManager.module.scss";

type Props = {};

const CSManager = (props: Props) => {
	const cSheetStore = useCombinedStore((state) => state.cSheets);
	console.log("cSheetStore.userSheets", cSheetStore.userSheets);

	return (
		<div className={styles.sheetManager}>
			<button className={styles.addSheet}>
				<FaPlus /> add sheet
			</button>
			<div className={styles.sheetList}>
				{cSheetStore.userSheets.map((sheet, i) => {
					<div>
						{i + 1} - {sheet.title}
					</div>;
				})}
			</div>
		</div>
	);
};

export default CSManager;
