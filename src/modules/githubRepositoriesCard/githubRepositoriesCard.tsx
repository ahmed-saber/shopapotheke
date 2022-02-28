import styles from './githubRepositoriesCard.module.scss';

import { GithubRepositoriesProps } from './githubRepositoriesCardTypes';

export default function GithubRepositoriesCard(props: GithubRepositoriesProps) {
	return (
		<article className={styles.card}>
			<a rel="noreferrer" href={props.html_url} className={styles.avatarLink} target="_blank">
				<img src={props.owner.avatar_url} alt="Avatar" className={styles.avatar} />
			</a>
			<div className={styles.container}>
				<h4 className={styles.title}>{props.full_name}</h4>
				<p className={styles.description}>{props.description}</p>
			</div>
			<div className={styles.stars}>
				{props.children}
				<br />
				{props.stars}
			</div>
			<time dateTime={props.dateTime} className={styles.date}>
				{props.dateTime}
			</time>
		</article>
	);
}
