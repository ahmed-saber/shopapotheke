import ReactStars from 'react-stars';
import { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getStars, isStarSet, toggleStar } from '../../services/github';
import { getLastWeeksDate } from '../../services/utils';
import GithubRepositoriesCard from '../../modules/githubRepositoriesCard/githubRepositoriesCard';
import { GithubRepositoriesType } from '../../types/github';
import GithubRepositoriesFilters from '../../modules/githubRepositoriesFilters/githubRepositoriesFilters';
import { GithubRepositoriesHolder } from '../../modules/githubRepositoriesHolder/githubRepositoriesHolder';
import { getGithubRepositoriesAction } from '../../redux/actions/githubRepositories';

export default function GithubRepositoriesCont() {
	const dispatch = useDispatch();

	const [, setStars] = useState<number[]>([]);
	const [filterState, setFilterState] = useState<number>(1);
	const repositories = useSelector((state: { repositories: GithubRepositoriesType }) => state.repositories);

	const startonChangeEvent = useCallback(
		(id: number) => () => {
			toggleStar(id);
			setStars(getStars());
		},
		[]
	);

	const onChangeFilterEvent = useCallback(e => {
		setFilterState(e.target.value);
	}, []);

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
		<GithubRepositoriesHolder>
			{repositories.items && (
				<>
					<GithubRepositoriesFilters onChange={onChangeFilterEvent} />
					{repositories.items
						.filter(repo => (filterState == 2 ? isStarSet(repo.id) : true))
						.map(repo => (
							<GithubRepositoriesCard
								key={repo.id}
								stars={repo.stargazers_count}
								owner={repo.owner}
								html_url={repo.html_url}
								dateTime={repo.created_at}
								full_name={repo.full_name}
								description={repo.description}
							>
								<ReactStars
									half={false}
									size={24}
									count={1}
									value={isStarSet(repo.id) ? 1 : 0}
									color2={'#ffd700'}
									onChange={startonChangeEvent(repo.id)}
								/>
							</GithubRepositoriesCard>
						))}
				</>
			)}
		</GithubRepositoriesHolder>
	);
}
