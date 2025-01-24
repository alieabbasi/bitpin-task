import { MarketType } from "@/models/market.model";
import { FC } from "react";
import Table from "../ui/Table";
import { marketsTableColumnsData } from "./MarketsTableColumnsData";
import { MarketTypes } from "@/pages/useMarketsPageLogic";

interface MarketsIRTTableProps {
  data: MarketType[][];
}
 
const MarketsIRTTable: FC<MarketsIRTTableProps> = ({data}) => {
  return ( 
    <div className="flex flex-col">
      <Table columnsData={marketsTableColumnsData(MarketTypes.IRT)} data={data[0]} />
    </div>

   );
}
 
export default MarketsIRTTable;