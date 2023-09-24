export interface IUseFetchReturn<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | unknown;
}
