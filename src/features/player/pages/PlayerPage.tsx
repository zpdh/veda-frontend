import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ErrorBanner } from "../../../core/components/ErrorBanner";
import { SearchBar } from "../components/SearchBar";
import { usePlayer } from "../hooks/usePlayer";
import { usePlayerNames } from "../hooks/usePlayerNames";
import { PlayerRankingRow } from "../components/PlayerRankingRow";

export function PlayerPage() {
  const navigate = useNavigate();
  const { playerName = "" } = useParams();
  const [search, setSearch] = useState("");
  const playerNames = usePlayerNames().data?.players ?? [];
  const player = usePlayer(playerName);

  const handleSearch = (name: string) => {
    navigate(`/players/${name}`);
    setSearch("");
  };

  const entries = player.data?.entries
    ? [...player.data.entries].sort((a, b) => a.rank - b.rank)
    : [];

  return (
    <div className="flex flex-col gap-4">
      <SearchBar
        usernames={playerNames}
        value={search}
        onChange={setSearch}
        onSubmit={handleSearch}
        placeholder="Search for a player..."
      />

      {player.error && <ErrorBanner error={player.error} />}

      {player.loading && (
        <div className="rounded-md border border-veda-border bg-veda-surface/80 glass px-6 py-10 text-center text-sm text-veda-text-muted">
          Loading...
        </div>
      )}

      {player.data && !player.loading && (
        <>
          <h1 className="text-4xl font-medium text-veda-text border-b border-veda-border py-2">
            {player.data.username}
          </h1>
          <div className="grid gap-4 sm:grid-cols-2">
            <section className="rounded-md border border-veda-border bg-veda-surface/80 glass p-5">
              <p className="text-xs text-veda-text-muted">Total completions</p>
              <p className="mt-2 text-3xl font-medium text-veda-text">
                {player.data.totalCompletions}
              </p>
            </section>
            <section className="rounded-md border border-veda-border bg-veda-surface/80 glass p-5">
              <p className="text-xs text-veda-text-muted">Leaderboards</p>
              <p className="mt-2 text-3xl font-medium text-veda-text">
                {entries.length}
              </p>
            </section>
          </div>

          <section className="overflow-hidden rounded-md border border-veda-border bg-veda-surface/80 glass">
            <div className="border-b border-veda-border px-6 py-5">
              <h2 className="text-base font-medium text-veda-text">Rankings</h2>
              <p className="mt-1 text-xs text-veda-text-muted">
                Current leaderboard positions
              </p>
            </div>
            {entries.length > 0 ? (
              <div>
                {entries.map((entry) => (
                  <PlayerRankingRow key={entry.leaderboardName} entry={entry} />
                ))}
              </div>
            ) : (
              <p className="px-6 py-8 text-sm text-veda-text-muted">
                No leaderboard positions recorded yet.
              </p>
            )}
          </section>
        </>
      )}
    </div>
  );
}
