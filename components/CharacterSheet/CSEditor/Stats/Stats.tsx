import React from "react";

import HitPoints from "./HitPoints/HitPoints";
import ArmorClass from "./ArmorClass/ArmorClass";

type Props = {};

const Stats = (props: Props) => {
	return (
		<>
			<HitPoints />
			<ArmorClass />
		</>
	);
};

export default Stats;
