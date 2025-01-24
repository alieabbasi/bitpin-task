import { OrderType } from "@/models/order.model";
import { ColumnsDataType } from "../ui/Table";
import { MarketTypes } from "@/pages/useMarketsPageLogic";

export const activeOrdersTableColumnsData: (
  marketType: MarketTypes
) => ColumnsDataType<OrderType>[] = (marketType) => [
  {
    name: "مقدار",
    key: "amount",
    render: (data) => data.amount.toLocaleString(),
  },
  {
    name: "قیمت",
    key: "price",
    render: (data) => (
      <span>
        {(+data.price).toLocaleString()}
        <span className="opacity-50">
          {marketType === MarketTypes.IRT ? " تومان" : " USDT"}
        </span>
      </span>
    ),
  },
  {
    name: "باقی‌مانده",
    key: "remain",
    render: (data) => data.remain.toLocaleString(),
  },
];
