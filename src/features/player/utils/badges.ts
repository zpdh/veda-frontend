import type { PlayerEntryOut } from "../dtos";

/**
 * Temporary hard-coded denominator used in badge tooltips.
 *
 * TODO: expose the real per-leaderboard player count (and the global tracked
 * player count) through the API DTOs, then replace this constant.
 */
export const BADGE_TOTAL_PLAYERS = 250;

/** Only leaderboards where the player ranks this high get a badge. */
const TOP_RANK_THRESHOLD = 10;

/** Maximum number of board badges shown (weight badge is separate). */
const MAX_BOARD_BADGES = 10;

export interface PlayerBadge {
  /** Stable key for React lists. */
  id: string;
  /** Numeric rank shown as `#rank`. */
  rank: number;
  /** Human-readable source, e.g. a leaderboard name or "Global". */
  label: string;
  /** Tooltip text. */
  tooltip: string;
  /** Whether this is the special global weight badge. */
  isWeight: boolean;
}

function boardTooltip(leaderboardName: string, rank: number): string {
  return `#${rank} out of ${BADGE_TOTAL_PLAYERS} in ${leaderboardName}`;
}

/**
 * Builds the ordered badge list for a player profile.
 *
 * Order: the weight (global) badge is always last in the array but flagged
 * via `isWeight` so the UI can render it next to the name; board badges are
 * sorted by best rank.
 */
export function buildPlayerBadges(
  entries: PlayerEntryOut[],
  weightRank: number,
): PlayerBadge[] {
  const boardBadges: PlayerBadge[] = entries
    .filter((entry) => entry.rank <= TOP_RANK_THRESHOLD)
    .sort((a, b) => a.rank - b.rank)
    .slice(0, MAX_BOARD_BADGES)
    .map((entry) => ({
      id: `board:${entry.leaderboardName}`,
      rank: entry.rank,
      label: entry.leaderboardName,
      tooltip: boardTooltip(entry.leaderboardName, entry.rank),
      isWeight: false,
    }));

  const weightBadge: PlayerBadge = {
    id: "weight",
    rank: weightRank,
    label: "Global",
    tooltip: `#${weightRank} globally across all leaderboards`,
    isWeight: true,
  };

  // Rank 0 means the player was not found on the global weight board yet.
  return weightRank > 0 ? [weightBadge, ...boardBadges] : boardBadges;
}
