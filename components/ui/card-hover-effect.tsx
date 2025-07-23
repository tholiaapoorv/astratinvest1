import { cn } from "@/lib/utils";
import { testimonial } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import Skeleton from "@mui/material/Skeleton";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import SanityImage from "./SanityImage";

export const HoverEffect = ({
  items,
  className,
}: {
  items: testimonial[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid phone:grid-cols-1 smTablet:grid-cols-1  smLaptop:grid-cols-3  py-10",
        className
      )}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}>
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 block  rounded-none"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card className="bg-[#000121] border border-white/20 rounded-none">
            <CardTitle>{item}</CardTitle>
            <CardDescription>{item.remarks}</CardDescription>
          </Card>
        </div>
      ))}
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
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}>
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
    <div className="flex justify-start items-center gap-6 font-poppins tracking-wide">
      <div className="w-[4rem] h-[4rem] rounded-tl-[1rem] bg-gray-400">
        {children.image && (
          <SanityImage src={children.image} className="rounded-tl-[1rem]" />
        )}
      </div>
      <div className="flex flex-col justify-center items-start ">
        <div className="text-white">
          {
            <Rating
              name="read-only"
              value={children.rating || 5}
              precision={0.5}
              readOnly
            />
          }
        </div>
        <h4
          className={cn(
            "text-zinc-100 w-full font-bold tracking-wide phone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(3vh,3vw)] smLaptop:text-[min(2.3vh,2.3vw)]",
            className
          )}>
          {children.name ? (
            children.name
          ) : (
            <Skeleton
              variant="text"
              sx={{ fontSize: "1rem", width: "100%", bgcolor: "white" }}
            />
          )}
        </h4>
        <h6 className="text-white/80 font-poppins phone:text-[min(2.8vh,2.8vw)] smTablet:text-[min(2.2vh,2.2vw)] smLaptop:text-[min(1.8vh,1.8vw)]">
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
        "mt-8 text-zinc-400 tracking-wide leading-relaxed phone:text-[min(2.8vh,2.8vw)] smTablet:text-[min(2vh,2vw)] smLaptop:text-[min(1.8vh,1.8vw)] font-poppins",
        className
      )}>
      {children ? (
        children
      ) : (
        <Skeleton
          variant="text"
          sx={{ fontSize: "1rem", width: "100%", bgcolor: "white" }}
        />
      )}
    </p>
  );
};
