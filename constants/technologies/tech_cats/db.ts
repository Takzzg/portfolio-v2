import { TechnologyCategory_I } from "@/types/home/technologies";

import { GrStorage } from "react-icons/gr";
import { Tech_VercelDB, Tech_Neon } from "../techs";

const Tech_Cat_DB: TechnologyCategory_I = {
	icon: GrStorage,
	key: "DATABASES_CAT",
	name: "Databases",
	techs: [Tech_VercelDB, Tech_Neon],
};

export default Tech_Cat_DB;
