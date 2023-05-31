"use client";

import { useCombinedStore } from "@/scripts/zustand/store";
import React from "react";
import HitPoints from "./HitPoints/HitPoints";
import testSheet from "./testSheet";

type Props = {};

const CSEditor = (props: Props) => {
	const cSheetStore = useCombinedStore((state) => state.cSheets);
	console.log("cSheetStore.editingSheet", cSheetStore.editingSheet);

	return (
		<div>
			<div>IMAGE</div>
			<HitPoints {...testSheet.character.stats.hp} />
		</div>
	);
};

export default CSEditor;
