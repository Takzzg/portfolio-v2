"use client";

import React from "react";
import { useCombinedStore } from "../../../scripts/zustand/store";

type Props = {};

const CSMannager = (props: Props) => {
	const cSheetStore = useCombinedStore((state) => state.cSheets);
	console.log("cSheetStore.userSheets", cSheetStore.userSheets);

	return (
		<div>
			<div>
				<button>New CS</button>
			</div>
			<div>CS List</div>
		</div>
	);
};

export default CSMannager;
