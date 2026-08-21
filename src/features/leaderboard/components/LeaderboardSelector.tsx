import { __TEMP__LEADERBOARD_NAMES } from "../constants";

interface LeaderboardSelectorProps {
  selected: string;
  onSelect: (name: string) => void;
}

export function LeaderboardSelector({
  selected,
  onSelect,
}: LeaderboardSelectorProps) {
  return (
    <div className="flex gap-2 rounded-2xl border border-gray-200 bg-white p-4">
      {__TEMP__LEADERBOARD_NAMES.map((name) => (
        <button
          key={name}
          onClick={() => onSelect(name)}
          className={
            name === selected
              ? "rounded-lg border border-gray-400 bg-gray-100 px-4 py-2 text-sm"
              : "rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-600"
          }
        >
          {name}
        </button>
      ))}
    </div>
  );
}
