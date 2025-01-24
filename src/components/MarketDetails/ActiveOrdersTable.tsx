import { FC } from "react";
import Table from "../ui/Table";
import { useCustomQueryGET } from "@/utils/api-service";
import endpoints from "@/utils/endpoints";
import { OrdersListType } from "@/models/order.model";
import { activeOrdersTableColumnsData } from "./ActiveOrdersTableColumnsData";
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
        columnsData={activeOrdersTableColumnsData(marketCode)}
        data={data.orders.slice(0, 10)}
      />
    </div>
  );
};

export default ActiveOrdersTable;
