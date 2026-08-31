import { useLatestSnapshot } from "../hooks/useLatestSnapshot";
import { useSearchParams } from "react-router-dom";
import { LeaderboardSelector } from "../components/LeaderboardSelector";
import { ErrorBanner } from "../../../core/components/ErrorBanner";
import { SnapshotTable } from "../components/SnapshotTable";
import { useLeaderboardNames } from "../hooks/useLeaderboardNames";
import { formatISODate } from "../../../core/utils/format";

export function LeaderboardPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const leaderboardNames = useLeaderboardNames().data?.leaderboardNames ?? [];
  const name = searchParams.get("name") ?? leaderboardNames[0] ?? "";
  const hook = useLatestSnapshot(name);

  return (
    <div className="flex flex-col gap-4">
      {hook.error && <ErrorBanner error={hook.error} />}

      <LeaderboardSelector
        names={leaderboardNames}
        selected={name}
        onSelect={(newName) => setSearchParams({ name: newName })}
      />

      <div className="overflow-hidden rounded-md border border-veda-border bg-veda-surface/60 glass">
        <div className="border-b border-veda-border px-6 py-5">
          <p className="text-base font-medium text-veda-text">{name}</p>
          {hook.data && (
            <p className="mt-0.5 text-xs text-veda-text-muted">
              {formatISODate(hook.data.fetchedAt)}
            </p>
          )}
        </div>
        <div className="max-h-120 overflow-y-auto">
          {!hook.loading && !hook.error && hook.data && (
            <SnapshotTable entries={hook.data.entries} />
          )}
        </div>
      </div>
    </div>
  );
}
