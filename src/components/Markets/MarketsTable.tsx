import { MarketType } from "@/models/market.model";
import { FC } from "react";
import Table from "../ui/Table";
import { marketsTableColumnsData } from "./MarketsTableColumnsData";
import { MarketTypes } from "@/pages/useMarketsPageLogic";
import { useSearchParams } from "react-router-dom";
import Pagination from "../ui/Pagination";

interface MarketsTableProps {
  data: MarketType[][];
  marketType: MarketTypes;
}

const MarketsTable: FC<MarketsTableProps> = ({ data, marketType }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = +(searchParams.get(`${MarketTypes[marketType]}-page`) || 1);
  const totalPages = data.length;

  const setPage = (page: number) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(`${MarketTypes[marketType]}-page`, page.toString());
    setSearchParams(newSearchParams);
  };

  return (
    <div className="flex flex-col">
      <Table
        columnsData={marketsTableColumnsData(marketType)}
        data={data[page - 1]}
      />
      <div className="w-full flex justify-center items-center mt-4">
        <Pagination {...{ page, totalPages, setPage }} />
      </div>
    </div>
  );
};

export default MarketsTable;
