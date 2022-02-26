import { all } from 'redux-saga/effects';
import { watch_github_repositories } from '../watchers/watch_github_repositories';

export default function* homeSaga() {
	yield all([watch_github_repositories()]);
}
