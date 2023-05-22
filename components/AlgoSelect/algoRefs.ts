export interface AlgoRefProps {
	readonly value: string;
}

export const sortingAlgos: AlgoRefProps[] = [
	{ value: "bubble" },
	{ value: "selection" },
	{ value: "insertion" },
	{ value: "quick" },
	{ value: "merge" },
	{ value: "bucket" },
	{ value: "shell" },
	{ value: "heap" },
];

export const pathfindingAlgos: AlgoRefProps[] = [
	{ value: "breadth" },
	{ value: "depth" },
	{ value: "left hand" },
	{ value: "Dijkstra" },
	{ value: "A star" },
];
