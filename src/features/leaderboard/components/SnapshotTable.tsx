import type { EntryOut } from "../dtos";
import { EntryRow } from "./EntryRow";

interface SnapshotTableProps {
  entries: EntryOut[];
}

export function SnapshotTable({ entries }: SnapshotTableProps) {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="px-4 py-2 text-left">Rank</th>
          <th className="px-4 py-2 text-left">Player</th>
          <th className="px-4 py-2 text-right">Completions</th>
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
