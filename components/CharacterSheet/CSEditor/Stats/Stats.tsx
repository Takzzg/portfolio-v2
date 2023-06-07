import React from "react";

import testSheet from "../testSheet";
import HitPoints from "./HitPoints/HitPoints";
import ArmorClass from "./ArmorClass/ArmorClass";

type Props = {};

const Stats = (props: Props) => {
	const { hp, ac } = testSheet.character.stats;

	return (
		<>
			<HitPoints {...hp} />
			<ArmorClass {...ac} />
		</>
	);
};

export default Stats;
