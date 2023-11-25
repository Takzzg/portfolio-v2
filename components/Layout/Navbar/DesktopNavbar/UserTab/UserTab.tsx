"use client";

import React, { useEffect } from "react";
import UserLogin from "./UserLogin/UserLogin";
import UserDetails from "./UserDetails/UserDetails";
import SlidingMenuItem from "../SlidingMenuItem/SlidingMenuItem";
import { FaUserCircle } from "react-icons/fa";
import { useSession } from "next-auth/react";
import UserAvatar from "./UserAvatar/UserAvatar";
import styles from "./UserTab.module.scss";

type Props = {};

const UserTab = (props: Props) => {
	const { data: session, status } = useSession();

	useEffect(() => {
		console.log("session", session);
		console.log("status", status);
	}, [session, status]);

	const content = <div className={styles.userTabContent}>{session ? <UserDetails /> : <UserLogin />}</div>;

	return (
		<SlidingMenuItem
			Icon={session ? <UserAvatar avatarUrl={session.user.image} /> : <FaUserCircle />}
			content={content}
		/>
	);
};
export default UserTab;
