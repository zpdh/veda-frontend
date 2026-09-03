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
    <div className="rounded-sm border border-veda-border bg-veda-bg/60 p-4 glass">
      <div className="border-b border-veda-border pb-3">
        <h2 className="text-sm font-medium uppercase tracking-wider text-veda-text">
          Overview
        </h2>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {/* Weight Box */}
        <div className="min-w-0 rounded border border-veda-border/40 bg-veda-surface/30 px-1.5 py-2.5 text-center">
          <p className="truncate text-[10px] font-medium uppercase tracking-wider text-veda-text-muted">
            Weight
          </p>
          <p className="mt-1 truncate text-base font-bold tabular-nums text-veda-text">
            {weight}
          </p>
        </div>

        {/* Completions Box */}
        <div className="min-w-0 rounded border border-veda-border/40 bg-veda-surface/30 px-1.5 py-2.5 text-center">
          <p className="truncate text-[10px] font-medium uppercase tracking-wider text-veda-text-muted">
            Completions
          </p>
          <p className="mt-1 truncate text-base font-bold tabular-nums text-veda-text">
            {totalCompletions}
          </p>
        </div>

        {/* Playtime Box */}
        <div className="min-w-0 rounded border border-veda-border/40 bg-veda-surface/30 px-1.5 py-2.5 text-center">
          <p className="truncate text-[10px] font-medium uppercase tracking-wider text-veda-text-muted">
            Playtime
          </p>
          <p className="mt-1 truncate text-base font-bold tabular-nums text-veda-text">
            {totalHours}h
          </p>
        </div>
      </div>
    </div>
  );
}
