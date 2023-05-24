import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

const NavbarUser = (props: Props) => {
	const router = useRouter();
	const { data: session } = useSession();

	if (!session) return <div onClick={() => router.push("/user/Login")}>Register / Log In</div>;

	return (
		<div onClick={() => router.push("/user/Profile")}>
			<div className="name">{session.user?.name}</div>
			<div className="email">{session.user?.email}</div>
			<div className="image">
				<img src={session.user?.image || ""} alt="profile image" />
			</div>
		</div>
	);
};

export default NavbarUser;
