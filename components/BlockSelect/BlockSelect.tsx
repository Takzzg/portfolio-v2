import { Dispatch, ReactNode, SetStateAction } from "react";
import Button from "../Button/Button";
import styles from "./BlockSelect.module.scss";

interface Props {
	selectedBlock: string;
	options: { value: string; icon: ReactNode; bg: string; color?: string }[];
	onClick: Dispatch<SetStateAction<string>>;
}

const BlockSelect = ({ selectedBlock, onClick, options }: Props) => {
	return (
		<div className={styles.palette}>
			<div className={styles.blocksContainer}>
				{options.map((opt) => (
					<Button
						key={opt.value}
						onClick={() => onClick(opt.value.toLowerCase())}
						value={opt.value}
						icon={opt.icon}
						bg={selectedBlock === opt.value.toLowerCase() ? opt.bg : "inherit"}
						color={selectedBlock === opt.value.toLowerCase() ? opt.color || "white" : "white"}
					/>
				))}
			</div>
		</div>
	);
};

export default BlockSelect;
