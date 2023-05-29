"use client";

import Head from "next/head";
import { useCallback, useEffect, useRef, useState } from "react";
import {
	FaCheck,
	FaEraser,
	FaFlag,
	FaFlagCheckered,
	FaPlay,
	FaRandom,
	FaRedo,
	FaRegFlag,
	FaRegSquare,
	FaStop,
} from "react-icons/fa";

import styles from "./Pathfinding.module.scss";
import * as PathfindingScript from "../../scripts/canvas/pathfindingCanvas";
import * as CommonScripts from "../../scripts/canvas/gridCommons";
import { CellHistory } from "../../scripts/pathfinding/breadth";
import Title from "../../components/Headers/Title";
import AlgorithmSelect from "../../components/AlgoSelect/AlgoSelect";
import Button from "../../components/Button/Button";
import { pathfindingAlgos } from "../../components/AlgoSelect/algoRefs";
import Slider from "../../components/Slider/Slider";
import BlockSelect from "../../components/BlockSelect/BlockSelect";

interface solution {
	history: CellHistory[];
	path: { x: number; y: number }[];
}

const Pathfinding = () => {
	const canvas = useRef<HTMLCanvasElement>(null);
	const solution = useRef<solution | undefined>(undefined);
	const animation = useRef<NodeJS.Timer | null>(null);

	const [animPlaying, setAnimPlaying] = useState(false);
	const [width, Setwidth] = useState(64);
	const [height, setHeight] = useState(36);
	// TODO: show grid checkbox bugged
	const [showGrid, setShowGrid] = useState(true);
	const [selectedBlock, setSelectedBlock] = useState("start");
	const [painting, setPainting] = useState(false);

	const resetSolution = useCallback(() => {
		stopAnim();
		solution.current = undefined;
	}, []);

	useEffect(() => {
		PathfindingScript.initCanvas(canvas.current!, width, height);
		window.onresize = PathfindingScript.resizeCanvas;

		return () => {
			stopAnim();
			resetSolution();
			window.onresize = null;
		};
	}, [width, height, resetSolution]);

	useEffect(() => {
		stopAnim();
		resetSolution();
		PathfindingScript.resizeGrid(width, height);
	}, [width, height, resetSolution]);

	const options = [
		{ value: "Start", icon: <FaRegFlag />, bg: "green" },
		{ value: "Checkpoint", icon: <FaFlagCheckered />, bg: "blue" },
		{ value: "End", icon: <FaFlag />, bg: "red" },
		{ value: "Wall", icon: <FaRegSquare />, bg: "darkslategray" },
		{ value: "Empty", icon: <FaEraser />, bg: "white", color: "black" },
	];

	const animate = () => {
		if (!solution.current) solution.current = PathfindingScript.solveGrid();
		if (!solution.current) return alert("Maze has no solution");

		setAnimPlaying(true);
		animation.current = setInterval(() => {
			if (solution.current?.history.length) {
				let next = solution.current.history.shift()?.current as {
					x: number;
					y: number;
				};
				if (PathfindingScript.updateBlock(next.x, next.y, undefined, true)) solution.current.history = [];
				return;
			} else if (solution.current?.path.length) {
				let next = solution.current?.path.shift() as {
					x: number;
					y: number;
				};
				PathfindingScript.updateBlock(next.x, next.y, "path");
				return;
			} else resetSolution();
		}, 25);
	};

	const stopAnim = () => {
		setAnimPlaying(false);
		animation.current && clearInterval(animation.current);
	};

	const solve = () => {
		solution.current = PathfindingScript.solveGrid();
		while (solution.current?.history.length) {
			let next = solution.current.history.shift()?.current as {
				x: number;
				y: number;
			};
			if (PathfindingScript.updateBlock(next.x, next.y, undefined, true)) solution.current.history = [];
		}
		while (solution.current?.path.length) {
			let next = solution.current?.path.shift() as {
				x: number;
				y: number;
			};
			PathfindingScript.updateBlock(next.x, next.y, "path");
		}
	};

	return (
		<>
			<Head>
				<title>Pathfinding Algorithms</title>
			</Head>

			<div className={styles.mainContainer}>
				<Title>Pathfinding Algorithms Visualization</Title>

				<div id={styles.canvasMain}>
					<div className={styles.toolbarTop}>
						<AlgorithmSelect action={"Generate Maze"} refs={pathfindingAlgos} flexDir="column" />
						<Button
							value="Randomize"
							icon={<FaRandom />}
							onClick={() => {
								resetSolution();
								while (!solution.current) {
									PathfindingScript.generateMaze();
									solution.current = PathfindingScript.solveGrid();
								}
							}}
							bg={"orange"}
						/>
						<Button
							value="Reset"
							icon={<FaRedo />}
							onClick={() => {
								resetSolution();
								PathfindingScript.clearGrid();
							}}
							bg={"red"}
						/>
						<div
							className={styles.checkboxContainer}
							onClick={() => {
								setShowGrid(!showGrid);
								CommonScripts.toggleGrid();
							}}
						>
							<input type="checkbox" name="ShowGrid" id="showGrid" defaultChecked={showGrid} />
							<label>Show Grid</label>
						</div>
						<Slider
							label={"width"}
							min={20}
							max={100}
							step={1}
							value={width}
							onChange={Setwidth}
							onReset={Setwidth}
						/>
						<Slider
							label={"height"}
							min={10}
							max={50}
							step={1}
							value={height}
							onChange={setHeight}
							onReset={setHeight}
						/>
					</div>
					<div id={styles.canvasContainer}>
						<canvas
							ref={canvas}
							onMouseDown={(event) => {
								stopAnim();
								resetSolution();
								setPainting(true);
								PathfindingScript.placeBlock(event, selectedBlock);
								CommonScripts.setLastMousePos(event);
							}}
							onMouseUp={() => {
								setPainting(false);
								CommonScripts.resetLastMousePos();
								solution.current = PathfindingScript.solveGrid();
							}}
							onMouseLeave={() => {
								setPainting(false);
								CommonScripts.resetLastMousePos();
							}}
							onMouseMove={(event) => {
								if (painting) {
									PathfindingScript.placeBlock(event, selectedBlock);
									CommonScripts.setLastMousePos(event);
								}
							}}
						/>
					</div>
					<div className={styles.toolbarBottom}>
						<div className={styles.algoControls}>
							<AlgorithmSelect action={"Solve"} refs={pathfindingAlgos} flexDir="column" />
							<Button
								value="Clear"
								icon={<FaEraser />}
								onClick={() => {
									resetSolution();
									PathfindingScript.resetVisited();
								}}
								bg={"orangered"}
							/>
							<Button
								value="Solve"
								icon={<FaCheck />}
								onClick={() => {
									if (!solution.current) solution.current = PathfindingScript.solveGrid();
									if (!solution.current) return alert("Maze has no solution");
									resetSolution();
									PathfindingScript.resetVisited();
									solve();
								}}
								bg={"blue"}
							/>
							{animPlaying ? (
								<Button value="Stop" icon={<FaStop />} onClick={stopAnim} bg={"red"} />
							) : (
								<Button value="Animate" icon={<FaPlay />} onClick={animate} bg={"green"} />
							)}
						</div>
						<BlockSelect selectedBlock={selectedBlock} onClick={setSelectedBlock} options={options} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Pathfinding;
