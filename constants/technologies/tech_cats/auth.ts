import { TechnologyCategory_I } from "@/types/home/technologies";

import { BsFillShieldLockFill } from "react-icons/bs";
import { Tech_NextAuth } from "../techs";

const Tech_Cat_Auth: TechnologyCategory_I = {
	icon: BsFillShieldLockFill,
	key: "AUTHENTICATION_CAT",
	name: "Authentication",
	techs: [Tech_NextAuth],
};

export default Tech_Cat_Auth;
