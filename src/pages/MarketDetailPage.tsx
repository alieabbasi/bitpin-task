import { FC } from "react";
import {
  MarketDetailPageTabValues,
  useMarketDetailPageLogic,
} from "./useMarketDetailPageLogic";
import ActiveOrdersTable from "@/components/MarketDetails/ActiveOrdersTable";
import { MarketTypes } from "./useMarketsPageLogic";

const MarketDetailPage: FC = () => {
  const { tabValue, marketData, onTabChange } = useMarketDetailPageLogic();

  if (!marketData) return null;

  return (
    <>
      <div className="w-full flex flex-col space-y-4">
        <div className="w-full text-center text-2xl flex justify-center items-center space-x-2 space-x-reverse">
          <span className="text-2xl">جزيیات بازار: </span>
          <div className="size-10">
            <img
              src={marketData.image}
              alt={marketData.title}
              className="size-full"
            />
          </div>
          <span className="font-bold">{marketData.title}</span>
        </div>
        <div role="tablist" className="tabs tabs-lifted">
          <input
            type="radio"
            id="buy-orders-tab"
            name="market_details_tab"
            role="tab"
            className="tab text-nowrap"
            aria-label="سفارشات خرید"
            checked={tabValue === MarketDetailPageTabValues.BUY}
            onChange={onTabChange}
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-2 sm:p-6"
          >
            {tabValue === MarketDetailPageTabValues.BUY && (
              <ActiveOrdersTable
                marketCode={marketData.marketType as MarketTypes}
                marketId={marketData.id.toString()}
                ordersType={MarketDetailPageTabValues.BUY}
              />
            )}
          </div>

          <input
            type="radio"
            id="sell-orders-tab"
            name="market_details_tab"
            role="tab"
            className="tab text-nowrap"
            aria-label="سفارشات فروش"
            checked={tabValue === MarketDetailPageTabValues.SELL}
            onChange={onTabChange}
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-2 sm:p-6"
          >
            {tabValue === MarketDetailPageTabValues.SELL && (
              <ActiveOrdersTable
                marketCode={marketData.marketType as MarketTypes}
                marketId={marketData.id.toString()}
                ordersType={MarketDetailPageTabValues.SELL}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketDetailPage;
