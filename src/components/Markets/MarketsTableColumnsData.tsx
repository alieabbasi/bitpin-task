import clsx from "clsx";
import { Link } from "react-router-dom";
import { ArrowLeft } from "iconsax-react";

import { MarketTypes } from "@/pages/useMarketsPageLogic";
import { ColumnsDataType } from "../ui/Table";
import { MarketType } from "@/models/market.model";

export const marketsTableColumnsData: (
  marketCode: MarketTypes
) => ColumnsDataType<MarketType>[] = (marketCode) => [
  {
    name: "#",
    key: "logo",
    render: (data) => (
      <div className="size-10">
        <img
          className="size-full"
          src={data.currency1.image}
          alt={data.currency1.title_fa}
        />
      </div>
    ),
  },
  {
    name: "نام بازار",
    key: "name",
    render: (data) => (
      <div className="flex flex-col">
        <span>{data.title_fa}</span>
        <span className="text-xs opacity-40">{data.title}</span>
      </div>
    ),
  },
  {
    name: "قیمت",
    key: "price",
    render: (data) =>
      (+data.price).toLocaleString() +
      (marketCode === MarketTypes.IRT ? " تومان" : " USDT"),
  },
  {
    name: "تغییر 24h",
    key: "change",
    render: (data) => (
      <div
        className={clsx("px-2 dir-ltr w-full text-center pb-0.5 pt-1 rounded-full", {
          "text-green-600 bg-green-600/20": data.price_info.change > 0,
          "text-red-600 bg-red-600/20": data.price_info.change < 0,
          "text-white bg-white/20": data.price_info.change === 0,
        })}
      >
        {(data.price_info.change > 0 ? "+" : "") + data.price_info.change} %
      </div>
    ),
  },
  {
    name: "حجم معاملات 24h",
    key: "volume",
    render: (data) => (+data.volume_24h).toLocaleString() + " تومان",
  },
  {
    name: "",
    key: "operations",
    render: (data) => (
      <Link to={`/${data.id}`} className="btn btn-accent btn-sm">
        <span>جزيیات</span>
        <ArrowLeft size="20" color="white" />
      </Link>
    ),
  },
];
