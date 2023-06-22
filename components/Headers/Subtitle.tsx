import React from "react";

type Props = {
	children: string;
	className?: string;
};

const Subtitle = (props: Props) => {
	const { children, className } = props;
	return (
		<div className={className} style={{ textAlign: "center", fontSize: "2rem" }}>
			{children}
		</div>
	);
};

export default Subtitle;
