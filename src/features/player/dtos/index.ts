export interface AllPlayerNamesResponse {
  players: string[];
}

export interface PlayerEntryOut {
  leaderboardName: string;
  rank: number;
  value: number;
  estimatedPlaytimeMinutes: number;
}

export interface PlayerResponse {
  username: string;
  totalCompletions: number;
  totalPlaytimeMinutes: number;
  entries: PlayerEntryOut[];
}
