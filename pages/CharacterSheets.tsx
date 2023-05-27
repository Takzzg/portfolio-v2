import React from "react";
import CSMannager from "../components/CharacterSheet/CSMannager/CSMannager";
import CSEditor from "../components/CharacterSheet/CSEditor/CSEditor";

type Props = {};

const CharacterSheets = (props: Props) => {
	return (
		<div>
			<CSMannager />
			<CSEditor />
		</div>
	);
};

export default CharacterSheets;
