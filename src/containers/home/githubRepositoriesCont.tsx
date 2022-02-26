import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getLastWeeksDate } from '../../services/utils';
import GithubRepositories from '../../modules/githubRepositories/githubRepositories';
import { GithubRepositoriesType } from '../../types/github';
import { getGithubRepositoriesAction } from '../../redux/actions/githubRepositories';

export default function GithubRepositoriesCont() {
	const dispatch = useDispatch();

	const repositories = useSelector((state: { repositories: GithubRepositoriesType }) => state.repositories);

	useEffect(() => {
		const lastWeek = getLastWeeksDate();
		const month = lastWeek.getMonth() < 10 ? `0${lastWeek.getMonth()}` : lastWeek.getMonth();

		dispatch(
			getGithubRepositoriesAction({
				q: `created:>${lastWeek.getFullYear()}-${month}-${lastWeek.getDate()}`,
				sort: 'stars',
				order: 'desc'
			})
		);
	}, [dispatch]);

	return (
		<>
			{repositories &&
				repositories.items &&
				repositories.items.length > 0 &&
				repositories.items.map(repo => <GithubRepositories key={repo.id} />)}
		</>
	);
}
