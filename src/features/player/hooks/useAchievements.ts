import { useFetch } from "../../../core/hooks/useFetch";
import type { HookResult } from "../../../core/types/dto";
import type { AchievementsResponse } from "../dtos";
import { PlayerService } from "../services/playerService";

export function useAchievements(
  playerName: string,
): HookResult<AchievementsResponse> {
  return useFetch(
    (signal) => PlayerService.getAchievements(playerName, signal),
    [],
  );
}
