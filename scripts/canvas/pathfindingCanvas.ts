import * as CommonScripts from "./gridCommons";
import { solve } from "../pathfinding/breadth";
import PathfindingCell from "../pathfinding/cell";

let gridWidth: number;
let gridHeight: number;
let grid: PathfindingCell[][];

interface coords {
	x: number;
	y: number;
}

let startCell: coords;
let endCell: coords;
let checkpoint: coords;

export const initCanvas = (_canvas: HTMLCanvasElement, _width: number, _height: number) => {
	({ gridWidth, gridHeight } = CommonScripts.initCanvas(_canvas, _width, _height, updateBlock));

	clearGrid();
};

export const solveGrid = () => {
	let solution = solve(grid, grid[startCell.x][startCell.y]);
	resetVisited();
	return solution;
};

export const resetVisited = () => {
	for (let x = 0; x < gridWidth; x++)
		for (let y = 0; y < gridHeight; y++) {
			if (grid[x][y].type === "path") grid[x][y].type = "empty";
			grid[x][y].visited = false;
		}

	CommonScripts.drawGrid();
};

// ----- draw grid -----

const resetSpecialCells = () => {
	startCell = { x: 4, y: Math.ceil(gridHeight / 2) };
	endCell = { x: gridWidth - 5, y: Math.ceil(gridHeight / 2) };
	checkpoint = { x: -1, y: -1 };

	grid[startCell.x][startCell.y].type = "start";
	grid[endCell.x][endCell.y].type = "end";
};

export const clearGrid = () => {
	grid = [];

	for (let x = 0; x < gridWidth; x++) {
		grid[x] = [];
		for (let y = 0; y < gridHeight; y++) grid[x][y] = new PathfindingCell(x, y, "empty");
	}

	resetSpecialCells();
	CommonScripts.drawGrid();
};

export const updateBlock = (x: number, y: number, type?: string, visited?: boolean) => {
	if (visited) grid[x][y].visited = visited;
	if (type) grid[x][y].type = type;

	CommonScripts.drawCell(x, y, grid[x][y].color);

	return x === endCell.x && y === endCell.y;
};

// ----- resize -----

export const resizeCanvas = (): void => {
	CommonScripts.resizeCanvas();
	CommonScripts.drawGrid();
};

export const resizeGrid = (_width: number, _height: number) => {
	({ gridWidth, gridHeight } = CommonScripts.resizeGrid(_width, _height));
	clearGrid();
};

// ----- block placement -----

const startCollision = (coords: { index_x: number; index_y: number }) =>
	coords.index_x === startCell.x && coords.index_y === startCell.y;

const endCollision = (coords: { index_x: number; index_y: number }) =>
	coords.index_x === endCell.x && coords.index_y === endCell.y;

const checkpointCollision = (coords: { index_x: number; index_y: number }) =>
	coords.index_x === checkpoint.x && coords.index_y === checkpoint.y;

export const placeBlock = (event: React.MouseEvent<HTMLCanvasElement>, selectedBlock: string) => {
	let clickCoords = CommonScripts.getCoords(event);

	if (!clickCoords || startCollision(clickCoords) || endCollision(clickCoords)) return;

	resetVisited();
	if (checkpointCollision(clickCoords)) checkpoint = { x: -1, y: -1 };

	switch (selectedBlock) {
		case "start":
			grid[startCell.x][startCell.y].type = "empty";
			updateBlock(startCell.x, startCell.y);
			startCell = {
				x: clickCoords.index_x,
				y: clickCoords.index_y,
			};
			grid[startCell.x][startCell.y].type = "start";
			updateBlock(startCell.x, startCell.y);
			break;

		case "end":
			grid[endCell.x][endCell.y].type = "empty";
			updateBlock(endCell.x, endCell.y);
			endCell = {
				x: clickCoords.index_x,
				y: clickCoords.index_y,
			};
			grid[endCell.x][endCell.y].type = "end";
			updateBlock(endCell.x, endCell.y);
			break;

		case "checkpoint":
			if (checkpoint.x !== -1) {
				grid[checkpoint.x][checkpoint.y].type = "empty";
				updateBlock(checkpoint.x, checkpoint.y);
			}
			checkpoint = {
				x: clickCoords.index_x,
				y: clickCoords.index_y,
			};
			grid[checkpoint.x][checkpoint.y].type = "checkpoint";
			updateBlock(checkpoint.x, checkpoint.y);
			break;

		default:
			let lastMousePos = CommonScripts.getlastMousePos();
			grid[clickCoords.index_x][clickCoords.index_y].type = selectedBlock;
			if (lastMousePos.x !== -1) drawLine(clickCoords.index_x, clickCoords.index_y, selectedBlock);
			else updateBlock(clickCoords.index_x, clickCoords.index_y);
			break;
	}
};

const drawLine = (x: number, y: number, selectedBlock: string) => {
	CommonScripts.getLine(x, y).forEach((point) => {
		grid[point.x][point.y].type = selectedBlock;
		updateBlock(point.x, point.y);
	});
};

// ----- maze generation -----

export const generateMaze = () => {
	let _grid: PathfindingCell[][];
	_grid = [];

	for (let x = 0; x < gridWidth; x++) {
		_grid[x] = [];
		for (let y = 0; y < gridHeight; y++) _grid[x][y] = new PathfindingCell(x, y, "wall");
	}

	grid = [...recursiveBacktracking(_grid, Math.floor(gridWidth / 2), Math.floor(gridHeight / 2))];

	resetSpecialCells();

	for (let x = 0; x < gridWidth; x++) for (let y = 0; y < gridHeight; y++) grid[x][y].visited = false;

	CommonScripts.drawGrid();
};

const recursiveBacktracking = (
	_grid: PathfindingCell[][],
	x: number,
	y: number,
	neighbours: PathfindingCell[] = [],
) => {
	if (_grid[x][y].type !== "start" && _grid[x][y].type !== "end") _grid[x][y].type = "empty";
	_grid[x][y].visited = true;

	neighbours.push(...getNeighbours(_grid, x, y));

	let randN: PathfindingCell;
	let randI = -1;

	while (neighbours.length) {
		randI = Math.floor(Math.random() * neighbours.length);
		randN = neighbours[randI];
		let visitedN = 0;

		getNeighbours(_grid, randN.x, randN.y).forEach((neigh) => {
			if (neigh.visited) visitedN++;
		});
		neighbours.splice(randI, 1);
		if (visitedN < 2 && Math.random() < 0.666) recursiveBacktracking(_grid, randN.x, randN.y, neighbours);
	}

	return _grid;
};

export const getNeighbours = (_grid: PathfindingCell[][], x: number, y: number) => {
	let neighbours: PathfindingCell[] = [];

	if (x - 1 >= 0) neighbours.push(_grid[x - 1][y]);
	if (x + 1 < gridWidth) neighbours.push(_grid[x + 1][y]);
	if (y - 1 >= 0) neighbours.push(_grid[x][y - 1]);
	if (y + 1 < gridHeight) neighbours.push(_grid[x][y + 1]);

	return neighbours;
};
