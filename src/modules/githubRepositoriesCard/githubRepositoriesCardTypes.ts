import { Owner } from '../../types/github';

export interface GithubRepositoriesProps {
	owner: Owner;
	full_name: string;
	html_url: string;
	description?: string | null;
	children: React.ReactNode;
}
