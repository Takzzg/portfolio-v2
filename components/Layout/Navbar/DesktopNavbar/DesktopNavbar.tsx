import React from "react";
import styles from "./DesktopNavbar.module.scss";

import { NavbarItems } from "../NavbarItems";
import LinkWrapper from "../LinkWrapper/LinkWrapper";

type Props = React.ComponentPropsWithoutRef<"div"> & {};

const DesktopNavbar = (props: Props) => {
	const { ...rest } = props;

	return (
		<div {...rest} className={`${props.className} ${styles.navbarCont}`}>
			{NavbarItems.links.map((link) => (
				<LinkWrapper key={link.href} {...link} />
			))}
		</div>
	);
};

export default DesktopNavbar;
