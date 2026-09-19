import API from "../../../core/api/axios";
import API_ROUTE from "../../../core/api/constants";
import type {
  LeaderboardsResponse,
  SnapshotResponse,
  WeightLeaderboardResponse,
} from "../dtos";

const apiRoute = API_ROUTE + "/leaderboards";

export const LeaderboardService = {
  getLatestSnapshot: (leaderboardName: string, signal?: AbortSignal) => {
    return API.get<SnapshotResponse>(apiRoute + `/${leaderboardName}`, {
      signal,
    });
  },
  getWeightLeaderboard: (signal?: AbortSignal) => {
    return API.get<WeightLeaderboardResponse>(apiRoute + "/weight", {
      signal,
    });
  },
  getLeaderboards: (signal?: AbortSignal) => {
    return API.get<LeaderboardsResponse>(apiRoute, {
      signal,
    });
  },
};
