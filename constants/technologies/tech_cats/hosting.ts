import { TechnologyCategory_I } from "@/types/home/technologies";

import { TbCloudComputing } from "react-icons/tb";
import { Tech_VercelHosting } from "../techs";

const Tech_Cat_Hosting: TechnologyCategory_I = {
	icon: TbCloudComputing,
	key: "HOSTING_CAT",
	name: "Hosting",
	techs: [Tech_VercelHosting],
};

export default Tech_Cat_Hosting;
