import { FC } from "react";

import { MarketTypes, useMarketsPageLogic } from "./useMarketsPageLogic";
import MarketsIRTTable from "@/components/Markets/MarketsIRTTable";
import MarketsUSDTTable from "@/components/Markets/MarketsUSDTTable";

const Markets: FC = () => {
  const { tableData, activeMarketType, onTabChange } = useMarketsPageLogic();

  return (
    <div className="w-full flex flex-col space-y-4">
      <div className="w-full text-2xl font-black text-center ">
        <span>بازارها</span>
      </div>
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          id="IRT_Tab"
          name="markets_tabs"
          role="tab"
          className="tab text-nowrap"
          aria-label="بازار تومانی"
          checked={activeMarketType === MarketTypes.IRT}
          onChange={onTabChange}
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-2 sm:p-6"
        >
          <MarketsIRTTable data={tableData} />
        </div>

        <input
          type="radio"
          id="USDT_Tab"
          name="markets_tabs"
          role="tab"
          className="tab text-nowrap"
          aria-label="بازار تتری"
          checked={activeMarketType === MarketTypes.USDT}
          onChange={onTabChange}
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-2 sm:p-6"
        >
          <MarketsUSDTTable data={tableData} />
        </div>
      </div>
    </div>
  );
};

export default Markets;
