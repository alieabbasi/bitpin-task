import { MarketType } from "@/models/market.model";
import { FC } from "react";
import Table from "../ui/Table";
import { marketsTableColumnsData } from "./MarketsTableColumnsData";
import { MarketTypes } from "@/pages/useMarketsPageLogic";

interface MarketsUSDTTableProps {
  data: MarketType[][];
}

const MarketsUSDTTable: FC<MarketsUSDTTableProps> = ({data}) => {
  return (
    <div className="flex flex-col">
      <Table
        columnsData={marketsTableColumnsData(MarketTypes.USDT)}
        data={data[0]}
      />
    </div>
  );
};

export default MarketsUSDTTable;
