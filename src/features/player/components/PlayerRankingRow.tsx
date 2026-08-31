import type { PlayerEntryOut } from "../dtos";


function rankColor(rank: number): string {
  if (rank === 1) return "text-veda-gold";
  if (rank === 2) return "text-veda-silver";
  if (rank === 3) return "text-veda-bronze";
  return "text-veda-text-secondary";
}

interface PlayerRankingRowProps {
  entry: PlayerEntryOut;
}

export function PlayerRankingRow({ entry }: PlayerRankingRowProps) {
  return (
    <div className="flex items-center gap-4 border-b border-veda-border px-6 py-4 last:border-b-0">
      <div
        className={`w-12 shrink-0 text-2xl font-medium ${rankColor(entry.rank)}`}
      >
        #{entry.rank}
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-veda-text">
          {entry.leaderboardName}
        </p>
      </div>

      <div className="shrink-0 text-right">
        <p className="text-lg font-medium text-veda-text">
          {entry.value}
        </p>
        <p className="text-xs text-veda-text-muted">
          completions
        </p>
      </div>
    </div>
  );
}
