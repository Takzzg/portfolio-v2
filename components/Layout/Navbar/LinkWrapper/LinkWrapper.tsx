import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import PrimaryButton from "../DesktopNavbar/PrimaryButton/PrimaryButton";

type Props = {
	href: string;
	Icon: IconType | null;
	title: string;
};

/**
 * Wrapper component, sends Icon as children
 * necessary to avoid unserialized server function as prop for client component
 */
const LinkWrapper = (props: Props) => {
	const { href, Icon, title } = props;

	return (
		<Link href={href} passHref>
			<PrimaryButton title={title}>{Icon ? <Icon /> : "icon"}</PrimaryButton>
		</Link>
	);
};

export default LinkWrapper;
