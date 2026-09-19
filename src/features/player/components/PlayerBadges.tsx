import type { PlayerBadge } from "../utils/badges";
import { PlayerBadgeChip } from "./PlayerBadgeChip";

interface PlayerWeightBadgeProps {
  badges: PlayerBadge[];
}

export function PlayerWeightBadge({ badges }: PlayerWeightBadgeProps) {
  const weightBadge = badges.find((badge) => badge.isWeight);
  if (!weightBadge) return null;

  return <PlayerBadgeChip badge={weightBadge} />;
}

interface PlayerBoardBadgesProps {
  badges: PlayerBadge[];
}

export function PlayerBoardBadges({ badges }: PlayerBoardBadgesProps) {
  const boardBadges = badges.filter((badge) => !badge.isWeight);
  if (boardBadges.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {boardBadges.map((badge) => (
        <PlayerBadgeChip key={badge.id} badge={badge} />
      ))}
    </div>
  );
}
