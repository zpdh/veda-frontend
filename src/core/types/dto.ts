export interface ErrorResponse {
  errorCode: string;
  message: string;
  details: Record<string, unknown> | null;
}

export interface HookResult<T> {
  data: T | null;
  loading: boolean;
  error: ErrorResponse | null;
}
