declare global {
  interface BaseListResponse<T> {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
  }
}

export {};
