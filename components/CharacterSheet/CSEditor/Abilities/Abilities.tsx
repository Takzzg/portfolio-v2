import React from "react";

import Condensed from "./Condensed/Condensed";
import Ability from "./Ability/Ability";
import { AbilityKey_I } from "@/types/csEditor/characterSheet";

type Props = {};

const AbilityKeys: AbilityKey_I[] = ["str", "dex", "con", "int", "wis", "cha"];

const Abilities = (props: Props) => {
	return (
		<>
			<Condensed />
			{AbilityKeys.map((key: AbilityKey_I) => (
				<Ability key={key} abilityKey={key} />
			))}
		</>
	);
};

export default Abilities;
