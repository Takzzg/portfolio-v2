"use client";

import React from "react";
import UserLogin from "./UserLogin/UserLogin";
import UserDetails from "./UserDetails/UserDetails";
import SlidingMenuItem from "../SlidingMenuItem/SlidingMenuItem";
import { FaUserCircle } from "react-icons/fa";
import { useSession } from "next-auth/react";
import UserAvatar from "./UserAvatar/UserAvatar";
import styles from "./UserTab.module.scss";

type Props = {};

const UserTab = (props: Props) => {
	const { data: session } = useSession();

	const Icon = session ? <UserAvatar avatarUrl={session.user.image} /> : <FaUserCircle />;
	const content = <div className={styles.userTabContent}>{session ? <UserDetails /> : <UserLogin />}</div>;

	return <SlidingMenuItem Icon={Icon} content={content} verticalPosOverride={{ bottom: 0 }} />;
};
export default UserTab;
