import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

interface LoadingProps {
  info?: string;
  dynamic?: boolean;
}

const Loading: FC<LoadingProps & PropsWithChildren> = ({ info, dynamic }) => {
  return (
    <div
      className={clsx("w-full flex justify-center items-center", {
        "h-screen": !dynamic,
        "h-full": dynamic,
      })}
    >
      <span className="loading loading-infinity loading-lg" />
      <span className="mr-2">{info}</span>
    </div>
  );
};

export default Loading;
