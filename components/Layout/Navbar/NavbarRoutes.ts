import { IconType } from "react-icons/lib";

import { FaHome, FaSignal } from "react-icons/fa";
import { GiConwayLifeGlider, GiMaze } from "react-icons/gi";
import { BsFillPeopleFill } from "react-icons/bs";

interface NavbarRoute {
	href: string;
	Icon: IconType | null;
	title: string;
	devOnly?: boolean;
}

export const NavbarRoutes: NavbarRoute[] = [
	{ href: "/home", Icon: FaHome, title: "Home" },
	{ href: "/conways", Icon: GiConwayLifeGlider, title: "Conway's" },
	{ href: "/pathfinding", Icon: GiMaze, title: "Pathfinding" },
	{ href: "/sorting", Icon: FaSignal, title: "Sorting" },
	{ href: "/character-sheets", Icon: BsFillPeopleFill, title: "Character Sheets", devOnly: true },
];
