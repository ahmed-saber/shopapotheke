import { AxiosPromise } from 'axios';

import { get } from './apiHandler';
import { GithubRepositoriesType, GithubRepositoriesParamsType } from '../../types/github';

export function getGithubRepositories(params: GithubRepositoriesParamsType): AxiosPromise<GithubRepositoriesType> {
	const URL = 'https://api.github.com/search/repositories';
	return get(URL, params, {});
}
