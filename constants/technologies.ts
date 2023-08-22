import { TechnologyCategory_I, TechnologyTree_I, Technology_I } from "@/types/home/technologies";

// technology Logos

import typescriptLogo from "../public/assets/techs/icons/typescript.svg";
import esLintLogo from "../public/assets/techs/icons/eslint-1.svg";
import prettierLogo from "../public/assets/techs/icons/prettier-2.svg";
import vercelLogo from "../public/assets/techs/icons/vercel-fill-svgrepo-com.svg";
import neonLogo from "../public/assets/techs/icons/neon-icon-seeklogo.com.svg";
import prismaLogo from "../public/assets/techs/icons/prisma-seeklogo.com.svg";
import postgresLogo from "../public/assets/techs/icons/postgres.svg";
import nextjsLogo from "../public/assets/techs/icons/Nextjs-logo.svg";
import sassLogo from "../public/assets/techs/icons/sass-1.svg";
import zustandLogo from "../public/assets/techs/icons/zustand.png";
import nextAuthLogo from "../public/assets/techs/icons/next-auth.png";
import luxonLogo from "../public/assets/techs/icons/Luxon_icon.svg";

// category icons

import { FaCode } from "react-icons/fa";
import { TbCloudComputing } from "react-icons/tb";
import { GrStorage } from "react-icons/gr";
import { HiOutlineServer } from "react-icons/hi";
import { FiMonitor } from "react-icons/fi";
import { BsFillShieldLockFill } from "react-icons/bs";
import { MdOutlineDashboardCustomize } from "react-icons/md";

export const knownTechnologies: { [key: string]: Technology_I } = {
	typescript: {
		key: "TYPESCRIPT_TECH",
		name: "Typescript",
		desc: "",
		link: "",
		icon: typescriptLogo,
	},
	eslint: {
		key: "ESLINT_TECH",
		name: "ESLint",
		desc: "",
		link: "",
		icon: esLintLogo,
	},
	prettier: {
		key: "PRETTIER_TECH",
		name: "Prettier",
		desc: "",
		link: "",
		icon: prettierLogo,
	},
	vercelHosting: {
		key: "VERCEL_HOSTING_TECH",
		name: "Vercel Hosting",
		desc: "",
		link: "",
		icon: vercelLogo,
	},
	vercelDB: {
		key: "VERCEL_DB_TECH",
		name: "Vercel DB",
		desc: "",
		link: "",
		icon: vercelLogo,
	},
	neon: {
		key: "NEON_TECH",
		name: "Neon",
		desc: "",
		link: "",
		icon: neonLogo,
	},
	prisma: {
		key: "PRISMA_TECH",
		name: "Prisma",
		desc: "",
		link: "",
		icon: prismaLogo,
	},
	postgres: {
		key: "POSTGRES_TECH",
		name: "Postgres",
		desc: "",
		link: "",
		icon: postgresLogo,
	},
	nextjs: {
		key: "NEXTJS_TECH",
		name: "Next.js 13",
		desc: "",
		link: "",
		icon: nextjsLogo,
	},
	sass: {
		key: "SASS_TECH",
		name: "Sass",
		desc: "",
		link: "",
		icon: sassLogo,
	},
	zustand: {
		key: "ZUSTAND_TECH",
		name: "Zustand",
		desc: "",
		link: "",
		icon: zustandLogo,
	},
	nextAuth: {
		key: "NEXT_AUTH_TECH",
		name: "Next-Auth + Google",
		desc: "",
		link: "",
		icon: nextAuthLogo,
	},
	luxon: {
		key: "LUXON_TECH",
		name: "Luxon",
		desc: "",
		link: "",
		icon: luxonLogo,
	},
};

const TechnologyCategories: { [key: string]: TechnologyCategory_I } = {
	dev: {
		icon: FaCode,
		key: "DEVELOPMENT_CAT",
		name: "Development",
		techs: [knownTechnologies.typescript, knownTechnologies.eslint, knownTechnologies.prettier],
	},
	hosting: {
		icon: TbCloudComputing,
		key: "HOSTING_CAT",
		name: "Hosting",
		techs: [knownTechnologies.vercelHosting],
	},
	db: {
		icon: GrStorage,
		key: "DATABASES_CAT",
		name: "Databases",
		techs: [knownTechnologies.vercelDB, knownTechnologies.neon],
	},
	back: {
		icon: HiOutlineServer,
		key: "BACKEND_CAT",
		name: "Backend",
		techs: [knownTechnologies.prisma, knownTechnologies.postgres],
	},
	front: {
		icon: FiMonitor,
		key: "FRONTEND_CAT",
		name: "Frontend",
		techs: [knownTechnologies.nextjs, knownTechnologies.sass, knownTechnologies.zustand],
	},
	auth: {
		icon: BsFillShieldLockFill,
		key: "AUTHENTICATION_CAT",
		name: "Authentication",
		techs: [knownTechnologies.nextAuth],
	},
	other: {
		icon: MdOutlineDashboardCustomize,
		key: "OTHERS_CAT",
		name: "Other Libraries",
		techs: [knownTechnologies.luxon],
	},
};

export const usedTechnologies: TechnologyCategory_I[] = [
	TechnologyCategories.dev,
	TechnologyCategories.hosting,
	TechnologyCategories.db,
	TechnologyCategories.back,
	TechnologyCategories.front,
	TechnologyCategories.auth,
	TechnologyCategories.other,
];

export const usedTechnologiesTree: TechnologyTree_I = {
	category: TechnologyCategories.dev,
	children: [
		{
			category: TechnologyCategories.hosting,
			children: [
				{
					category: TechnologyCategories.front,
					children: [{ category: TechnologyCategories.auth }, { category: TechnologyCategories.other }],
				},
				{ category: TechnologyCategories.back },
			],
		},
		{ category: TechnologyCategories.db },
	],
};
