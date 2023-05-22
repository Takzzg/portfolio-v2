import ConwaysCell from "./cell";

export const step = (grid: ConwaysCell[][]) => {
	let width = grid.length;
	let height = grid[0].length;

	let nextGen: ConwaysCell[][];
	nextGen = [];

	for (let x = 0; x < width; x++) {
		nextGen[x] = [];
		for (let y = 0; y < height; y++) {
			let neighbours = getNeighbours(grid, x, y);
			let newState: "alive" | "dead" = getNewState(grid[x][y].state, neighbours);
			nextGen[x][y] = new ConwaysCell(x, y, newState);
		}
	}

	return nextGen;
};

const getNewState = (state: "alive" | "dead", neighbours: number) => {
	if (state === "alive" && (neighbours === 2 || neighbours === 3)) return "alive";
	if (state === "dead" && neighbours === 3) return "alive";
	return "dead";
};

const getNeighbours = (grid: ConwaysCell[][], index_x: number, index_y: number) => {
	let width = grid.length;
	let height = grid[0].length;
	let aliveCount = 0;

	for (let x = -1; x < 2; x++) {
		for (let y = -1; y < 2; y++) {
			if (x === 0 && y === 0) continue;
			if (grid[(width + index_x + x) % width][(height + index_y + y) % height].state === "alive") aliveCount++;
		}
	}
	return aliveCount;
};
