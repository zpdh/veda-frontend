import type { EntryOut } from "../dtos";

interface EntryRowProps {
  entry: EntryOut;
}

function getRankColor(rank: number): string {
  switch (rank) {
    case 1:
      return "text-amber-500";
    case 2:
      return "text-gray-400";
    case 3:
      return "text-orange-700";
    default:
      return "text-gray-900";
  }
}

export function EntryRow({ entry }: EntryRowProps) {
  return (
    <tr>
      <td className={`px-4 py-2 text-left ${getRankColor(entry.rank)}`}>
        {entry.rank}
      </td>
      <td className="px-4 py-2 text-left">{entry.playerName}</td>
      <td className="px-4 py-2 text-right">{entry.value}</td>
    </tr>
  );
}
