export interface GithubRepositoriesType {
	total_count: number;
	incomplete_results: boolean;
	items?: ItemsEntity[] | null;
}

interface ItemsEntity {
	id: number;
	node_id: string;
	name: string;
	full_name: string;
	private: boolean;
	owner: Owner;
	html_url: string;
	description?: string | null;
	fork: boolean;
	url: string;
	forks_url: string;
	keys_url: string;
	collaborators_url: string;
	teams_url: string;
	hooks_url: string;
	issue_events_url: string;
	events_url: string;
	assignees_url: string;
	branches_url: string;
	tags_url: string;
	blobs_url: string;
	git_tags_url: string;
	git_refs_url: string;
	trees_url: string;
	statuses_url: string;
	languages_url: string;
	stargazers_url: string;
	contributors_url: string;
	subscribers_url: string;
	subscription_url: string;
	commits_url: string;
	git_commits_url: string;
	comments_url: string;
	issue_comment_url: string;
	contents_url: string;
	compare_url: string;
	merges_url: string;
	archive_url: string;
	downloads_url: string;
	issues_url: string;
	pulls_url: string;
	milestones_url: string;
	notifications_url: string;
	labels_url: string;
	releases_url: string;
	deployments_url: string;
	created_at: string;
	updated_at: string;
	pushed_at: string;
	git_url: string;
	ssh_url: string;
	clone_url: string;
	svn_url: string;
	homepage?: string | null;
	size: number;
	stargazers_count: number;
	watchers_count: number;
	language?: string | null;
	has_issues: boolean;
	has_projects: boolean;
	has_downloads: boolean;
	has_wiki: boolean;
	has_pages: boolean;
	forks_count: number;
	mirror_url?: null;
	archived: boolean;
	disabled: boolean;
	open_issues_count: number;
	license?: License | null;
	allow_forking: boolean;
	is_template: boolean;
	topics?: (string | null)[] | null;
	visibility: string;
	forks: number;
	open_issues: number;
	watchers: number;
	default_branch: string;
	score: number;
}

interface Owner {
	login: string;
	id: number;
	node_id: string;
	avatar_url: string;
	gravatar_id: string;
	url: string;
	html_url: string;
	followers_url: string;
	following_url: string;
	gists_url: string;
	starred_url: string;
	subscriptions_url: string;
	organizations_url: string;
	repos_url: string;
	events_url: string;
	received_events_url: string;
	type: string;
	site_admin: boolean;
}

interface License {
	key: string;
	name: string;
	spdx_id: string;
	url?: string | null;
	node_id: string;
}

export interface GithubRepositoriesParamsType {
	/* The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see Constructing a search query. See "Searching code" for a detailed list of qualifiers. */
	q: string;
	/* Sorts the results of your query. Can only be indexed, which indicates how recently a file has been indexed by the GitHub search infrastructure. Default: best match */
	sort?: string;
	/* Determines whether the first search result returned is the highest number of matches (desc) or lowest number of matches (asc). This parameter is ignored unless you provide sort. Default: desc*/
	order?: 'asc' | 'desc';
	/* Results per page (max 100) Default: 30*/
	per_page?: number;
	/* Page number of the results to fetch. Default: 1 */
	page?: number;
}

export interface GithubRepositoriesPendingActionType {
	type:string;
	payload:GithubRepositoriesParamsType
}

export interface GithubRepositoriesSuccessActionType {
	type:string;
	payload:GithubRepositoriesType
}
