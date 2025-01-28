import clsx from "clsx";
import { Link } from "react-router-dom";
import { ArrowLeft } from "iconsax-react";

import { MarketTypes } from "@/pages/MarketsPage/useMarketsPageLogic";
import { ColumnsDataType } from "../ui/Table";
import { MarketType } from "@/@Types/market.model";

export const marketsTableColumnsData: (
  marketCode: MarketTypes
) => ColumnsDataType<MarketType>[] = (marketCode) => [
  {
    name: "#",
    key: "logo",
    render: (data) => (
      <div className="size-6 sm:size-10">
        <img
          className="size-full"
          src={data.currency1.image}
          alt={data.currency1.title_fa}
        />
      </div>
    ),
    href: (data) => `/markets/${data.id}`,
  },
  {
    name: "نام بازار",
    key: "name",
    render: (data) => (
      <div className="flex flex-col">
        <span className="w-44 truncate">{data.title_fa}</span>
        <span className="text-xs opacity-40 w-44 truncate">{data.title}</span>
      </div>
    ),
  },
  {
    name: "قیمت",
    key: "price",
    render: (data) => (
      <div className="flex flex-col">
        <span>
          {(+data.price).toLocaleString()}
          <span className="opacity-50">
            {marketCode === MarketTypes.IRT ? " تومان" : " USDT"}
          </span>
        </span>
        <div className="sm:hidden">
          <div
            className={clsx("px-2 dir-ltr text-nowrap", {
              "text-green-600": data.price_info.change > 0,
              "text-red-600": data.price_info.change < 0,
              "text-white": data.price_info.change === 0,
            })}
          >
            {(data.price_info.change > 0 ? "+" : "") + data.price_info.change} %
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "تغییر 24h",
    key: "change",
    render: (data) => (
      <div
        className={clsx(
          "px-2 dir-ltr w-full text-center pb-0.5 pt-1 rounded-full text-nowrap",
          {
            "text-green-600 bg-green-600/20": data.price_info.change > 0,
            "text-red-600 bg-red-600/20": data.price_info.change < 0,
            "text-white bg-white/20": data.price_info.change === 0,
          }
        )}
      >
        {(data.price_info.change > 0 ? "+" : "") + data.price_info.change} %
      </div>
    ),
    className: "max-sm:hidden",
  },
  {
    name: "حجم معاملات 24h",
    key: "volume",
    render: (data) => (
      <span>
        {(+data.volume_24h).toLocaleString()}
        <span className="opacity-50">
          {marketCode === MarketTypes.IRT ? " تومان" : " USDT"}
        </span>
      </span>
    ),
    className: "max-sm:hidden",
  },
  {
    name: "",
    key: "operations",
    render: (data) => (
      <Link
        to={`/markets/${data.id}`}
        state={{ lastPage: "/markets" }}
        className="btn btn-secondary btn-sm flex shrink-0 flex-nowrap"
      >
        <span>جزيیات</span>
        <ArrowLeft size="20" color="white" />
      </Link>
    ),
    className: "max-lg:hidden",
  },
];
