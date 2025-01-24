import { paginateMarketsArray } from "@/utils/pagination";
import { ChangeEvent, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import useStore from "../services/store";

export enum MarketTypes {
  IRT = "IRT",
  USDT = "USDT",
}

export const useMarketsPageLogic = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeMarketType = searchParams.get("market-type") || MarketTypes.IRT;

  const {
    markets: data,
    isLoading,
    isError,
  } = useStore((state) => state);

  const tableData = useMemo(
    () => paginateMarketsArray(data || [], 10, activeMarketType),
    [data, activeMarketType]
  );

  const onTabChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newSearchParams = new URLSearchParams(searchParams);
    if (e.currentTarget.id === "USDT_Tab") {
      newSearchParams.set("market-type", MarketTypes.USDT);
    } else {
      newSearchParams.set("market-type", MarketTypes.IRT);
    }
    setSearchParams(newSearchParams);
  };

  return { activeMarketType, onTabChange, tableData, isLoading, isError };
};
