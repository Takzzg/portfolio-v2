import React from "react";
import { signOut } from "next-auth/react";
import styles from "./UserDetails.module.scss";

type Props = {};

const UserDetails = (props: Props) => {
	return (
		<div className={styles.userDetails}>
			UserDetails
			<button onClick={() => signOut()}>Sign Out</button>
		</div>
	);
};

export default UserDetails;
