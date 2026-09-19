import { useFetch } from "../../../core/hooks/useFetch";
import type { HookResult } from "../../../core/types/dto";
import type { SnapshotResponse } from "../dtos";
import { LeaderboardService } from "../services/leaderboardService";

export function useLatestSnapshot(
  leaderboardName: string,
  enabled: boolean = true,
): HookResult<SnapshotResponse> {
  return useFetch<SnapshotResponse>(
    (signal) => LeaderboardService.getLatestSnapshot(leaderboardName, signal),
    [leaderboardName],
    enabled,
  );
}
