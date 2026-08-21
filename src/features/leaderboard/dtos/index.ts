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
