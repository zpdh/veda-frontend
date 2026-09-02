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
  const hours = Math.floor(entry.estimatedPlaytimeMinutes / 60);
  const minutes = entry.estimatedPlaytimeMinutes % 60;
  return (
    <div className="flex items-center gap-5 border-b border-veda-border px-6 py-4 last:border-b-0">
      <div
        className={`min-w-[6ch] shrink-0 text-md font-semibold text-right ${rankColor(entry.rank)}`}
      >
        #{entry.rank}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-veda-text">
          {entry.leaderboardName}
        </p>
      </div>
      <div className="shrink-0 text-right">
        <p className="text-sm font-medium text-veda-text">
          {entry.value.toLocaleString()} completions
        </p>
        <p className="mt-0.5 text-xs text-veda-text-muted">
          {hours} hrs {minutes} min
        </p>
      </div>
    </div>
  );
}
