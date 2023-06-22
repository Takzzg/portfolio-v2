import React, { ReactNode } from "react";
import Divider from "./Divider";

type Props = {
	children: ReactNode;
	divider?: "mountains" | "bezier";
	color: string;
	className?: string;
};

const Section = (props: Props) => {
	const { children, divider = "mountains", color, className } = props;

	return (
		<div style={{ backgroundColor: color, position: "relative" }}>
			<Divider color={color} divider={divider} />
			<div className={className} style={{ padding: "1rem" }}>
				{children}
			</div>
		</div>
	);
};

export default Section;
