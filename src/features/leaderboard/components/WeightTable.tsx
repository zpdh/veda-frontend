import type { WeightEntryOut } from "../dtos";
import { WeightRow } from "./WeightRow";

interface WeightTableProps {
  entries: WeightEntryOut[];
}

export function WeightTable({ entries }: WeightTableProps) {
  return (
    <table className="w-full border-collapse glass">
      <thead>
        <tr className="border-b border-veda-border">
          <th className="px-4 py-2 text-left text-xs font-medium text-veda-text-muted">Rank</th>
          <th className="px-4 py-2 text-left text-xs font-medium text-veda-text-muted">Player</th>
          <th className="px-4 py-2 text-right text-xs font-medium text-veda-text-muted">Weight</th>
        </tr>
      </thead>
      <tbody>
        {entries.map((entry) => (
          <WeightRow key={entry.playerName} entry={entry} />
        ))}
      </tbody>
    </table>
  );
}
