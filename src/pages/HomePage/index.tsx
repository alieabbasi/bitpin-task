import { ArrowLeft } from "iconsax-react";
import { FC, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import anime from "animejs";

import MarketCarousel from "@/components/HomePage/MarketsCarousel";

const HomePage: FC = () => {
  const animRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animRef.current) {
      const timeline = anime.timeline({});

      timeline
        .add({
          easing: "easeInQuad",
          targets: animRef.current,
          translateY: ["-50vh", "0"],
          duration: 400,
          delay: 2000,
        })
        .add({
          easing: "easeOutQuad",
          targets: animRef.current,
          scaleY: [1, 0.75],
          duration: 100,
        })
        .add({
          easing: "easeInQuad",
          targets: animRef.current,
          scaleY: [0.75, 1],
          duration: 100,
        })
        .add({
          easing: "easeOutQuad",
          targets: animRef.current,
          translateY: ["0", "-200px"],
          duration: 400,
        })
        .add({
          easing: "easeInQuad",
          targets: animRef.current,
          translateY: [-200, 0],
          duration: 400,
        })
        .add({
          easing: "easeOutQuad",
          targets: animRef.current,
          scaleY: [1, 0.85],
          duration: 100,
        })
        .add({
          easing: "easeInQuad",
          targets: animRef.current,
          scaleY: [0.85, 1],
          duration: 100,
        })
        .add({
          easing: "easeOutQuad",
          targets: animRef.current,
          translateY: [0, -50],
          duration: 200,
        })
        .add({
          easing: "easeInQuad",
          targets: animRef.current,
          translateY: [-50, 0],
          duration: 200,
        })
        .add({
          easing: "easeOutQuad",
          targets: animRef.current,
          scaleY: [1, 0.95],
          duration: 100,
        })
        .add({
          easing: "easeInQuad",
          targets: animRef.current,
          scaleY: [0.95, 1],
          duration: 100,
        });
    }
  }, []);

  return (
    <div className="w-full h-full self-center flex flex-col">
      <div className="h-60 w-[50vw] rounded-full bg-white blur-[190px] absolute -top-60 left-1/2 -translate-x-1/2 -translate-y-1/2 max-sm:opacity-50"></div>
      <div className="container flex mb-10">
        <div className="flex flex-col justify-center max-sm:items-center w-max">
          <h1 className="text-xl sm:text-3xl font-extrabold flex max-sm:justify-center items-center">
            به{" "}
            <img
              src="/bitpin-text.svg"
              className="w-32 sm:w-40 mx-2 sm:mx-4"
              alt="بیت‌پین"
            />{" "}
            خوش آمدید 👋
          </h1>
          <h4 className="mt-4 opacity-60 max-sm:text-center">
            برای مشاهده آخرین وضعیت بازارها کلیک کنید.
          </h4>
          <Link to="/markets" className="btn btn-lg btn-accent my-8 w-max">
            <span>مشاهده بازارها</span>
            <ArrowLeft size="20" color="white" />
          </Link>
        </div>
        <div className="shrink-0 flex-grow flex justify-center items-center">
          <div
            ref={animRef}
            className="size-40 relative"
            style={{
              transform: "translateY(-50vh)",
              transformOrigin: "bottom",
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png"
              alt="Bitcoin Logo"
            />
          </div>
        </div>
      </div>
      <MarketCarousel />
    </div>
  );
};

export default HomePage;
