import { useFetch } from "../../../core/hooks/useFetch";
import type { HookResult } from "../../../core/types/dto";
import type { LeaderboardNamesResponse } from "../dtos";
import { LeaderboardService } from "../services/leaderboardService";

export function useLeaderboardNames(): HookResult<LeaderboardNamesResponse> {
  return useFetch(
    (signal) => LeaderboardService.getLeaderboardNames(signal),
    [],
  );
}
