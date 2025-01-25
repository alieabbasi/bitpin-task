import { FC, Suspense } from "react";
import {
  MarketDetailPageTabValues,
  useMarketDetailPageLogic,
} from "./useMarketDetailPageLogic";
import ActiveOrdersTable from "@/components/MarketDetails/ActiveOrdersTable";
import { MarketTypes } from "./useMarketsPageLogic";
import MatchesTable from "@/components/MarketDetails/MatchesTable";
import Loading from "@/components/ui/Loading";

const MarketDetailPage: FC = () => {
  const { tabValue, marketData, onTabChange } = useMarketDetailPageLogic();

  if (!marketData) return null;

  return (
    <>
      <div className="w-full h-full flex flex-col space-y-4 min-h-[50vh]">
        <div className="w-full text-2xl flex justify-center items-center space-x-2 space-x-reverse">
          <span className="text-2xl">بازار:</span>
          <div className="size-10">
            <img
              src={marketData.image}
              alt={marketData.title}
              className="size-full"
            />
          </div>
          <span className="font-bold">{marketData.title}</span>
        </div>
        <div role="tablist" className="tabs tabs-lifted md:tabs-lg">
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
              <Suspense fallback={<Loading dynamic />}>
                <ActiveOrdersTable
                  marketCode={marketData.marketType as MarketTypes}
                  marketId={marketData.id.toString()}
                  ordersType={MarketDetailPageTabValues.BUY}
                />
              </Suspense>
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
              <Suspense fallback={<Loading dynamic />}>
                <ActiveOrdersTable
                  marketCode={marketData.marketType as MarketTypes}
                  marketId={marketData.id.toString()}
                  ordersType={MarketDetailPageTabValues.SELL}
                />
              </Suspense>
            )}
          </div>

          <input
            type="radio"
            id="matches-tab"
            name="market_details_tab"
            role="tab"
            className="tab text-nowrap"
            aria-label="معاملات"
            checked={tabValue === MarketDetailPageTabValues.MATCHES}
            onChange={onTabChange}
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-2 sm:p-6"
          >
            {tabValue === MarketDetailPageTabValues.MATCHES && (
              <Suspense fallback={<Loading dynamic />}>
                <MatchesTable
                  marketType={marketData.marketType as MarketTypes}
                  marketId={marketData.id}
                />
              </Suspense>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketDetailPage;
