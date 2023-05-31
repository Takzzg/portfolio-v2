"use client";

import NavLink from "./NavLink/NavLink";
import styles from "./Navbar.module.scss";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { langCtx } from "../../../context/Lang";
import NavbarUser from "../../User/NavBarUser/NavbarUser";
import LangSwitcher from "./LangSwitcher/LangSwitcher";

const Navbar = () => {
	const pathname = usePathname();
	const lang = useContext(langCtx).lang.translation;

	const buttons = [
		{ href: "/home", title: lang.nav.homeLink },
		{ href: "/conways", title: "Conway's" },
		{ href: "/pathfinding", title: "Pathfinding" },
		{ href: "/sorting", title: "Sorting" },
		{ href: "/character-sheets", title: "Character Sheets" },
	];

	return (
		<div className={styles.navbar}>
			<div className={styles.navbarContainer}>
				<div className={styles.navbarItems}>
					{buttons.map((b, i) => (
						<NavLink
							key={b.href}
							href={b.href}
							active={pathname === b.href}
							title={b.title}
							color={`hsl(${(255 / buttons.length) * (i + 1)}, 100%, 25%)`}
						/>
					))}
				</div>
				<LangSwitcher />
				<NavbarUser />
			</div>
		</div>
	);
};

export default Navbar;
