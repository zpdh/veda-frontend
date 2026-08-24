import { useState } from "react";
import type { ErrorResponse } from "../types/dto";

interface ErrorBannerProps {
  error: ErrorResponse;
}

export function ErrorBanner({ error }: ErrorBannerProps) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) {
    return null;
  }

  return (
    <div className="flex items-center justify-between rounded-lg border border-red-800 bg-red-950 px-4 py-3">
      <div>
        <p className="text-sm font-medium text-veda-bronze">{error.message}</p>
        <p className="text-xs text-veda-bronze/70">{error.errorCode}</p>
      </div>
      <button
        onClick={() => setDismissed(true)}
        className="text-veda-bronze hover:text-veda-text"
        aria-label="Dispensar"
      >
        x
      </button>
    </div>
  );
}
