interface PlayerOverviewCardProps {
  weight: number;
  totalCompletions: number;
  totalPlaytimeMinutes: number;
}

export function PlayerOverviewCard({
  weight,
  totalCompletions,
  totalPlaytimeMinutes,
}: PlayerOverviewCardProps) {
  const totalHours = Math.round(totalPlaytimeMinutes / 60);

  return (
    <div className="rounded-sm border border-veda-border bg-veda-bg/60 p-3 sm:p-4 glass">
      <div className="border-b border-veda-border pb-2.5 sm:pb-3">
        <h2 className="text-xs sm:text-sm font-medium uppercase tracking-wider text-veda-text">
          Overview
        </h2>
      </div>

      {/* Grid wraps cleanly on tiny mobile viewports */}
      <div className="mt-3 sm:mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
        <div className="min-w-0 rounded border border-veda-border/40 bg-veda-surface/30 px-2 py-2 sm:py-2.5 text-center">
          <p className="truncate text-[10px] font-medium uppercase tracking-wider text-veda-text-muted">
            Weight
          </p>
          <p className="mt-0.5 sm:mt-1 truncate text-sm sm:text-base font-bold tabular-nums text-veda-text">
            {weight.toLocaleString("en-US")}
          </p>
        </div>

        <div className="min-w-0 rounded border border-veda-border/40 bg-veda-surface/30 px-2 py-2 sm:py-2.5 text-center">
          <p className="truncate text-[10px] font-medium uppercase tracking-wider text-veda-text-muted">
            Completions
          </p>
          <p className="mt-0.5 sm:mt-1 truncate text-sm sm:text-base font-bold tabular-nums text-veda-text">
            {totalCompletions.toLocaleString("en-US")}
          </p>
        </div>

        <div className="min-w-0 rounded border border-veda-border/40 bg-veda-surface/30 px-2 py-2 sm:py-2.5 text-center">
          <p className="truncate text-[10px] font-medium uppercase tracking-wider text-veda-text-muted">
            Est. Playtime
          </p>
          <p className="mt-0.5 sm:mt-1 truncate text-sm sm:text-base font-bold tabular-nums text-veda-text">
            {totalHours.toLocaleString("en-US")}h
          </p>
        </div>
      </div>
    </div>
  );
}
