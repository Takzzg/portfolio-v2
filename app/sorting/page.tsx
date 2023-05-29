"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Head from "next/head";

import { FaPlay, FaRandom, FaSignal, FaStepForward, FaStop, FaUndo } from "react-icons/fa";

import * as CanvasScript from "../../scripts/canvas/sortingCanvas";
import Algorithms from "../../scripts/sorting/index";

import styles from "./Sorting.module.scss";
import Title from "../../components/Headers/Title";
import Slider from "../../components/Slider/Slider";
import AlgorithmSelect from "../../components/AlgoSelect/AlgoSelect";
import { sortingAlgos } from "../../components/AlgoSelect/algoRefs";
import Button from "../../components/Button/Button";

const Sorting = () => {
	const [itemCount, setItemCount] = useState<number>(20);
	const [maxHeight, setMaxHeight] = useState<number>(100);
	const [animSpeed, setAnimSpeed] = useState<number>(100);

	const [animPlaying, setAnimPlaying] = useState<boolean>(false);
	const animation = useRef<NodeJS.Timer | null>(null);
	const [algoName, setAlgoName] = useState<string>("bubble");

	const runAlgo = useCallback(
		(fn: string) => {
			stopAnimation();
			const script = Algorithms[algoName];
			if (script === undefined) alert("not implemented yet");
			else CanvasScript.run(script[fn]);
		},
		[algoName],
	);

	const animate = useCallback(() => {
		if (animSpeed === 0) runAlgo("sort");
		else if (CanvasScript.checkSolved()) alert("done");
		else {
			const script = Algorithms[algoName];
			if (script === undefined) alert("not implemented yet");
			else {
				setAnimPlaying(true);
				animation.current = setInterval(() => {
					if (!CanvasScript.checkSolved()) CanvasScript.run(script.step);
					else stopAnimation();
				}, animSpeed);
			}
		}
	}, [algoName, animSpeed, runAlgo]);

	useEffect(() => {
		CanvasScript.initCanvas(itemCount, maxHeight);
		window.addEventListener("resize", () => CanvasScript.resizeCanvas());
	}, [itemCount, maxHeight]);

	useEffect(() => {
		stopAnimation();
		CanvasScript.updateValues(itemCount, maxHeight);
	}, [itemCount, maxHeight]);

	useEffect(() => {
		if (animPlaying) {
			stopAnimation();
			animate();
		}
	}, [animSpeed, animPlaying, animate]);

	const stopAnimation = () => {
		setAnimPlaying(false);
		animation.current && clearInterval(animation.current);
	};

	return (
		<>
			<Head>
				<title>Sorting Algorithms</title>
			</Head>

			<div className={styles.mainContainer}>
				<Title>Sorting Algorithms Visualization</Title>

				<div id={styles.canvasMain}>
					<div id={styles.canvasContainer}>
						<canvas id="sortingCanvas" />
					</div>
					<div className={styles.controlsContainer}>
						<div className={styles.slidersContainer}>
							<Slider
								label={"Item Count"}
								min={10}
								max={200}
								step={5}
								value={itemCount}
								onChange={setItemCount}
								onReset={setItemCount}
							/>
							<Slider
								label={"Max Height"}
								symbol="%"
								min={10}
								max={100}
								step={5}
								value={maxHeight}
								onChange={setMaxHeight}
								onReset={setMaxHeight}
							/>
							<Slider
								label={"Animation Speed"}
								symbol="ms"
								min={0}
								max={300}
								step={10}
								value={animSpeed}
								onChange={setAnimSpeed}
								onReset={setAnimSpeed}
							/>
						</div>

						<AlgorithmSelect action={"Sort"} refs={sortingAlgos} postfix="Sort" />

						<div className={styles.actionsContainer}>
							<Button
								span={3}
								value="Shuffle"
								icon={<FaRandom />}
								onClick={() => {
									stopAnimation();
									CanvasScript.shuffleArray();
								}}
								bg="orangered"
							/>
							<Button
								span={3}
								value="Reset"
								icon={<FaUndo />}
								onClick={() => {
									stopAnimation();
									CanvasScript.resetArray();
								}}
								bg="red"
							/>
							<Button
								span={2}
								value="Sort"
								icon={<FaSignal />}
								onClick={() => runAlgo("sort")}
								bg="blue"
							/>
							<Button
								span={2}
								value="Step"
								icon={<FaStepForward />}
								onClick={() => runAlgo("step")}
								bg="royalblue"
							/>
							{animPlaying ? (
								<Button
									span={2}
									value="Stop"
									icon={<FaStop />}
									onClick={() => stopAnimation()}
									bg="red"
								/>
							) : (
								<Button span={2} value="Start" icon={<FaPlay />} onClick={() => animate()} bg="green" />
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Sorting;
