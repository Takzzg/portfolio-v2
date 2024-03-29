"use client";

import { ReactNode, useEffect } from "react";
import styles from "./Layout.module.scss";

import DesktopNavbar from "./Navbar/DesktopNavbar/DesktopNavbar";
import MobileNavbar from "./Navbar/MobileNavbar/MobileNavbar";
import { useCombinedStore } from "@/zustand/store";
import { syncStoreToLocalStorage } from "@/scripts/localStorage/zustand";

interface Props {
	children: ReactNode;
}

const Layout = ({ children }: Props) => {
	const store = useCombinedStore();

	useEffect(() => {
		syncStoreToLocalStorage(store);
	}, []);

	return (
		<div className={styles.layout}>
			<div className={styles.navbar}>
				<DesktopNavbar className={styles.desktopNavbar} />
				<MobileNavbar className={styles.mobileNavbar} />
			</div>
			<div className={styles.content}>{children}</div>
		</div>
	);
};

export default Layout;
