import React from "react";

import HitPoints from "./HitPoints/HitPoints";
import ArmorClass from "./ArmorClass/ArmorClass";
import Initiative from "./Initiative/Initiative";
import SavingThrows from "./SavingThrows/SavingThrows";

type Props = {};

const Stats = (props: Props) => {
	return (
		<>
			<HitPoints />
			<ArmorClass />
			<Initiative />
			<SavingThrows />
		</>
	);
};

export default Stats;
