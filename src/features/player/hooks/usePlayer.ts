import { useFetch } from "../../../core/hooks/useFetch";
import type { HookResult } from "../../../core/types/dto";
import type { PlayerResponse } from "../dtos";
import { PlayerService } from "../services/playerService";

export function usePlayer(playerName: string): HookResult<PlayerResponse> {
  return useFetch(
    (signal) => PlayerService.getPlayer(playerName, signal),
    [playerName],
  );
}
