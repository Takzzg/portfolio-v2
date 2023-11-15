import React from "react";

type Props = React.ComponentPropsWithoutRef<"div"> & {};

const MobileNavbar = (props: Props) => {
	const { ...rest } = props;

	return (
		<div {...rest} className={`${props.className} ${props.className}`}>
			MobileNavbar
		</div>
	);
};

export default MobileNavbar;
