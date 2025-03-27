import { githubApi } from "../api/github.api";
import { sleep } from "../helpers";
import { GitHubIssue, State } from "../interfaces";

export const getIssues = async (
  state: State,
  selectedLabels: string[]
): Promise<GitHubIssue[]> => {
  await sleep(1500);

  const params = new URLSearchParams();

  if (state !== State.All) {
    params.append("state", state);
  }

  if (selectedLabels.length > 0) {
    params.append("labels", selectedLabels.join(","));
  }

  const { data: resp } = await githubApi.get<GitHubIssue[]>("/issues", {
    params,
  });

  return resp;
};
