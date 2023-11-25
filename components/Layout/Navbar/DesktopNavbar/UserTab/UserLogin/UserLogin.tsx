import React from "react";
import styles from "./UserLogin.module.scss";
import LoginPopup from "@/components/User/LoginPopup/LoginPopup";
// import Link from "next/link";

type Props = {};

const UserLogin = (props: Props) => {
	return (
		<div className={styles.userLogin}>
			Login with
			{/* google button */}
			<button onClick={() => LoginPopup({ url: "/user/login", title: "Log in to GuidoQ's portfolio" })}>
				Google
			</button>
			{/* <Link  href={"/user/login"}>Google</Link> */}
		</div>
	);
};

export default UserLogin;
