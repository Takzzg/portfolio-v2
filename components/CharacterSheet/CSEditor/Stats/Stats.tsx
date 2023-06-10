import React from "react";

import HitPoints from "./HitPoints/HitPoints";
import ArmorClass from "./ArmorClass/ArmorClass";
import Initiative from "./Initiative/Initiative";

type Props = {};

const Stats = (props: Props) => {
	return (
		<>
			<HitPoints />
			<ArmorClass />
			<Initiative />
		</>
	);
};

export default Stats;
