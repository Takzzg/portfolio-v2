/**
 * ---------- WORK-AROUND FOR FUNCTION TYPES ----------
 * Function type declarations throw a warning for unused variables,
 * the next line disables said rule for this file.
 * Both this comment and the next line should be in EVERY file
 * inside the "types" folder where a function type is defined.
 */
/* eslint-disable no-unused-vars */

import { StaticImageData } from "next/image";
import { IconType } from "react-icons/lib";

export type Technology_I = {
	key: string;
	name: string;
	link?: string;
	icon?: string | StaticImageData;
	desc?: string;
};

export type TechnologyCategory_I = {
	key: string;
	name: string;
	techs: Technology_I[];
	icon?: IconType;
	desc?: string;
};

export type TechnologyTree_I = {
	category: TechnologyCategory_I;
	children?: TechnologyTree_I[];
};

export type SelectedTechnology_I = {
	category: TechnologyCategory_I | null;
	tech: Technology_I | null;
};

export type ChangeSelection_I = (category: TechnologyCategory_I | null, tech?: Technology_I | null) => void;
