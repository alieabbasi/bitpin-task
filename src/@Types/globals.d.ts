declare global {
  interface BaseListResponse<T> {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
  }

  // eslint-disable-next-line no-var
  var dateFormatter: Intl.DateTimeFormat;
}

export {};
