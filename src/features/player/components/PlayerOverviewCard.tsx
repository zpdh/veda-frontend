interface PlayerOverviewCardProps {
  totalCompletions: number;
  totalPlaytimeMinutes: number;
}

export function PlayerOverviewCard({
  totalCompletions,
  totalPlaytimeMinutes,
}: PlayerOverviewCardProps) {
  const playtimeHours = (totalPlaytimeMinutes / 60).toFixed(1);

  return (
    <div className="gap-2 rounded-sm border border-veda-border bg-veda-bg/60 p-4 glass">
      <div className="border-b border-veda-border pb-3">
        <h2 className="text-sm font-medium uppercase tracking-wider text-veda-text">
          Overview
        </h2>
        <p className="mt-1 text-xs text-veda-text-muted">Player statistics</p>
      </div>

      <div className="flex items-center pt-4">
        <div className="flex-1 pr-4">
          <p className="text-xs uppercase tracking-wider text-veda-text-muted">
            Completions
          </p>
          <p className="mt-1 text-2xl font-semibold text-veda-text">
            {totalCompletions.toLocaleString()}
          </p>
        </div>

        <div className="h-10 w-px bg-linear-to-b from-transparent via-veda-border to-transparent" />

        <div className="flex-1 pl-4">
          <p className="text-xs uppercase tracking-wider text-veda-text-muted">
            Playtime
          </p>
          <p className="mt-1 text-2xl font-semibold text-veda-text">
            {playtimeHours}
            <span className="ml-1 text-sm font-normal text-veda-text-muted">
              hrs
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
