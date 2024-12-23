import {GithubRepository} from "../domain/Repositorires.ts";

export async function getUserRepos(username: string) {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }

    const data = (await response.json()) as unknown;
    assertIsGitHubUserReposApiResponse(data);
    return normalizeData(data);
}

function assertIsGitHubUserReposApiResponse(data: unknown): asserts data is GithubRepository[] {
    if(!Array.isArray(data)) {
        throw new Error("data should be array");
    }
}

function normalizeData(data: GithubRepository[]): GithubRepository[] {
    return data.map(repo => ({
        name: repo.name,
    }))
}