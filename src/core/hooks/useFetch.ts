import { useEffect, useState } from "react";
import type { ErrorResponse, HookResult } from "../types/dto";
import axios from "axios";

export function useFetch<T>(
  fetchFn: (signal: AbortSignal) => Promise<{ data: T }>,
  deps: unknown[],
): HookResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<ErrorResponse | null>(null);

  // oxlint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    setError(null);

    fetchFn(controller.signal)
      .then((res) => setData(res.data))
      .catch((err) => {
        if (err instanceof DOMException && err.name === "AbortError") {
          return;
        }

        if (axios.isAxiosError(err) && err.response?.data) {
          setError(err.response.data);
        } else {
          setError({
            errorCode: "ERR_UNKNOWN",
            message: err instanceof Error ? err.message : "Unknown error.",
            details: null,
          });
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      });

    return () => {
      controller.abort();
    };
    //oxlint-disable-next-line
  }, deps);

  return { data, loading, error };
}
