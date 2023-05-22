import styles from "./Footer.module.scss";

interface Props {}

const Footer = (props: Props) => {
	return (
		<div className={styles.footer}>
			<div className={styles.technologies}>
				This project was created using:
				<div className={styles.techIcons}>Next.js Typescript Sass React-icons</div>
			</div>
			<div className={styles.linkContainer}>
				Check out the source code{" "}
				<span className={styles.repoLink}>
					<a target={"_blank"} rel={"noreferrer"} href={"https://github.com/Takzzg/portfolio"}>
						here
					</a>
				</span>
			</div>
		</div>
	);
};

export default Footer;
