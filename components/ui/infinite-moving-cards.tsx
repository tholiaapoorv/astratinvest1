"use client";

import { cn } from "@/lib/utils";
import { testimonial } from "@/types";
import Rating from "@mui/material/Rating";
import Skeleton from "@mui/material/Skeleton";
import React, { useEffect, useState } from "react";
import SanityImage from "./SanityImage";
import { User2Icon } from "lucide-react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: testimonial[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-fit shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <Card
            key={idx}
            className={`max-w-full rounded-none phone:min-h-[350px] phone:w-[350px] smTablet:min-h-[400px] smTablet:w-[500px]`}
          >
            <CardTitle>{item}</CardTitle>
            <CardDescription>{item.remarks}</CardDescription>
          </Card>
        ))}
      </ul>
    </div>
  );
};
export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative z-20 h-full w-fit overflow-hidden rounded-2xl border border-white/20 bg-black p-4",
        className,
      )}
      style={{
        background:
          "linear-gradient(to right top, #000121, #030625, #040b2a, #050f2e, #051333, #051333, #051333, #051333, #050f2e, #040b2a, #030625, #000121)",
      }}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: Pick<testimonial, "designation" | "image" | "name" | "rating">;
}) => {
  return (
    <div className="flex items-center justify-start gap-6 font-poppins tracking-wide">
      <div className="relative flex h-[5rem] w-[5rem] items-center justify-center overflow-clip rounded-full bg-transparent">
        {children.image ? (
          <SanityImage
            src={children.image}
            className="h-full w-full object-cover"
          />
        ) : (
          <User2Icon className="h-full w-full text-white" />
        )}
      </div>
      <div className="flex flex-col items-start justify-center">
        {/* <div className="text-white">
          {
            <Rating
              name="read-only"
              value={children.rating || 5}
              precision={0.5}
              readOnly
            />
          }
        </div> */}
        <h4
          className={cn(
            "w-full font-bold tracking-wide text-zinc-100 phone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(3vh,3vw)] smLaptop:text-[min(2.3vh,2.3vw)]",
            className,
          )}
        >
          {children.name ? (
            children.name
          ) : (
            <Skeleton
              variant="text"
              sx={{ fontSize: "1rem", width: "100%", bgcolor: "white" }}
            />
          )}
        </h4>
        <h6 className="font-poppins text-white/80 phone:text-[min(2.8vh,2.8vw)] smTablet:text-[min(2.2vh,2.2vw)] smLaptop:text-[min(1.8vh,1.8vw)]">
          {children.designation ? (
            children.designation
          ) : (
            <Skeleton
              variant="text"
              sx={{ fontSize: "1rem", width: "100%", bgcolor: "white" }}
            />
          )}
        </h6>
      </div>
    </div>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: string;
}) => {
  return (
    <p
      className={cn(
        "mt-8 font-poppins leading-relaxed tracking-wide text-white phone:text-[min(2.8vh,2.8vw)] smTablet:text-[min(2vh,2vw)] smLaptop:text-[min(1.8vh,1.8vw)]",
        className,
      )}
    >
      {children ? (
        <p>{`"${children}"`}</p>
      ) : (
        <Skeleton
          variant="text"
          sx={{ fontSize: "1rem", width: "100%", bgcolor: "white" }}
        />
      )}
    </p>
  );
};
