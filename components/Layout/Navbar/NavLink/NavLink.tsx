"use client";

import Link from "next/link";
import styles from "./NavLink.module.scss";
import { usePathname } from "next/navigation";

interface Props {
	href: string;
	title: string;
	active: boolean;
	color?: string;
}

const NavLink = ({ href, title, color }: Props) => {
	const pathname = usePathname();
	const active = pathname === href;

	return (
		<Link href={href} passHref>
			<div
				className={`${styles.button} ${active ? styles.active : ""}`}
				style={{ backgroundColor: active ? color : "" }}
			>
				{title}
			</div>
		</Link>
	);
};

export default NavLink;
