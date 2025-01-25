import Decimal from "decimal.js";
import { FC, useMemo } from "react";

import { OrderType } from "@/@Types/order.model";
import { MarketTypes } from "@/pages/useMarketsPageLogic";

interface OrdersAnalyticsType {
  totalRemains: Decimal;
  totalValues: Decimal;
  totalAmount: Decimal;
  weightedPriceSum: Decimal;
}

interface MarketOrdersAnalyticsProps {
  orders: OrderType[];
  marketType: MarketTypes;
}

const MarketOrdersAnalytics: FC<MarketOrdersAnalyticsProps> = ({
  orders,
  marketType,
}) => {
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
    <div className="flex flex-col space-y-2">
      <p className="text-lg font-bold">خلاصه آمار:</p>
      <div className="bg-base-300 rounded-lg flex flex-wrap p-0.5">
      <div className="flex justify-center items-center space-x-2 space-x-reverse p-3 m-0.5 bg-primary rounded-md">
        <p className="text-sm">مجموع باقی‌مانده:</p>
        <p className="font-bold">
          {ordersAnalytics.totalRemains.toLocaleString()}
        </p>
      </div>
      <div className="flex justify-center items-center space-x-2 space-x-reverse p-3 m-0.5 bg-primary rounded-md">
        <p className="text-sm">مجموع مبالغ:</p>
        <p className="font-bold">
          {ordersAnalytics.totalValues.toLocaleString()}{" "}
          <span className="opacity-50">
            {marketType === MarketTypes.IRT ? " تومان" : " USDT"}
          </span>
        </p>
      </div>
      <div className="flex justify-center items-center space-x-2 space-x-reverse p-3 m-0.5 bg-primary rounded-md">
        <p className="text-sm">میانگین قیمت‌:</p>
        <p className="font-bold">
          {ordersAnalytics.weightedPriceSum
            .div(ordersAnalytics.totalAmount)
            .toLocaleString()}
          <span className="opacity-50">
            {marketType === MarketTypes.IRT ? " تومان" : " USDT"}
          </span>
        </p>
      </div>
    </div>
    </div>
  );
};

export default MarketOrdersAnalytics;
