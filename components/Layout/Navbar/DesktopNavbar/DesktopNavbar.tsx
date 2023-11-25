import React from "react";
import Link from "next/link";

import styles from "./DesktopNavbar.module.scss";
import { NavbarRoutes } from "../NavbarRoutes";
import SlidingMenuItem from "./SlidingMenuItem/SlidingMenuItem";
import PalettePicker from "./PalettePicker/PalettePicker";
import ThemePicker from "./ThemePicker/ThemePicker";
import LangPicker from "./LangPicker/LangPicker";
import UserTab from "./UserTab/UserTab";

type Props = React.ComponentPropsWithoutRef<"div"> & {};

const DesktopNavbar = (props: Props) => {
	const { ...restProps } = props;

	return (
		<div {...restProps} className={`${props.className} ${styles.navbarCont}`}>
			<div className={styles.routes}>
				{/* routes */}
				{NavbarRoutes.map((route) => {
					const { href, Icon, title } = route;
					return (
						<Link key={href} href={href} passHref>
							<SlidingMenuItem
								Icon={Icon ? <Icon /> : "icon"}
								content={<span className={styles.routeTitle}>{title}</span>}
							/>
						</Link>
					);
				})}
			</div>

			<div className={styles.features}>
				{/* language */}
				<LangPicker />

				{/* theme */}
				<ThemePicker />

				{/* palette */}
				<PalettePicker />

				{/* user */}
				<UserTab />
			</div>
		</div>
	);
};

export default DesktopNavbar;
