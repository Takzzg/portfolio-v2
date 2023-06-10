import { IconType } from "react-icons";

export type CSEditorCategory = {
	key: string;
	title: string;
	Icon: IconType;
	children?: JSX.Element | JSX.Element[];
};
