"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { FaPlay, FaRedo, FaStepForward, FaStop } from "react-icons/fa";

import styles from "./Conways.module.scss";
import * as ConwaysScript from "../../scripts/canvas/conwaysCanvas";
import * as CommonScripts from "../../scripts/canvas/gridCommons";
import Head from "next/head";
import Button from "../../components/Button/Button";
import Slider from "../../components/Slider/Slider";
import Title from "../../components/Headers/Title";

const Page = () => {
	const canvas = useRef<HTMLCanvasElement>(null);
	const animation = useRef<NodeJS.Timer | null>(null);

	const [animSpeed, setAnimSpeed] = useState(100);
	const [animPlaying, setAnimPlaying] = useState(false);
	const [width, Setwidth] = useState(64);
	const [height, setHeight] = useState(36);
	const [showGrid, setShowGrid] = useState(true);
	const [painting, setPainting] = useState(false);
	const [selectedState, setSelectedState] = useState<"alive" | "dead" | null>(null);

	const animate = useCallback(() => {
		setAnimPlaying(true);
		animation.current = setInterval(() => {
			ConwaysScript.drawNextGen();
			if (ConwaysScript.isDead()) {
				stopAnim();
				alert("There are no live cells left");
			}
		}, animSpeed);
	}, [animSpeed]);

	useEffect(() => {
		ConwaysScript.initCanvas(canvas.current!, width, height);
		window.onresize = ConwaysScript.resizeCanvas;

		return () => {
			stopAnim();
			window.onresize = null;
		};
	}, [width, height]);

	useEffect(() => {
		if (animPlaying) {
			stopAnim();
			animate();
		}
	}, [animSpeed, animPlaying, animate]);

	useEffect(() => {
		stopAnim();
		ConwaysScript.resizeGrid(width, height);
	}, [width, height]);

	const step = () => {
		ConwaysScript.drawNextGen();
	};

	const stopAnim = () => {
		setAnimPlaying(false);
		animation.current && clearInterval(animation.current);
	};

	return (
		<>
			<Head>
				<title>Conway&apos;s Game of Life</title>
			</Head>

			<div className={styles.mainContainer}>
				<Title>Conway&apos;s Game of Life</Title>

				<div id={styles.canvasMain}>
					<div className={styles.toolbarTop}>
						<Button
							value="Reset"
							icon={<FaRedo />}
							onClick={() => {
								ConwaysScript.clearGrid();
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
								let clickCoords = CommonScripts.getCoords(event);
								if (!clickCoords) return;
								setPainting(true);
								ConwaysScript.toggleCell(clickCoords.index_x, clickCoords.index_y);
								setSelectedState(ConwaysScript.getCellState(clickCoords.index_x, clickCoords.index_y));
								CommonScripts.setLastMousePos(event);
							}}
							onMouseUp={() => {
								setPainting(false);
								CommonScripts.resetLastMousePos();
								setSelectedState(null);
							}}
							onMouseLeave={() => {
								setPainting(false);
								CommonScripts.resetLastMousePos();
								setSelectedState(null);
							}}
							onMouseMove={(event) => {
								if (painting) {
									let clickCoords = CommonScripts.getCoords(event);
									if (!clickCoords) return;
									ConwaysScript.drawLine(
										clickCoords.index_x,
										clickCoords.index_y,
										selectedState as "alive" | "dead",
									);
									CommonScripts.setLastMousePos(event);
								}
							}}
						/>
					</div>
					<div className={styles.toolbarBottom}>
						{/* TODO: button Step does not pause sim */}
						<Button span={2} value="Step" icon={<FaStepForward />} onClick={step} bg="royalblue" />
						{animPlaying ? (
							<Button value="Stop" icon={<FaStop />} onClick={stopAnim} bg={"red"} />
						) : (
							<Button value="Animate" icon={<FaPlay />} onClick={animate} bg={"green"} />
						)}
						<Slider
							label={"Animation Speed"}
							symbol="ms"
							min={40}
							max={300}
							step={10}
							value={animSpeed}
							onChange={setAnimSpeed}
							onReset={setAnimSpeed}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
