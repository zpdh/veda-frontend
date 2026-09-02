import { useFetch } from "../../../core/hooks/useFetch";
import type { HookResult } from "../../../core/types/dto";
import type { LeaderboardsResponse } from "../dtos";
import { LeaderboardService } from "../services/leaderboardService";

export function useLeaderboardNames(): HookResult<LeaderboardsResponse> {
  return useFetch(
    (signal) => LeaderboardService.getLeaderboards(signal),
    [],
  );
}
