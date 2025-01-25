import useStore from "@/services/store";
import { ChangeEvent, useMemo } from "react";
import { useParams, useSearchParams } from "react-router-dom";

export enum MarketDetailPageTabValues {
  BUY = "buy",
  SELL = "sell",
  MATCHES = "matches",
}

export const useMarketDetailPageLogic = () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const tabValue =
  searchParams.get("tab-value") || MarketDetailPageTabValues.BUY;
  
  const markets = useStore((store) => store.markets);
  const marketData = useMemo(() => {
    const market = markets.find((market) => market.id === +(id || ""));
    return market
    ? {
      image: market.currency1.image,
      title: market.currency1.title_fa,
      marketType: market.currency2.code,
      id: id || "",
    }
    : undefined;
  }, [id, markets]);

  const onTabChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newSearchParams = new URLSearchParams(searchParams);
    if (e.currentTarget.id === "buy-orders-tab") {
      newSearchParams.set("tab-value", MarketDetailPageTabValues.BUY);
    } else if (e.currentTarget.id === "sell-orders-tab") {
      newSearchParams.set("tab-value", MarketDetailPageTabValues.SELL);
    } else {
      newSearchParams.set("tab-value", MarketDetailPageTabValues.MATCHES);
    }
    setSearchParams(newSearchParams);
  };

  return { tabValue, onTabChange, marketData };
};
