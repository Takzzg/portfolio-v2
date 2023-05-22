import React, { ReactNode } from "react";

type Props = {
	children: string;
};

const Subtitle = ({ children }: Props) => {
	return (
		<div
			style={{
				textAlign: "center",
				fontSize: "2rem",
			}}
		>
			{children}
		</div>
	);
};

export default Subtitle;
