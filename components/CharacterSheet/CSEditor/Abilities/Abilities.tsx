"use client";

import React, { useState } from "react";

import testSheet from "../../../../testSheet";
import Condensed from "./Condensed/Condensed";
import Ability from "./Ability/Ability";
import { Abilities_I } from "@/types/csEditor/characterSheet";
import { DeepCopy } from "@/scripts/utilities/DeepCopy";

type Props = {};

const Abilities = (props: Props) => {
	const [abilities, setAbilities] = useState(testSheet.character.stats.abilities);

	const toggleMod = (key: string, source: string) => {
		console.log("key", key);
		console.log("source", source);
		let copy: Abilities_I = DeepCopy(abilities);
		let mod = copy[key as keyof Abilities_I].modifiers.find((m) => m.description.source === source)!;
		mod.enabled = !mod.enabled;
		console.log("copy", copy);
		setAbilities(copy);
	};

	return (
		<>
			<Condensed {...abilities} />
			{Object.keys(abilities).map((key) => (
				<Ability
					key={key}
					ability={abilities[key as keyof Abilities_I]}
					toggleMod={toggleMod.bind(this, key)}
				/>
			))}
		</>
	);
};

export default Abilities;
