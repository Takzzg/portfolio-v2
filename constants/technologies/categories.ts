import { TechnologyCategory_I, TechnologyTree_I } from "@/types/home/technologies";

// import categories

import Tech_Cat_Dev from "./tech_cats/dev";
import Tech_Cat_Hosting from "./tech_cats/hosting";
import Tech_Cat_DB from "./tech_cats/db";
import Tech_Cat_Back from "./tech_cats/back";
import Tech_Cat_Front from "./tech_cats/front";
import Tech_Cat_Auth from "./tech_cats/auth";
import Tech_Cat_Others from "./tech_cats/others";

// rename for ease of use (this file only)

const categories: { [key: string]: TechnologyCategory_I } = {
	dev: Tech_Cat_Dev,
	hosting: Tech_Cat_Hosting,
	db: Tech_Cat_DB,
	back: Tech_Cat_Back,
	front: Tech_Cat_Front,
	auth: Tech_Cat_Auth,
	other: Tech_Cat_Others,
};

// sidebar list

export const TechCategoryList: TechnologyCategory_I[] = [
	categories.dev,
	categories.hosting,
	categories.db,
	categories.back,
	categories.front,
	categories.auth,
	categories.other,
];

// Tree heirarchy

export const TechnologiesTree: TechnologyTree_I = {
	category: categories.dev,
	children: [
		{
			category: categories.hosting,
			children: [
				{
					category: categories.front,
					children: [{ category: categories.auth }, { category: categories.other }],
				},
				{ category: categories.back },
			],
		},
		{ category: categories.db },
	],
};
