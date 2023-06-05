"use client";

import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";

import { HitPoints_I } from "@/types/csEditor/characterSheet";
import styles from "./HitPoints.module.scss";
import CurrentHP from "./CurrentHP/CurrentHP";
import MaxHP from "./MaxHP/MaxHP";
import PanelTemplate from "../../PanelTemplate/PanelTemplate";

type Props = HitPoints_I;

type HPkeys = "current" | "max";

const parseHPValues = (hp: HitPoints_I): HitPoints_I => {
	const useTempMax = hp.temp.override && hp.temp.max.enabled;
	const displayMax = useTempMax ? hp.temp.max.value : hp.max;

	if (hp.current > displayMax) hp.current = displayMax;
	if (hp.current < -10) hp.current = -10;
	if (hp.temp.current.value > displayMax) hp.temp.current.value = displayMax;
	if (hp.temp.current.value < -10) hp.temp.current.value = -10;

	if (hp.max < 0) hp.max = 0;
	if (hp.temp.max.value < 0) hp.temp.max.value = 0;

	return hp;
};

const HitPoints = (props: Props) => {
	const [hitpoints, setHitpoints] = useState(parseHPValues(props));

	const useTempCurrent = hitpoints.temp.override && hitpoints.temp.current.enabled;
	const useTempMax = hitpoints.temp.override && hitpoints.temp.max.enabled;

	const displayMax = useTempMax ? hitpoints.temp.max.value : hitpoints.max;

	const toggleTempValue = (key: HPkeys) => {
		const hp: HitPoints_I = structuredClone(hitpoints);
		hp.temp[key].enabled = !hp.temp[key].enabled;
		const parsed = parseHPValues(hp);
		setHitpoints(parsed);
	};

	const toggleOverride = () => {
		const hp: HitPoints_I = structuredClone(hitpoints);
		hp.temp.override = !hp.temp.override;
		const parsed = parseHPValues(hp);
		setHitpoints(parsed);
	};

	const modifyValue = (key: HPkeys, value: number) => {
		const hp: HitPoints_I = structuredClone(hitpoints);
		hp[key] = value;
		const parsed = parseHPValues(hp);
		setHitpoints(parsed);
	};

	const modifyTempValue = (key: HPkeys, value: number) => {
		const hp: HitPoints_I = structuredClone(hitpoints);
		hp.temp[key].value = value;
		const parsed = parseHPValues(hp);
		setHitpoints(parsed);
	};

	return (
		<PanelTemplate className={styles.hitpoints} Icon={FaHeart} iconColor="red" title={"Hit Points"}>
			<div className={styles.detailedValues}>--- Detailed Values ---</div>

			<span className={styles.grid}>
				<div className={styles.gridHeaders}>
					<span className={styles.header}>
						Current
						<input
							type="checkbox"
							name="toggleTempCurrent"
							id="toggleTempCurrent"
							disabled={!hitpoints.temp.override}
							className={styles.toggleTempCurrent}
							checked={hitpoints.temp.current.enabled}
							onChange={() => toggleTempValue("current")}
						/>
					</span>
					<span className={styles.header}>
						Max
						<input
							type="checkbox"
							name="toggleTempMax"
							id="toggleTempMax"
							disabled={!hitpoints.temp.override}
							className={styles.toggleTempMax}
							checked={hitpoints.temp.max.enabled}
							onChange={() => toggleTempValue("max")}
						/>
					</span>
				</div>
				<div className={styles.normalValues}>
					<CurrentHP
						current={hitpoints.current}
						max={displayMax}
						disabled={useTempCurrent}
						onIncrease={() => modifyValue("current", hitpoints.current + 1)}
						onDecrease={() => modifyValue("current", hitpoints.current - 1)}
					/>
					<MaxHP
						value={hitpoints.max}
						disabled={useTempMax}
						onIncrease={() => modifyValue("max", hitpoints.max + 1)}
						onDecrease={() => modifyValue("max", hitpoints.max - 1)}
					/>
				</div>
				<div className={styles.tempValues}>
					<CurrentHP
						current={hitpoints.temp.current.value}
						max={displayMax}
						disabled={!useTempCurrent}
						onIncrease={() => modifyTempValue("current", hitpoints.temp.current.value + 1)}
						onDecrease={() => modifyTempValue("current", hitpoints.temp.current.value - 1)}
					/>
					<MaxHP
						value={hitpoints.temp.max.value}
						disabled={!useTempMax}
						onIncrease={() => modifyTempValue("max", hitpoints.temp.max.value + 1)}
						onDecrease={() => modifyTempValue("max", hitpoints.temp.max.value - 1)}
					/>
					<span className={styles.tempOverride}>
						<input
							type="checkbox"
							name="tempOverride"
							id="tempOverride"
							checked={hitpoints.temp.override}
							onChange={toggleOverride}
						/>
					</span>
				</div>
			</span>
		</PanelTemplate>
	);
};

export default HitPoints;
