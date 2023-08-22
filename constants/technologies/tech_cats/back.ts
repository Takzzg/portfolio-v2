import { TechnologyCategory_I } from "@/types/home/technologies";

import { HiOutlineServer } from "react-icons/hi";
import { Tech_Prisma, Tech_Postgres } from "../techs";

const Tech_Cat_Back: TechnologyCategory_I = {
	icon: HiOutlineServer,
	key: "BACKEND_CAT",
	name: "Backend",
	techs: [Tech_Prisma, Tech_Postgres],
};

export default Tech_Cat_Back;
