import { FC } from "react";
import Table, { ColumnsDataType } from "../ui/Table";
import { useCustomQueryGET } from "@/utils/api-service";
import endpoints from "@/utils/endpoints";
import { OrdersListType, OrderType } from "@/@Types/order.model";
import { MarketTypes } from "@/pages/useMarketsPageLogic";

interface ActiveOrdersTableProps {
  marketId: string;
  marketCode: MarketTypes;
  ordersType: "buy" | "sell";
}

const ActiveOrdersTable: FC<ActiveOrdersTableProps> = ({
  marketId,
  ordersType,
  marketCode,
}) => {
  const { data } = useCustomQueryGET<OrdersListType>(
    endpoints.activeOrders(marketId || ""),
    {
      queryParams: {
        type: ordersType,
      },
      refetchInterval: 3000,
    }
  );

  return (
    <div className="size-full">
      <Table
        title={`سفارش ${ordersType === "buy" ? "خرید" : "فروش"}`}
        columnsData={activeOrdersTableColumnsData(marketCode)}
        data={data.orders.slice(0, 10)}
      />
    </div>
  );
};

export default ActiveOrdersTable;

const activeOrdersTableColumnsData: (
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
