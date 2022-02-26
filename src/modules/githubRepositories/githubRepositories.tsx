import styles from './githubRepositories.module.scss';

import { GithubRepositoriesProps } from './githubRepositoriesTypes';

export default function GithubRepositories(props: GithubRepositoriesProps) {
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
