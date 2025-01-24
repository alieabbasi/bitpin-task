import { FC, PropsWithChildren } from "react";

interface LoadingProps {
  info?: string;
}

const Loading: FC<LoadingProps & PropsWithChildren> = ({ info }) => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <span className="loading loading-infinity loading-lg" />
      <span className="mr-2">{info}</span>
    </div>
  );
};

export default Loading;
