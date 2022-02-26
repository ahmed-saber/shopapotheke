import { GithubRepositoriesParamsType } from "../../types/github";
import { GET_GITHUB_REPOSITORIES_PENDING } from "../constants/githubRepositories";

export function getGithubRepositoriesAction(payload:GithubRepositoriesParamsType){
    return {
        type:GET_GITHUB_REPOSITORIES_PENDING,
        payload
    }
}