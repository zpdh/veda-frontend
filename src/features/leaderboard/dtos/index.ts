export interface EntryOut {
  entryId: number;
  rank: number;
  playerName: string;
  value: number;
}

export interface SnapshotResponse {
  snapshotId: number;
  leaderboardName: string;
  fetchedAt: string;
  entries: EntryOut[];
}

export interface LeaderboardOut {
  leaderboardId: string;
  leaderboardName: string;
  estimatedTimePerCompletionMinutes: number;
}

export interface LeaderboardsResponse {
  leaderboards: LeaderboardOut[];
}
