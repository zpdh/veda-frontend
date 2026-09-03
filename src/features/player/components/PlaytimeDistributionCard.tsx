export interface ContentPlaytime {
  name: string;
  minutes: number;
  color?: string;
}

interface PlaytimeDistributionCardProps {
  data: ContentPlaytime[];
}

const COLOR_PALETTE = [
  "#38bdf8",
  "#818cf8",
  "#f472b6",
  "#34d399",
  "#fbbf24",
  "#a78bfa",
  "#f87171",
  "#2dd4bf",
];

function getColor(index: number, customColor?: string): string {
  if (customColor) return customColor;
  return COLOR_PALETTE[index % COLOR_PALETTE.length];
}

export function PlaytimeDistributionCard({
  data,
}: PlaytimeDistributionCardProps) {
  const totalMinutes = data.reduce((acc, item) => acc + item.minutes, 0);

  const computedData = data
    .map((item, index) => ({
      ...item,
      color: getColor(index, item.color),
      percentage:
        totalMinutes > 0 ? Math.round((item.minutes / totalMinutes) * 100) : 0,
    }))
    .sort((a, b) => b.minutes - a.minutes);

  const gradientStops = computedData
    .reduce<{ stops: string[]; cumulative: number }>(
      (acc, item) => {
        const start = acc.cumulative;
        const end = start + item.percentage;
        return {
          stops: [...acc.stops, `${item.color} ${start}% ${end}%`],
          cumulative: end,
        };
      },
      { stops: [], cumulative: 0 }
    )
    .stops.join(", ");

  return (
    <div className="rounded-sm border border-veda-border bg-veda-bg/60 p-3 sm:p-4 glass">
      <div className="border-b border-veda-border pb-2.5 sm:pb-3">
        <h2 className="text-xs sm:text-sm font-medium uppercase tracking-wider text-veda-text">
          Playtime Distribution
        </h2>
      </div>

      <div className="mt-4 flex flex-col items-center gap-4 sm:gap-5">
        <div className="relative flex items-center justify-center">
          <div
            className="h-24 w-24 sm:h-32 sm:w-32 rounded-full transition-all duration-300 hover:scale-105"
            style={{
              background: `conic-gradient(${gradientStops})`,
            }}
          />
        </div>

        {/* Dynamic 1-column on mobile, 2-column on desktop */}
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
          {computedData.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between rounded border border-veda-border/40 bg-veda-surface/30 px-2 py-1.5"
            >
              <div className="flex items-center gap-2 overflow-hidden">
                <span
                  className="h-2 w-2 shrink-0 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="truncate text-xs text-veda-text">
                  {item.name}
                </span>
              </div>
              <span className="ml-2 text-xs font-medium text-veda-text-muted">
                {item.percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
