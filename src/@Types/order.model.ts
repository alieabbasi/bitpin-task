export interface OrderType {
  amount: number;
  price: number;
  remain: number;
  value: number;
}

export interface OrdersListType {
  orders: OrderType[];
  volume: number;
}
