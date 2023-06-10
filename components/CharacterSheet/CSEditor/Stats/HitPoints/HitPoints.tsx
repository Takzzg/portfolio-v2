"use client";

import React from "react";
import { FaHeart } from "react-icons/fa";

import { CharacterSheet_I, HitPointKey_I, HitPoints_I } from "@/types/csEditor/characterSheet";
import styles from "./HitPoints.module.scss";
import CurrentHP from "./CurrentHP/CurrentHP";
import MaxHP from "./MaxHP/MaxHP";
import PanelTemplate from "../../../PanelTemplate/PanelTemplate";
import { DeepCopy } from "@/scripts/utilities/DeepCopy";
import { useCombinedStore } from "@/zustand/store";

type Props = {};

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
	const editingCS = useCombinedStore((state) => state.cSheets.editingSheet);
	const setEditingCS = useCombinedStore((state) => state.cSheets.setEditingSheet);

	const hitpoints = editingCS?.character.stats.hp;

	if (!hitpoints) return <div>Loading...</div>;

	const setEditingHP = (hp: HitPoints_I) => {
		const editingCopy: CharacterSheet_I = DeepCopy(editingCS);
		editingCopy.character.stats.hp = parseHPValues(hp);
		setEditingCS(editingCopy);
	};

	const updateHPvalue = (key: HitPointKey_I, value: number, temp: boolean) => {
		const hpCopy: HitPoints_I = DeepCopy(hitpoints);
		if (temp) hpCopy.temp[key].value = value;
		else hpCopy[key] = value;
		setEditingHP(hpCopy);
	};

	const toggleTemp = (key: HitPointKey_I) => {
		const hpCopy: HitPoints_I = DeepCopy(hitpoints);
		hpCopy.temp[key].enabled = !hpCopy.temp[key].enabled;
		setEditingHP(hpCopy);
	};

	const toggleTempOverride = () => {
		const hpCopy: HitPoints_I = DeepCopy(hitpoints);
		hpCopy.temp.override = !hpCopy.temp.override;
		setEditingHP(hpCopy);
	};

	const useTempCurrent = hitpoints.temp.override && hitpoints.temp.current.enabled;
	const useTempMax = hitpoints.temp.override && hitpoints.temp.max.enabled;
	const displayMax = useTempMax ? hitpoints.temp.max.value : hitpoints.max;

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
							onChange={() => toggleTemp("current")}
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
							onChange={() => toggleTemp("max")}
						/>
					</span>
				</div>
				<div className={styles.normalValues}>
					<CurrentHP
						current={hitpoints.current}
						max={displayMax}
						disabled={useTempCurrent}
						onIncrease={() => updateHPvalue("current", hitpoints.current + 1, false)}
						onDecrease={() => updateHPvalue("current", hitpoints.current - 1, false)}
					/>
					<MaxHP
						value={hitpoints.max}
						disabled={useTempMax}
						onIncrease={() => updateHPvalue("max", hitpoints.max + 1, false)}
						onDecrease={() => updateHPvalue("max", hitpoints.max - 1, false)}
					/>
				</div>
				<div className={styles.tempValues}>
					<CurrentHP
						current={hitpoints.temp.current.value}
						max={displayMax}
						disabled={!useTempCurrent}
						onIncrease={() => updateHPvalue("current", hitpoints.temp.current.value + 1, true)}
						onDecrease={() => updateHPvalue("current", hitpoints.temp.current.value - 1, true)}
					/>
					<MaxHP
						value={hitpoints.temp.max.value}
						disabled={!useTempMax}
						onIncrease={() => updateHPvalue("max", hitpoints.temp.max.value + 1, true)}
						onDecrease={() => updateHPvalue("max", hitpoints.temp.max.value - 1, true)}
					/>
					<span className={styles.tempOverride}>
						<input
							type="checkbox"
							name="tempOverride"
							id="tempOverride"
							checked={hitpoints.temp.override}
							onChange={toggleTempOverride}
						/>
					</span>
				</div>
			</span>
		</PanelTemplate>
	);
};

export default HitPoints;
