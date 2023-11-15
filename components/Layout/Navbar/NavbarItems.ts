import { IconType } from "react-icons/lib";

import { FaHome } from "react-icons/fa";
import { GiConwayLifeGlider } from "react-icons/gi";
import { GiMaze } from "react-icons/gi";

interface NavbarLink {
	href: string;
	Icon: IconType | null;
	title: string;
}

const NavbarLinks: NavbarLink[] = [
	{ href: "/home", Icon: FaHome, title: "Home" },
	{ href: "/conways", Icon: GiConwayLifeGlider, title: "Conway's" },
	{ href: "/pathfinding", Icon: GiMaze, title: "Pathfinding" },
	{ href: "/sorting", Icon: null, title: "Sorting" },
	{ href: "/character-sheets", Icon: null, title: "Character Sheets" },
];

export const NavbarItems = {
	links: NavbarLinks,
	theme: null,
	palette: null,
	language: null,
	user: null,
};
