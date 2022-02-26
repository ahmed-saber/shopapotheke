import styles from './githubRepositoriesHolder.module.scss';

import { FunctionComponent } from 'react';

export const GithubRepositoriesHolder: FunctionComponent = ({ children }) => {
	return <div className={styles.container}>{children}</div>;
};
