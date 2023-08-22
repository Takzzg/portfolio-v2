import { TechnologyCategory_I } from "@/types/home/technologies";

import { FaCode } from "react-icons/fa";
import { Tech_EsLint, Tech_Prettier, Tech_Typescript } from "../techs";

const Tech_Cat_Dev: TechnologyCategory_I = {
	icon: FaCode,
	key: "DEVELOPMENT_CAT",
	name: "Development",
	techs: [Tech_Typescript, Tech_EsLint, Tech_Prettier],
};

export default Tech_Cat_Dev;
