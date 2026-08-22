import API from "../../../core/api/axios";
import type { LeaderboardNamesResponse, SnapshotResponse } from "../dtos";

export const LeaderboardService = {
  getLatestSnapshot: (leaderboardName: string, signal?: AbortSignal) => {
    return API.get<SnapshotResponse>(
      `/v1/api/leaderboards/${leaderboardName}`,
      { signal },
    );
  },
  getLeaderboardNames: (signal?: AbortSignal) => {
    return API.get<LeaderboardNamesResponse>("/v1/api/leaderboards", {
      signal,
    });
  },
};
