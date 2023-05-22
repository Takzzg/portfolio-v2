import Link from "next/link";

import styles from "./NavLink.module.scss";

interface Props {
	href: string;
	title: string;
	active: boolean;
	color?: string;
}

const NavLink = ({ href, title, active, color }: Props) => {
	const bg = active ? (color ? color : "red") : "";

	return (
		<Link href={href} passHref>
			<div className={styles.button} style={{ backgroundColor: bg }}>
				{title}
			</div>
		</Link>
	);
};

export default NavLink;
