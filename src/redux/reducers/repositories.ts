import { GET_GITHUB_REPOSITORIES_SUCCESS } from '../constants/githubRepositories';

import { GithubRepositoriesType, GithubRepositoriesSuccessActionType } from '../../types/github';

export const repositories = (state: GithubRepositoriesType, action: GithubRepositoriesSuccessActionType) => {
	switch (action?.type) {
		case GET_GITHUB_REPOSITORIES_SUCCESS:
			return {
				...state,
				...action.payload
			};
		default:
			return {
				items: [],
				total_count: 0,
				incomplete_results: false
			};
	}
};
