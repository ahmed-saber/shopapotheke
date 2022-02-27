import styles from './githubRepositoriesFilters.module.scss';

import { GithubRepositoriesFiltersProps } from './githubRepositoriesFiltersTypes';

export default function GithubRepositoriesFilters(props: GithubRepositoriesFiltersProps) {
	return (
		<div className={styles.container}>
			<select className={styles.select} onChange={props.onChangeFilter}>
				<option value={1}>All</option>
				<option value={2}>Stars</option>
			</select>
			<select className={styles.select} onChange={props.onChangeDays}>
				<option value={7}>Last 7 days</option>
				<option value={10}>Last 10 days</option>
				<option value={20}>Last 20 days</option>
				<option value={30}>Last 30 days</option>
			</select>
		</div>
	);
}
