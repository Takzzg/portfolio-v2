const en = {
	nav: {
		homeLink: "Home",
		antColonyLink: "Ant Colony",
		conwaysLink: "Conway's",
		pathfinding: "Pathfinding",
		sorting: "Sorting",
		languageSwitcher: "Language",
	},
	content: {
		aboutThisPage: {
			title: "About this Page",
			text: [
				"Even though much of the content or components on this page can be found elsewhere, I took it upon myself to try build everything from scratch (within reason). For example, the pathfinding and sorting algorithms were implemented following their respective pseudocodes (more info in the repo README.md)",
				"When it comes to it's design, I tried to take into account and apply best practices and code standards wherever possible (separation of concerns, type safety, error handling, etc...)",
			],
			generalIdea: {
				title: "General Idea",
				text: [
					"This webpage serves two main purposes: as a personal portfolio, and as a playground.",
					"It allows me to show my skills as a web developer, while building something fun.",
				],
			},
			interactiveness: {
				title: "Interactiveness",
				text: [
					"The idea is for this page to be more than just a CV in a different format.",
					"This page will always be evolving, adding new features and changing their presentation. ",
				],
			},
			sourceCode: {
				title: "Source Code",
				text: [
					"This page was developed using Next.js, and is being hosted on vercel",
					"You can check this page's source code here",
				],
			},
		},
	},
};

export type Translation_I = typeof en;

export default en;
