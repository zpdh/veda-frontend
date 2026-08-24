import type { EntryOut } from "../dtos";

interface EntryRowProps {
  entry: EntryOut;
}

function getRankColor(rank: number): string {
  switch (rank) {
    case 1:
      return "bg-veda-gold/10 text-veda-gold";
    case 2:
      return "bg-veda-silver/10 text-veda-silver";
    case 3:
      return "bg-veda-bronze/10 text-veda-bronze";
    default:
      return "text-veda-test";
  }
}

export function EntryRow({ entry }: EntryRowProps) {
  const isTopThree = entry.rank <= 3;

  return (
    <tr className={`border-b border-veda-border/40 transition-colors duration-200 ease-out hover:bg-white/5 ${isTopThree ? getRankColor(entry.rank) : ""}`}>
      <td className={`px-4 py-3 text-center text-sm font-medium ${isTopThree ? "" : "text-veda-text-muted"}`}>
        {entry.rank}
      </td>
      <td className="px-4 py-3 text-left text-sm text-veda-text">{entry.playerName}</td>
      <td className="px-4 py-3 text-right text-sm text-veda-text-secondary">{entry.value}</td>
    </tr>
  );
}
