"use client";

import NavLink from "./NavLink/NavLink";
import styles from "./Navbar.module.scss";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { langCtx } from "../../../context/Lang";
import NavbarUser from "../../User/NavBarUser/NavbarUser";

const Navbar = () => {
	const pathname = usePathname();
	const languageCtx = useContext(langCtx);

	const buttons = [
		{ href: "/home", title: languageCtx.lang.nav.homeLink },
		{ href: "/conways", title: "Conway's" },
		{ href: "/pathfinding", title: "Pathfinding" },
		{ href: "/sorting", title: "Sorting" },
		{ href: "/character-sheets", title: "Character Sheets" },
	];

	return (
		<div className={styles.navbar} style={pathname === "/" ? { position: "fixed" } : { position: "sticky" }}>
			<div className={styles.navbarContainer}>
				<div className={styles.navbarItems}>
					{buttons.map((b, i) => (
						<NavLink
							key={b.href}
							href={b.href}
							active={pathname === b.href}
							title={b.title}
							// color={`hsl(${(255 / buttons.length) * i}, 100%, 25%)`}
						/>
					))}
				</div>

				<div className={styles.language}>
					<button
						onClick={() => {
							languageCtx.changeLang("es");
						}}
					>
						Español
					</button>
					<button
						onClick={() => {
							languageCtx.changeLang("en");
						}}
					>
						English
					</button>
				</div>

				<NavbarUser />
			</div>
		</div>
	);
};

export default Navbar;
