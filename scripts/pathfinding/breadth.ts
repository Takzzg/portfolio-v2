import { getNeighbours } from "../canvas/pathfindingCanvas";
import Cell from "./cell";

export interface CellHistory {
	current: { x: number; y: number };
	prev: { x: number; y: number };
}

export const solve = (grid: Cell[][], start: Cell) => {
	let queue: Cell[] = [];
	let history: CellHistory[] = [];

	start.visited = true;
	history.push({
		current: { x: start.x, y: start.y },
		prev: { x: -1, y: -1 },
	});
	queue.push(start);

	while (queue.length) {
		let top = queue.shift() as Cell;

		if (top.type === "end") return { history, path: createPath(history, top) };
		getNeighbours(grid, top.x, top.y).forEach((neigh) => {
			if (neigh.type === "wall" || neigh.visited) return;
			neigh.visited = true;
			queue.push(neigh);
			history.push({
				current: { x: neigh.x, y: neigh.y },
				prev: { x: top.x, y: top.y },
			});
		});
	}
};

const createPath = (history: CellHistory[], end: Cell) => {
	let path: { x: number; y: number }[] = [];
	let step = history.find((obj) => obj.current.x === end.x && obj.current.y === end.y) as CellHistory;

	while (step.prev.x !== -1) {
		path.unshift({ x: step.prev.x, y: step.prev.y });
		step = history.find((obj) => obj.current.x === step.prev.x && obj.current.y === step.prev.y) as CellHistory;
	}

	path.shift();
	return path;
};
