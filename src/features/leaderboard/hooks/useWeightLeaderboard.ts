import { useFetch } from "../../../core/hooks/useFetch";
import type { HookResult } from "../../../core/types/dto";
import type { WeightLeaderboardResponse } from "../dtos";
import { LeaderboardService } from "../services/leaderboardService";

export function useWeightLeaderboard(
  enabled: boolean = true,
): HookResult<WeightLeaderboardResponse> {
  return useFetch<WeightLeaderboardResponse>(
    (signal) => LeaderboardService.getWeightLeaderboard(signal),
    [],
    enabled,
  );
}
