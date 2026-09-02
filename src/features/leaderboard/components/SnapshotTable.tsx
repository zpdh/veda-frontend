import type { EntryOut } from "../dtos";
import { EntryRow } from "./EntryRow";

interface SnapshotTableProps {
  entries: EntryOut[];
}

export function SnapshotTable({ entries }: SnapshotTableProps) {
  return (
    <table className="w-full border-collapse glass">
      <thead>
        <tr className="border-b border-veda-border">
          <th className="px-4 py-2 text-left text-xs font-medium text-veda-text-muted">Rank</th>
          <th className="px-4 py-2 text-left text-xs font-medium text-veda-text-muted">Player</th>
          <th className="px-4 py-2 text-right text-xs font-medium text-veda-text-muted">Completions</th>
        </tr>
      </thead>
      <tbody>
        {entries.map((entry) => (
          <EntryRow key={entry.entryId} entry={entry} />
        ))}
      </tbody>
    </table>
  );
}
