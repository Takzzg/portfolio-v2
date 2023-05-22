import ConwaysCell from "../conways/cell";
import { step } from "../conways/conways";
import * as CommonScripts from "./gridCommons";

let gridWidth: number;
let gridHeight: number;
let grid: ConwaysCell[][];

// ----- init canvas -----

export const initCanvas = (_canvas: HTMLCanvasElement, _width: number, _height: number) => {
	({ gridWidth, gridHeight } = CommonScripts.initCanvas(_canvas, _width, _height, setCell));
	clearGrid();
};

export const drawNextGen = () => {
	grid = step(grid);
	CommonScripts.drawGrid();
};

export const isDead = () => {
	for (let x = 0; x < gridWidth; x++) {
		for (let y = 0; y < gridHeight; y++) if (grid[x][y].state === "alive") return false;
	}
	return true;
};

// ----- drawing -----

export const clearGrid = () => {
	grid = [];

	for (let x = 0; x < gridWidth; x++) {
		grid[x] = [];
		for (let y = 0; y < gridHeight; y++) grid[x][y] = new ConwaysCell(x, y, "dead");
	}

	CommonScripts.drawGrid();
};

const updateBlock = (x: number, y: number) => {
	let color = grid[x][y].state === "alive" ? "black" : "white";
	CommonScripts.drawCell(x, y, color);
};

export const getCellState = (x: number, y: number) => grid[x][y].state;

export const toggleCell = (x: number, y: number) => {
	grid[x][y].state = grid[x][y].state === "alive" ? "dead" : "alive";

	let state = grid[x][y].state;
	let lastMousePos = CommonScripts.getlastMousePos();

	if (lastMousePos.x !== -1) drawLine(x, y, state);
	else updateBlock(x, y);
};
export const setCell = (x: number, y: number) => {
	let state = grid[x][y].state;
	let lastMousePos = CommonScripts.getlastMousePos();

	if (lastMousePos.x !== -1) drawLine(x, y, state);
	else updateBlock(x, y);
};

export const drawLine = (x: number, y: number, state: "alive" | "dead") => {
	CommonScripts.getLine(x, y).forEach((point) => {
		grid[point.x][point.y].state = state;
		updateBlock(point.x, point.y);
	});
};

// ----- resizing -----

export const resizeCanvas = (): void => {
	CommonScripts.resizeCanvas();
	CommonScripts.drawGrid();
};

export const resizeGrid = (_width: number, _height: number) => {
	({ gridWidth, gridHeight } = CommonScripts.resizeGrid(_width, _height));
	clearGrid();
};
