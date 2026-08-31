export interface AllPlayerNamesResponse {
  players: string[];
}

export interface PlayerEntryOut {
  leaderboardName: string;
  rank: number;
  value: number;
}

export interface PlayerResponse {
  username: string;
  totalCompletions: number;
  entries: PlayerEntryOut[];
}
