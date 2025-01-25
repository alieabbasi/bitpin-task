import Decimal from "decimal.js";

declare global {
  interface Number {
    toLocale(maximumFractionDigits?: number): string;
  }

  // eslint-disable-next-line no-var
  var dateFormatter: Intl.DateTimeFormat;
}

export interface BaseListResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

globalThis.dateFormatter = new Intl.DateTimeFormat("fa", {
  year: "numeric",
  month: "short",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
});

Number.prototype.toLocale = function (maximumFractionDigits?: number) {
  return this.toLocaleString("en", {
    minimumFractionDigits: 0,
    maximumFractionDigits: maximumFractionDigits || 8,
  });
};

Decimal.prototype.toLocaleString = function () {
  return this.toNumber().toLocale();
};

export {};
