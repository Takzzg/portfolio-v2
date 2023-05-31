import CSManager from "../../components/CharacterSheet/CSManager/CSManager";
import CSEditor from "../../components/CharacterSheet/CSEditor/CSEditor";
import styles from "./CharacterSheets.module.scss";

type Props = {};

const CharacterSheets = async (props: Props) => {
	return (
		<div className={styles.characterSheets}>
			<CSManager />
			<CSEditor />
		</div>
	);
};

export default CharacterSheets;
