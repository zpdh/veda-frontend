import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ErrorBanner } from "../../../core/components/ErrorBanner";
import { SearchBar } from "../components/SearchBar";
import { usePlayer } from "../hooks/usePlayer";
import { usePlayerNames } from "../hooks/usePlayerNames";
import { PlayerRankingRow } from "../components/PlayerRankingRow";
import { PlayerOverviewCard } from "../components/PlayerOverviewCard";
import { PlaytimeDistributionCard } from "../components/PlaytimeDistributionCard";
import type { PlayerResponse } from "../dtos";

export const MOCK_PLAYER_DATA: PlayerResponse = {
  username: "VedaKnight99",
  weight: 8422222.5,
  totalCompletions: 1422222,
  totalPlaytimeMinutes: 38455213,
  entries: [
    {
      leaderboardName: "Cyberpunk 2077",
      rank: 4,
      value: 12500,
      estimatedPlaytimeMinutes: 1440, // 37.5% - Largest
    },
    {
      leaderboardName: "Elden Ring",
      rank: 12,
      value: 9800,
      estimatedPlaytimeMinutes: 1080, // 28.1%
    },
    {
      leaderboardName: "Hades II",
      rank: 1,
      value: 18400,
      estimatedPlaytimeMinutes: 720, // 18.8%
    },
    {
      leaderboardName: "Hollow Knight",
      rank: 29,
      value: 4100,
      estimatedPlaytimeMinutes: 360, // 9.4%
    },
    {
      leaderboardName: "Celeste",
      rank: 8,
      value: 8700,
      estimatedPlaytimeMinutes: 240, // 6.3% - Smallest
    },
  ],
};
export function PlayerPage() {
  const navigate = useNavigate();
  const { playerName = "" } = useParams();
  const [search, setSearch] = useState("");

  const playerNames = usePlayerNames().data?.players ?? [];
  //const { data: playerData, loading, error } = usePlayer(playerName);
  const playerData = MOCK_PLAYER_DATA;
  const loading = false;
  const error = null;

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
      <div className="flex flex-col gap-4 sm:gap-6 px-3 sm:px-0">
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
          <div className="rounded-sm border border-veda-border bg-veda-bg/60 p-6 sm:p-8 text-center glass">
            <p className="text-base font-medium text-veda-text">
              Player not found.
            </p>
            <p className="mt-1 text-xs text-veda-text-muted">
              No stats recorded for &quot;{playerName}&quot;.
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between border-b border-veda-border pb-4 sm:pb-5">
              <div>
                <p className="text-[10px] sm:text-xs font-medium uppercase tracking-widest text-veda-text-muted">
                  Player
                </p>
                <h1 className="mt-0.5 sm:mt-1 text-2xl sm:text-3xl font-semibold tracking-tight text-veda-text truncate">
                  {playerData.username}
                </h1>
              </div>
            </div>

            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[1fr_400px]">
              <section className="order-1 flex flex-col rounded-sm border border-veda-border bg-veda-bg/60 p-3 sm:p-4 glass">
                <div className="shrink-0 border-b border-veda-border pb-2.5 sm:pb-3">
                  <h2 className="text-xs sm:text-sm font-medium uppercase tracking-wider text-veda-text">
                    Leaderboards
                  </h2>
                  <p className="mt-0.5 text-[10px] sm:text-xs text-veda-text-muted">
                    Current positions
                  </p>
                </div>

                {entries.length > 0 ? (
                  <div className="mt-2 flex-1 overflow-y-auto pr-1">
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

              <aside className="order-2 flex flex-col gap-4 sm:gap-6">
                <PlayerOverviewCard
                  weight={playerData.weight}
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
