import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

interface LoadingProps {
  info?: string;
  dynamic?: boolean;
  customHeight?: number;
}

const Loading: FC<LoadingProps & PropsWithChildren> = ({
  info,
  dynamic,
  customHeight,
}) => {
  return (
    <div
      className={clsx("w-full flex justify-center items-center", {
        "h-screen": !dynamic && !customHeight,
        "min-h-[50vh]": dynamic && !customHeight,
      })}
      style={{ height: customHeight ? `${customHeight}px` : undefined }}
    >
      <span className="loading loading-infinity loading-lg" />
      {info && <span className="mr-2">{info}</span>}
    </div>
  );
};

export default Loading;
