import { TechnologyCategory_I } from "@/types/home/technologies";

import { MdOutlineDashboardCustomize } from "react-icons/md";
import { Tech_Luxon, Tech_ReactIcons } from "../techs";

const Tech_Cat_Others: TechnologyCategory_I = {
	icon: MdOutlineDashboardCustomize,
	key: "OTHERS_CAT",
	name: "Other Libraries",
	techs: [Tech_ReactIcons, Tech_Luxon],
};

export default Tech_Cat_Others;
