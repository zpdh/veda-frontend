
interface LeaderboardSelectorProps {
  names: string[];
  selected: string;
  onSelect: (name: string) => void;
}

export function LeaderboardSelector({
  names,
  selected,
  onSelect,
}: LeaderboardSelectorProps) {
  return (
    <div className="flex justify-center items-center gap-2 rounded-2xl border border-veda-border bg-veda-bg p-4">
      {names.map((name) => (
        <button
          key={name}
          onClick={() => onSelect(name)}
          className={
            name === selected
              ? "rounded-lg border border-veda-text-secondary px-4 py-2 text-sm"
              : "rounded-lg border border-veda-border px-4 py-2 text-sm text-veda-text-secondary"
          }
        >
          {name}
        </button>
      ))}
    </div>
  );
}
