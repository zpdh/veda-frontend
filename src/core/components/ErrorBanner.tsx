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
    <div className="flex items-center justify-between rounded-lg border border-red-300 bg-red-50 px-4 py-3">
      <div>
        <p className="text-sm font-medium text-shadow-red-800">
          {error.message}
        </p>
        <p className="text-xs text-red-600">{error.errorCode}</p>
      </div>
      <button
        onClick={() => setDismissed(true)}
        className="text-red-600 hover:text-red-800"
        aria-label="Dismiss"
      >
        x
      </button>
    </div>
  );
}
