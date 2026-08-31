
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
    <div className="flex flex-wrap justify-center items-center gap-2 rounded-md border border-veda-border bg-veda-bg/60 p-4 glass">
      {names.map((name) => (
        <button
          key={name}
          onClick={() => onSelect(name)}
          className={
            name === selected
              ? "rounded-lg border border-veda-text-secondary px-4 py-2 text-sm"
              : "rounded-lg border border-veda-border px-4 py-2 text-sm text-veda-text-secondary hover:border-veda-text-muted transition-colors duration-200 ease-out"
          }
        >
          {name}
        </button>
      ))}
    </div>
  );
}
