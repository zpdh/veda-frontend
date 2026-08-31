import { useFetch } from "../../../core/hooks/useFetch";
import type { HookResult } from "../../../core/types/dto";
import type { AllPlayerNamesResponse } from "../dtos";
import { PlayerService } from "../services/playerService";

const CACHE_KEY = "veda:";
const PLAYERS_CACHE_ID = CACHE_KEY + "players";
export function usePlayerNames(): HookResult<AllPlayerNamesResponse> {
  return useFetch(async (signal) => {
    const cached = sessionStorage.getItem(PLAYERS_CACHE_ID);
    if (cached) {
      return {
        data: JSON.parse(cached) as AllPlayerNamesResponse,
      };
    }

    const response = await PlayerService.getAllPlayerNames(signal);

    sessionStorage.setItem(PLAYERS_CACHE_ID, JSON.stringify(response.data));

    return response;
  }, []);
}
