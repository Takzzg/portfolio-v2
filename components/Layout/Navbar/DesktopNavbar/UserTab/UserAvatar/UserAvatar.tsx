import Image from "next/image";
import React from "react";
import styles from "./UserAvatar.module.scss";

type Props = {
	avatarUrl?: string | null;
};

const UserAvatar = (props: Props) => {
	const { avatarUrl } = props;

	// let imageToRender =

	return (
		<div className={styles.userAvatar}>
			<Image src={avatarUrl ? avatarUrl : ""} alt="user avatar" fill />
		</div>
	);
};

export default UserAvatar;
