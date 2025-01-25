import { MarketType } from "@/@Types/market.model";

export const paginateMarketsArray = (
  items: MarketType[],
  pageSize = 10,
  code?: string
) => {
  const paginated: MarketType[][] = [];
  let currentPage: MarketType[] = [];

  for (const item of items) {
    if (code && item.currency2.code !== code) {
      continue;
    }

    currentPage.push(item);

    if (currentPage.length === pageSize) {
      paginated.push(currentPage);
      currentPage = [];
    }
  }

  if (currentPage.length > 0) {
    paginated.push(currentPage);
  }

  return paginated;
};
