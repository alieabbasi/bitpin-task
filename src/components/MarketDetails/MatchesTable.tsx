import { FC } from "react";
import Table, { ColumnsDataType } from "../ui/Table";
import { useCustomQueryGET } from "@/utils/api-service";
import endpoints from "@/utils/endpoints";
import { MatchType } from "@/@Types/match.model";
import { MarketTypes } from "@/pages/useMarketsPageLogic";

interface MatchesTableProps {
  marketId: string;
  marketType: MarketTypes;
}

const MatchesTable: FC<MatchesTableProps> = ({ marketId }) => {
  const { data } = useCustomQueryGET<MatchType[]>(endpoints.matches(marketId));

  return (
    <div className="size-full">
      <Table
        title="معامله"
        data={data.splice(0, 10)}
        columnsData={columnsData}
      />
    </div>
  );
};

export default MatchesTable;

const columnsData: ColumnsDataType<MatchType>[] = [
  {
    name: "مقدار",
    key: "match_amount",
    render: (data) => (+data.match_amount).toLocaleString(),
  },
  {
    name: "قیمت",
    key: "price",
    render: (data) => (+data.price).toLocaleString() + " ",
  },
  {
    name: "زمان معامله",
    key: "time",
    render: (data) => dateFormatter.format(new Date(data.time * 1000)),
  },
];
