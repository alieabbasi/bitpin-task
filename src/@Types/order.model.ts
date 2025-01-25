export interface OrderType {
  amount: string;
  price: string;
  remain: string;
  value: string;
}

export interface OrdersListType {
  orders: OrderType[];
  volume: number;
}
