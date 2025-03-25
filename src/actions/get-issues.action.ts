import { githubApi } from "../api/github.api";
import { sleep } from "../helpers";
import { GitHubIssue } from "../interfaces";

export const getIssues = async (): Promise<GitHubIssue[]> => {
  await sleep(1500);

  const { data: resp } = await githubApi.get<GitHubIssue[]>("/issues");

  return resp;
};
