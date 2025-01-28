import { FC } from "react";
import Table, { ColumnsDataType } from "../ui/Table";
import { useCustomQueryGET } from "@/services/api.service";
import endpoints from "@/utils/endpoints";
import { MatchType } from "@/@Types/match.model";
import { MarketTypes } from "@/pages/MarketsPage/useMarketsPageLogic";

interface MatchesTableProps {
  marketId: string;
  marketType: MarketTypes;
}

const MatchesTable: FC<MatchesTableProps> = ({ marketId, marketType }) => {
  const { data, isLoading } = useCustomQueryGET<MatchType[]>(
    endpoints.matches(marketId)
  );

  return (
    <div className="size-full">
      <Table
        isLoading={isLoading}
        title="معامله"
        data={data}
        columnsData={columnsData(marketType)}
      />
    </div>
  );
};

export default MatchesTable;

const columnsData: (marketType: MarketTypes) => ColumnsDataType<MatchType>[] = (
  marketType
) => [
  {
    name: "مقدار",
    key: "match_amount",
    render: (data) =>
      +data.match_amount >= 1000
        ? (+data.match_amount).toLocaleString()
        : data.match_amount,
  },
  {
    name: "قیمت",
    key: "price",
    render: (data) => (
      <span>
        {+data.price >= 1000 ? (+data.price).toLocaleString() : data.price}
        <span className="opacity-50">
          {marketType === MarketTypes.IRT ? " تومان" : " USDT"}
        </span>
      </span>
    ),
  },
  {
    name: "زمان معامله",
    key: "time",
    render: (data) => dateFormatter.format(new Date(data.time * 1000)),
  },
];
