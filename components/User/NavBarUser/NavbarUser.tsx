import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import styles from "./NavbarUser.module.scss";

type Props = {};

const NavbarUser = (props: Props) => {
	const router = useRouter();
	const { data: session } = useSession();

	if (!session) return <div onClick={() => router.push("/user/Login")}>Register / Log In</div>;

	return (
		<div className={styles.navbarUser} onClick={() => router.push("/user/Profile")}>
			<div className={styles.name}>{session.user?.name}</div>
			<div className={styles.email}>{session.user?.email}</div>
			<div className={styles.image}>
				<Image src={session.user?.image || ""} alt="profile icon" height={"100%"} width={"100%"} />
			</div>
		</div>
	);
};

export default NavbarUser;
