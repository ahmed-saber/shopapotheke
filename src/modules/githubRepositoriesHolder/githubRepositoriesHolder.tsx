import styles from './githubRepositoriesHolder.module.scss';

import { FunctionComponent } from 'react';

export const GithubRepositoriesHolder: FunctionComponent = ({ children }) => {
	return <section className={styles.container}>{children}</section>;
};
