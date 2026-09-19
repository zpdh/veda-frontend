import { useLatestSnapshot } from "../hooks/useLatestSnapshot";
import { useSearchParams } from "react-router-dom";
import { LeaderboardSelector } from "../components/LeaderboardSelector";
import { ErrorBanner } from "../../../core/components/ErrorBanner";
import { SnapshotTable } from "../components/SnapshotTable";
import { WeightTable } from "../components/WeightTable";
import { useLeaderboardNames } from "../hooks/useLeaderboardNames";
import { useWeightLeaderboard } from "../hooks/useWeightLeaderboard";
import { formatISODate } from "../../../core/utils/format";

const GLOBAL_LEADERBOARD_NAME = "Global";

export function LeaderboardPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const leaderboardNames =
    useLeaderboardNames().data?.leaderboards.map(
      (leaderboard) => leaderboard.leaderboardName,
    ) ?? [];
  const names = [GLOBAL_LEADERBOARD_NAME, ...leaderboardNames];
  const name = searchParams.get("name") ?? names[0] ?? "";
  const isGlobal = name === GLOBAL_LEADERBOARD_NAME;

  // Each hook only fetches when its leaderboard is selected, so we never fire
  // a request for the leaderboard we don't render.
  const snapshotHook = useLatestSnapshot(name, !isGlobal && name !== "");
  const weightHook = useWeightLeaderboard(isGlobal);
  const hook = isGlobal ? weightHook : snapshotHook;

  return (
    <div className="flex flex-col gap-4">
      {hook.error && <ErrorBanner error={hook.error} />}
      {hook.loading ? (
        <div className="py-12 text-center text-sm text-veda-text-muted">
          Loading leaderboards...
        </div>
      ) : !hook.data ? (
        <div className="rounded-sm border border-veda-border bg-veda-bg/60 p-6 sm:p-8 text-center glass">
          <p className="text-base font-medium text-veda-text">
            No leaderboards available at this time.
          </p>
          <p className="mt-1 text-xs text-veda-text-muted">
            Maybe try refreshing the page?
          </p>
        </div>
      ) : (
        <>
          <LeaderboardSelector
            names={names}
            selected={name}
            onSelect={(newName) => setSearchParams({ name: newName })}
          />
          <div className="overflow-hidden rounded-md border border-veda-border bg-veda-surface/80 glass">
            <div className="border-b border-veda-border px-6 py-5">
              <p className="text-base font-medium text-veda-text">{name}</p>
              {snapshotHook.data && !isGlobal && (
                <p className="mt-0.5 text-xs text-veda-text-muted">
                  {formatISODate(snapshotHook.data.fetchedAt)}
                </p>
              )}
              {isGlobal && (
                <p className="mt-0.5 text-xs text-veda-text-muted">
                  Overall player weight across all leaderboards
                </p>
              )}
            </div>
            <div className="max-h-120 overflow-y-auto">
              {!hook.loading &&
                !hook.error &&
                (isGlobal ? (
                  <WeightTable entries={weightHook.data?.entries ?? []} />
                ) : (
                  <SnapshotTable entries={snapshotHook.data?.entries ?? []} />
                ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
