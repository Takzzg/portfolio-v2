import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import styles from "./NavbarUser.module.scss";
import { FaUser } from "react-icons/fa";

type Props = {};

const NavbarUser = (props: Props) => {
	const router = useRouter();
	const { data: session } = useSession();

	if (!session?.user)
		return (
			<button className={styles.loginBtn} onClick={() => router.push("/user/login")}>
				Log In <FaUser />
			</button>
		);

	return (
		<div className={styles.navbarUser} onClick={() => router.push("/user/profile")}>
			<div className={styles.name}>{session.user.name}</div>
			<div className={styles.email}>{session.user.email}</div>
			<Image className={styles.image} src={session.user.image || ""} alt="profile icon" width={40} height={40} />
		</div>
	);
};

export default NavbarUser;
