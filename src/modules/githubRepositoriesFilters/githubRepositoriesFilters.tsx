import styles from './githubRepositoriesFilters.module.scss';

import { GithubRepositoriesFiltersProps } from './githubRepositoriesFiltersTypes';

export default function GithubRepositoriesFilters(props: GithubRepositoriesFiltersProps) {
	return (
		<div className={styles.container}>
			<div className={styles.label}>Filter:</div>
			<select className={styles.select} onChange={props.onChange}>
				<option value={1}>All</option>
				<option value={2}>Stars</option>
			</select>
		</div>
	);
}
