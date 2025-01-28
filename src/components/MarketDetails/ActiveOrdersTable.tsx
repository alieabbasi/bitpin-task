import { FC, useMemo } from "react";
import Table, { ColumnsDataType } from "../ui/Table";
import { useCustomQueryGET } from "@/services/api.service";
import endpoints from "@/utils/endpoints";
import { OrdersListType, OrderType } from "@/@Types/order.model";
import { MarketTypes } from "@/pages/MarketsPage/useMarketsPageLogic";
import MarketOrdersAnalytics from "./MarketOrdersAnalytics/MarketOrdersAnalytics";
import MarketOrdersPercentedAnalytics from "./MarketOrdersAnalytics/MarketOrdersPercentedAnalytics";

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

  const { data, isLoading } = useCustomQueryGET<OrdersListType>(
    endpoints.activeOrders(marketId || ""),
    {
      queryParams: {
        type: ordersType,
      },
      refetchInterval: 3000,
    }
  );

  const orders = useMemo(() => data.orders.splice(0, 10), [data]);

  return (
    <div className="size-full flex flex-col">
      <Table
        isLoading={isLoading}
        title={`سفارش ${ordersType === "buy" ? "خرید" : "فروش"}`}
        columnsData={columnsData(marketCode)}
        data={orders}
      />
      {orders.length > 0 && (
        <>
          <hr className="border-base-300 my-6" />
          <MarketOrdersAnalytics marketType={marketCode} orders={orders} />
          <hr className="border-base-300 my-6" />
          <MarketOrdersPercentedAnalytics
            marketType={marketCode}
            orders={orders}
          />
        </>
      )}
    </div>
  );
};

export default ActiveOrdersTable;

const columnsData: (marketType: MarketTypes) => ColumnsDataType<OrderType>[] = (
  marketType
) => [
  {
    name: "مبلغ کل",
    key: "value",
    render: (data) => (
      <span>
        {+data.value >= 1000 ? (+data.value).toLocaleString() : data.value}
        <span className="opacity-50">
          {marketType === MarketTypes.IRT ? " تومان" : " USDT"}
        </span>
      </span>
    ),
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
    name: "باقی‌مانده",
    key: "remain",
    render: (data) =>
      +data.remain >= 1000 ? (+data.remain).toLocaleString() : data.remain,
  },
];
