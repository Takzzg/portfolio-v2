import NavLink from "./NavLink/NavLink";
import styles from "./Navbar.module.scss";
import { useRouter } from "next/router";
import { useContext } from "react";
import { langCtx } from "../../../context/Lang";
import NavbarUser from "../../User/NavBarUser/NavbarUser";

const Navbar = () => {
	const router = useRouter();
	const languageCtx = useContext(langCtx);

	const buttons = [
		{ href: "/", title: languageCtx.lang.nav.homeLink },
		{ href: "/Conways", title: "Conway's" },
		{ href: "/Pathfinding", title: "Pathfinding" },
		{ href: "/Sorting", title: "Sorting" },
	];

	return (
		<div
			className={styles.navCont}
			style={router.pathname === "/" ? { position: "fixed" } : { position: "sticky" }}
		>
			<div className={styles.navbar}>
				{buttons.map((b, i) => (
					<NavLink
						key={b.href}
						href={b.href}
						active={router.pathname === b.href}
						title={b.title}
						// color={`hsl(${(255 / buttons.length) * i}, 100%, 25%)`}
					/>
				))}

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

				<NavbarUser />
			</div>
		</div>
	);
};

export default Navbar;
