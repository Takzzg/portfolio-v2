import { ReactNode } from "react";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

import styles from "./Layout.module.scss";
import Disclaimer from "./Disclaimer/Disclaimer";

interface Props {
	children: ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<>
			<Disclaimer />
			<div className={styles.layout}>
				<Navbar />
				{children}
				<Footer />
			</div>
		</>
	);
};

export default Layout;
