import { Owner } from '../../types/github';

export interface GithubRepositoriesProps {
	stars: number;
	owner: Owner;
	full_name: string;
	html_url: string;
	dateTime: string;
	description?: string | null;
	children: React.ReactNode;
}
