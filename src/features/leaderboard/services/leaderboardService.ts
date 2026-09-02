import API from "../../../core/api/axios";
import API_ROUTE from "../../../core/api/constants";
import type { LeaderboardsResponse, SnapshotResponse } from "../dtos";

const apiRoute = API_ROUTE + "/leaderboards";

export const LeaderboardService = {
  getLatestSnapshot: (leaderboardName: string, signal?: AbortSignal) => {
    return API.get<SnapshotResponse>(apiRoute + `/${leaderboardName}`, {
      signal,
    });
  },
  getLeaderboards: (signal?: AbortSignal) => {
    return API.get<LeaderboardsResponse>(apiRoute, {
      signal,
    });
  },
};
