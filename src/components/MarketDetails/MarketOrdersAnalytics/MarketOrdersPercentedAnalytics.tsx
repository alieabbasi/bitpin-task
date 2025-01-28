import { OrderType } from "@/@Types/order.model";
import RangeInput from "@/components/ui/RangeInput";
import { MarketTypes } from "@/pages/MarketsPage/useMarketsPageLogic";
import Decimal from "decimal.js";
import { FC, useCallback, useState } from "react";

interface OrdersAnalyticsType {
  totalRemains: Decimal;
  totalValues: Decimal;
  weightedPriceSum: Decimal;
}

interface MarketOrdersPercentedAnalyticsProps {
  orders: OrderType[];
  marketType: MarketTypes;
}

const MarketOrdersPercentedAnalytics: FC<
  MarketOrdersPercentedAnalyticsProps
> = ({ orders, marketType }) => {
  const [percentage, setPercentage] = useState(0);
  const [ordersAnalytics, setOrderAnalytics] = useState<
    OrdersAnalyticsType | undefined
  >(undefined);

  const calculateOrdersAnalytics = useCallback(() => {
    const perCof = percentage / 100; // Percentage Coefficient
    const analyticsData = orders.reduce<OrdersAnalyticsType>(
      (aggData, order) => ({
        totalRemains: aggData.totalRemains.plus(
          new Decimal(+order.remain).mul(perCof)
        ),
        totalValues: aggData.totalValues.plus(
          // Assuming both (remain / amount) and percentage are going to effect value
          new Decimal(+order.value)
            .mul(perCof)
            .mul(+order.remain / +order.amount)
        ),
        // Considering remain as the weight, for weighted mean here, and also percentage is applied too
        weightedPriceSum: aggData.weightedPriceSum.plus(
          new Decimal(+order.remain).mul(+order.price).mul(perCof)
        ),
      }),
      {
        totalRemains: new Decimal(0),
        totalValues: new Decimal(0),
        weightedPriceSum: new Decimal(0),
      }
    );

    setOrderAnalytics(analyticsData);
  }, [orders, percentage]);

  return (
    <div className="flex flex-col space-y-2">
      <p className="text-lg font-bold">خلاصه آمار بر اساس درصد و باقی‌مانده:</p>
      <div className="w-full flex flex-col">
        <div className="flex space-x-2 space-x-reverse">
          <span className="text-sm">درصد انتخابی:</span>
          <span className=" font-bold">{percentage} %</span>
        </div>
        <RangeInput
          min={0}
          max={100}
          value={percentage}
          onChange={setPercentage}
          onMouseUp={calculateOrdersAnalytics}
          onTouchEnd={calculateOrdersAnalytics}
          className=""
        />
        {ordersAnalytics && (
          <div className="bg-base-200 rounded-lg flex flex-wrap mt-6 p-0.5">
            <div className="flex justify-center items-center space-x-2 space-x-reverse p-3 m-0.5 bg-base-100 rounded-md">
              <p className="text-sm">مجموع حجم ارز قابل دریافت:</p>
              <p className="font-bold">
                {ordersAnalytics.totalRemains.toLocaleString()}
              </p>
            </div>
            <div className="flex justify-center items-center space-x-2 space-x-reverse p-3 m-0.5 bg-base-100 rounded-md">
              <p className="text-sm">مجموع مبالغ قابل پرداخت:</p>
              <p className="font-bold">
                {ordersAnalytics.totalValues.toLocaleString()}{" "}
                <span className="opacity-50">
                  {marketType === MarketTypes.IRT ? " تومان" : " USDT"}
                </span>
              </p>
            </div>
            <div className="flex justify-center items-center space-x-2 space-x-reverse p-3 m-0.5 bg-base-100 rounded-md">
              <p className="text-sm">میانگین قیمت‌:</p>
              <p className="font-bold">
                {ordersAnalytics.weightedPriceSum
                  .div(ordersAnalytics.totalRemains)
                  .toLocaleString(marketType === MarketTypes.IRT ? 0 : 8) || 0}
                <span className="opacity-50">
                  {marketType === MarketTypes.IRT ? " تومان" : " USDT"}
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketOrdersPercentedAnalytics;
