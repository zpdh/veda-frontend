import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ErrorBanner } from "../../../core/components/ErrorBanner";
import { SearchBar } from "../components/SearchBar";
import { usePlayer } from "../hooks/usePlayer";
import { usePlayerNames } from "../hooks/usePlayerNames";
import { PlayerRankingRow } from "../components/PlayerRankingRow";
import { PlayerOverviewCard } from "../components/PlayerOverviewCard";
import { PlaytimeDistributionCard } from "../components/PlaytimeDistributionCard";

export function PlayerPage() {
  const navigate = useNavigate();
  const { playerName = "" } = useParams();
  const [search, setSearch] = useState("");

  const playerNames = usePlayerNames().data?.players ?? [];
  const { data: playerData, loading, error } = usePlayer(playerName);

  const handleSearch = (name: string) => {
    if (!name.trim()) return;
    navigate(`/players/${encodeURIComponent(name.trim())}`);
    setSearch("");
  };

  const entries = playerData?.entries
    ? [...playerData.entries].sort((a, b) => a.rank - b.rank)
    : [];

  const playtimeDistribution = entries.map((entry) => ({
    name: entry.leaderboardName,
    minutes: entry.estimatedPlaytimeMinutes ?? 0,
  }));

  return (
    <div className="flex flex-col gap-6">
      <SearchBar
        usernames={playerNames}
        value={search}
        onChange={setSearch}
        onSubmit={handleSearch}
        placeholder="Search for a player..."
      />

      {error && <ErrorBanner error={error} />}

      {loading ? (
        <div className="py-12 text-center text-sm text-veda-text-muted">
          Loading player profile...
        </div>
      ) : !playerData ? (
        <div className="rounded-sm border border-veda-border bg-veda-bg/60 p-8 text-center glass">
          <p className="text-base font-medium text-veda-text">
            Player not found.
          </p>
          <p className="mt-1 text-xs text-veda-text-muted">
            No stats recorded for &quot;{playerName}&quot;.
          </p>
        </div>
      ) : (
        <>
          <div className="border-b border-veda-border pb-5">
            <p className="text-xs font-medium uppercase tracking-widest text-veda-text-muted">
              Player
            </p>

            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-veda-text">
              {playerData.username}
            </h1>

            <div className="mt-3 flex items-center gap-2">
              {/* reserved for future badges */}
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            <section className="flex h-0 min-h-full flex-col rounded-sm border border-veda-border bg-veda-bg/60 p-4 glass">
              <div className="shrink-0 border-b border-veda-border pb-3">
                <h2 className="text-sm font-medium uppercase tracking-wider text-veda-text">
                  Leaderboards
                </h2>
                <p className="mt-1 text-xs text-veda-text-muted">
                  Current positions
                </p>
              </div>

              {entries.length > 0 ? (
                <div className="mt-2 min-h-0 flex-1 overflow-y-auto pr-1">
                  {entries.map((entry, index) => (
                    <PlayerRankingRow
                      key={`${entry.leaderboardName}-${index}`}
                      entry={entry}
                    />
                  ))}
                </div>
              ) : (
                <p className="py-8 text-sm text-veda-text-muted">
                  No leaderboard positions recorded yet.
                </p>
              )}
            </section>

            <aside className="flex flex-col gap-6">
              <PlayerOverviewCard
                totalCompletions={playerData.totalCompletions}
                totalPlaytimeMinutes={playerData.totalPlaytimeMinutes}
              />

              <PlaytimeDistributionCard data={playtimeDistribution} />
            </aside>
          </div>
        </>
      )}
    </div>
  );
}
