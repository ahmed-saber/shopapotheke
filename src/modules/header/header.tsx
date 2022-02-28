import styles from './header.module.scss';

export default function Header() {
	return (
		<header>
			<h1 className={styles.header}>GitHub popular repositories</h1>
		</header>
	);
}
