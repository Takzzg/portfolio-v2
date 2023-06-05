import React from "react";

import testSheet from "../testSheet";
import HitPoints from "./HitPoints/HitPoints";
import ArmorClass from "./ArmorClass/ArmorClass";

type Props = {};

const Stats = (props: Props) => {
	return (
		<div>
			<HitPoints {...testSheet.character.stats.hp} />
			<ArmorClass {...testSheet.character.stats.ac} />
		</div>
	);
};

export default Stats;
