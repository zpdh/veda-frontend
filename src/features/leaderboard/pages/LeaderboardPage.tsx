import { useLatestSnapshot } from "../hooks/useLatestSnapshot";
import { useSearchParams } from "react-router-dom";
import { LeaderboardSelector } from "../components/LeaderboardSelector";
import { ErrorBanner } from "../../../core/components/ErrorBanner";
import { TableSkeleton } from "../../../core/components/TableSkeleton";
import { SnapshotTable } from "../components/SnapshotTable";
import { useLeaderboardNames } from "../hooks/useLeaderboardNames";

export function LeaderboardPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const leaderboardNames = useLeaderboardNames().data?.leaderboardNames ?? [];
  const name = searchParams.get("name") ?? leaderboardNames[0] ?? "";
  const hook = useLatestSnapshot(name);

  return (
    <>
      <LeaderboardSelector
        names={leaderboardNames}
        selected={name}
        onSelect={(newName) => setSearchParams({ name: newName })}
      />

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
        <div className="border-b border-gray-200 px-6 py-5">
          <p className="text-base font-medium text-gray-900">{name}</p>
          {hook.data && (
            <p className="mt-0.5 text-xs text-gray-400">
              {hook.data.fetchedAt}
            </p>
          )}
        </div>

        {hook.loading && <TableSkeleton rows={5} columns={3} />}
        {hook.error && <ErrorBanner error={hook.error} />}
        {!hook.loading && !hook.error && hook.data && (
          <SnapshotTable entries={hook.data.entries} />
        )}
      </div>
    </>
  );
}
