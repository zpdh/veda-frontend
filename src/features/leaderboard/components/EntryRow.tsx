import type { EntryOut } from "../dtos";

interface EntryRowProps {
  entry: EntryOut;
}

export function EntryRow({ entry }: EntryRowProps) {
  return (
    <tr>
      <td className="px-4 py-2 text-left">{entry.rank}</td>
      <td className="px-4 py-2 text-left">{entry.playerName}</td>
      <td className="px-4 py-2 text-right">{entry.value}</td>
    </tr>
  );
}
