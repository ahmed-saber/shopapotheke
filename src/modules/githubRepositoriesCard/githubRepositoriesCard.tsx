import styles from './githubRepositoriesCard.module.scss';

import { GithubRepositoriesProps } from './githubRepositoriesCardTypes';

export default function GithubRepositoriesCard(props: GithubRepositoriesProps) {
	return (
		<div className={styles.card}>
			<a rel="noreferrer" href={props.html_url} className={styles.avatarLink} target="_blank">
				<img src={props.owner.avatar_url} alt="Avatar" className={styles.avatar} />
			</a>
			<div className={styles.container}>
				<h4>{props.full_name}</h4>
				<p>{props.description}</p>
			</div>
		</div>
	);
}
