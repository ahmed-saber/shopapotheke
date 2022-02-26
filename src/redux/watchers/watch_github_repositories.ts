import { call, put, takeLatest } from 'redux-saga/effects';

import { getGithubRepositories } from '../../services/apis/github';
import { GithubRepositoriesPendingActionType } from '../../types/github';
import { GET_GITHUB_REPOSITORIES_ERROR, GET_GITHUB_REPOSITORIES_PENDING, GET_GITHUB_REPOSITORIES_SUCCESS } from '../constants/githubRepositories';

function* getGithubRepositoriesWatcher(action:GithubRepositoriesPendingActionType) {
	try {
		// CALL THE API
		const { data } = yield call(getGithubRepositories, action.payload);
		// FAILED
		if (data.failed) {
			yield put({ type:GET_GITHUB_REPOSITORIES_ERROR, data });
		} else {
			// UPDATE THE DATA
			yield put({
				type: GET_GITHUB_REPOSITORIES_SUCCESS,
				payload: data
			});
		}
	} catch (error) {
		yield put({ type: GET_GITHUB_REPOSITORIES_ERROR});
	}
}

export function* watch_github_repositories() {
	// MAIN
	yield takeLatest(GET_GITHUB_REPOSITORIES_PENDING, getGithubRepositoriesWatcher);
}
