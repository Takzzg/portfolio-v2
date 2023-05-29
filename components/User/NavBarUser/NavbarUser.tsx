import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import styles from "./NavbarUser.module.scss";

type Props = {};

const NavbarUser = (props: Props) => {
	const router = useRouter();
	const { data: session } = useSession();

	if (!session) return <div onClick={() => router.push("/user/login")}>Log In</div>;

	return (
		<div className={styles.navbarUser} onClick={() => router.push("/user/profile")}>
			<div className={styles.name}>{session.user?.name}</div>
			<div className={styles.email}>{session.user?.email}</div>
			<div className={styles.image}>
				<Image src={session.user?.image || ""} alt="profile icon" width={50} height={50} />
			</div>
		</div>
	);
};

export default NavbarUser;
