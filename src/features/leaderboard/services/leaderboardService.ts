import API from "../../../core/api/axios";
import type { SnapshotResponse } from "../dtos";

export const LeaderboardService = {
  getLatestSnapshot: (leaderboardName: string, signal?: AbortSignal) => {
    return API.get<SnapshotResponse>(
      `/v1/api/leaderboards/${leaderboardName}`,
      { signal },
    );
  },
};
