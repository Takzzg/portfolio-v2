import React, { useEffect, useMemo, useRef, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { HitPoints_I } from "@/types/csEditor/characterSheet";
import styles from "./HitPoints.module.scss";

type Props = HitPoints_I;

type hpKeys = "current" | "max";

const HitPoints = (props: Props) => {
	const [hitpoints, setHitpoints] = useState(props);
	const maxValueUsed = () => {
		if (hitpoints.temp.override) return hitpoints.max;
		if (hitpoints.temp.max.enabled) return hitpoints.temp.max.value;
		return hitpoints.max;
	};

	const toggleTempValue = (key: hpKeys) => {
		const hp = { ...hitpoints };
		hp.temp[key].enabled = !hp.temp[key].enabled;
		setHitpoints(hp);
	};

	const toggleOverride = () => {
		const hp = { ...hitpoints };
		hp.temp.override = !hp.temp.override;
		setHitpoints(hp);
	};

	const modifyValue = (key: hpKeys, value: number) => {
		const hp = { ...hitpoints };
		hp[key] = value;
		setHitpoints(hp);
	};

	const modifyTempValue = (key: hpKeys, value: number) => {
		const hp = { ...hitpoints };
		hp.temp[key].value = value;
		setHitpoints(hp);
	};

	return (
		<div className={styles.hitpoints}>
			<div className={styles.title}>
				<div className={styles.icon}>
					<FaHeart />
				</div>
				Hit Points
			</div>

			<div className={styles.detailedValues}>explained values</div>

			<div className={styles.normalValues}>
				<div className={styles.current}>
					<button onClick={() => modifyValue("current", hitpoints.current + 1)}>+</button>
					{hitpoints.current} / {maxValueUsed()}
					<button onClick={() => modifyValue("current", hitpoints.current - 1)}>-</button>
				</div>

				<div className={styles.max}>
					<button onClick={() => modifyValue("max", hitpoints.max + 1)}>+</button>
					{hitpoints.max}
					<button onClick={() => modifyValue("max", hitpoints.max - 1)}>-</button>
				</div>
			</div>

			<div className={styles.tempValues}>
				<button onClick={toggleOverride}>override</button> {`${hitpoints.temp.override}`}
				<div className={styles.current}>
					<button onClick={() => toggleTempValue("current")}>enabled</button>
					{`${hitpoints.temp.current.enabled}`}
					<button onClick={() => modifyTempValue("current", hitpoints.temp.current.value + 1)}>+</button>
					{hitpoints.temp.current.value} / {maxValueUsed()}
					<button onClick={() => modifyTempValue("current", hitpoints.temp.current.value - 1)}>-</button>
				</div>
				<div className={styles.max}>
					<button onClick={() => toggleTempValue("max")}>enabled</button>
					{`${hitpoints.temp.max.enabled}`}
					<button onClick={() => modifyTempValue("max", hitpoints.temp.max.value + 1)}>+</button>
					{hitpoints.temp.max.value}
					<button onClick={() => modifyTempValue("max", hitpoints.temp.max.value - 1)}>-</button>
				</div>
			</div>
		</div>
	);
};

export default HitPoints;
