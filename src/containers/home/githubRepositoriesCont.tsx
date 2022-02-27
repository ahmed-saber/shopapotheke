import ReactStars from 'react-stars';
import { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getStars, isStarSet, toggleStar } from '../../services/github';
import { getDateFormated, getDateFromToday } from '../../services/utils';
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

	const onChangeDaysEvent = useCallback(
		e => {
			dispatch(
				getGithubRepositoriesAction({
					q: `created:>${getDateFormated(getDateFromToday(parseInt(e.target.value)))}`,
					sort: 'stars',
					order: 'desc'
				})
			);
		},
		[dispatch]
	);

	useEffect(() => {
		dispatch(
			getGithubRepositoriesAction({
				q: `created:>${getDateFormated(getDateFromToday(7))}`,
				sort: 'stars',
				order: 'desc'
			})
		);
	}, [dispatch]);

	return (
		<GithubRepositoriesHolder>
			{repositories.items && (
				<>
					<GithubRepositoriesFilters onChangeDays={onChangeDaysEvent} onChangeFilter={onChangeFilterEvent} />
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
