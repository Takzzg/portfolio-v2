import { ReactNode } from "react";
import styles from "./Layout.module.scss";

import Disclaimer from "./Disclaimer/Disclaimer";
import DesktopNavbar from "./Navbar/DesktopNavbar/DesktopNavbar";
import MobileNavbar from "./Navbar/MobileNavbar/MobileNavbar";

interface Props {
	children: ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<>
			<Disclaimer />
			<div className={styles.layout}>
				<DesktopNavbar className={styles.desktopNavbar} />
				<MobileNavbar className={styles.mobileNavbar} />
				{children}
			</div>
		</>
	);
};

export default Layout;
