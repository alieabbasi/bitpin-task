import { ComponentType, FC, Suspense } from "react";
import Loading from "./ui/Loading";

function withSuspenseLoading<P extends object>(
  Component: ComponentType<P>
): FC<P> {
  return (props: P) => (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );
}

export default withSuspenseLoading;
