import API from "../../../core/api/axios";
import API_ROUTE from "../../../core/api/constants";
import type { AllPlayerNamesResponse, PlayerResponse } from "../dtos";

const apiRoute = API_ROUTE + "/players";

export const PlayerService = {
  getAllPlayerNames: (signal?: AbortSignal) => {
    return API.get<AllPlayerNamesResponse>(apiRoute, { signal });
  },

  getPlayer: (playerName: string, signal?: AbortSignal) => {
    return API.get<PlayerResponse>(apiRoute + `/${playerName}`, { signal });
  },
};
