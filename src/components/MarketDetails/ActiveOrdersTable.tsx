import { FC, Suspense, useMemo, useState } from "react";
import Table, { ColumnsDataType } from "../ui/Table";
import { useCustomQueryGET } from "@/services/api.service";
import endpoints from "@/utils/endpoints";
import { OrdersListType, OrderType } from "@/@Types/order.model";
import { MarketTypes } from "@/pages/useMarketsPageLogic";
import Decimal from "decimal.js";
import RangeInput from "../ui/RangeInput";
import Loading from "../ui/Loading";

interface ActiveOrdersTableProps {
  marketId: string;
  marketCode: MarketTypes;
  ordersType: "buy" | "sell";
}

interface OrdersAnalyticsType {
  totalRemains: Decimal;
  totalValues: Decimal;
  totalAmount: Decimal;
  weightedPriceSum: Decimal;
}

const ActiveOrdersTable: FC<ActiveOrdersTableProps> = ({
  marketId,
  ordersType,
  marketCode,
}) => {
  const [receivePercent, setReceivePercent] = useState(0);

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
  const ordersAnalytics = useMemo(
    () =>
      orders.reduce<OrdersAnalyticsType>(
        (aggData, order) => ({
          totalRemains: aggData.totalRemains.plus(+order.remain),
          totalValues: aggData.totalValues.plus(+order.value),
          // Considering amount as the weight, for weighted mean here
          weightedPriceSum: aggData.weightedPriceSum.plus(
            +order.amount * +order.price
          ),
          totalAmount: aggData.totalAmount.plus(+order.amount),
        }),
        {
          totalRemains: new Decimal(0),
          totalValues: new Decimal(0),
          weightedPriceSum: new Decimal(0),
          totalAmount: new Decimal(0),
        }
      ),
    [orders]
  );

  return (
    <div className="size-full flex flex-col space-y-4">
      <Table
        isLoading={isLoading}
        title={`سفارش ${ordersType === "buy" ? "خرید" : "فروش"}`}
        columnsData={columnsData(marketCode)}
        data={orders}
      />
      {orders.length > 0 && (
        <>
          <hr className="border-base-300" />
          <div className="bg-base-200 rounded-lg flex flex-wrap">
            <div className="flex justify-center items-center space-x-2 space-x-reverse p-4">
              <p className="text-sm">مجموع باقی‌مانده:</p>
              <p className="font-bold">
                {ordersAnalytics.totalRemains.toLocaleString()}
              </p>
            </div>
            <div className="flex justify-center items-center space-x-2 space-x-reverse p-4">
              <p className="text-sm">مجموع مبالغ:</p>
              <p className="font-bold">
                {ordersAnalytics.totalValues.toLocaleString()}{" "}
                <span className="opacity-50">
                  {marketCode === MarketTypes.IRT ? " تومان" : " USDT"}
                </span>
              </p>
            </div>
            <div className="flex justify-center items-center space-x-2 space-x-reverse p-4">
              <p className="text-sm">میانگین قیمت‌:</p>
              <p className="font-bold">
                {ordersAnalytics.weightedPriceSum
                  .div(ordersAnalytics.totalAmount)
                  .toLocaleString()}
                <span className="opacity-50">
                  {marketCode === MarketTypes.IRT ? " تومان" : " USDT"}
                </span>
              </p>
            </div>
          </div>
          <hr className="border-base-300" />
          <div className="w-full flex flex-col">
            <div className="flex space-x-2 space-x-reverse">
              <span className="text-sm">درصد انتخابی:</span>
              <span className=" font-bold">{receivePercent} %</span>
            </div>
            <RangeInput value={receivePercent} onChange={setReceivePercent} />
          </div>
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
