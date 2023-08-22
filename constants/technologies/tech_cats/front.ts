import { TechnologyCategory_I } from "@/types/home/technologies";

import { FiMonitor } from "react-icons/fi";
import { Tech_NextJS, Tech_Sass, Tech_Zustand } from "../techs";

const Tech_Cat_Front: TechnologyCategory_I = {
	icon: FiMonitor,
	key: "FRONTEND_CAT",
	name: "Frontend",
	techs: [Tech_NextJS, Tech_Sass, Tech_Zustand],
};

export default Tech_Cat_Front;
