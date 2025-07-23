"use client";
import { testimonial } from "@/types";
import { Skeleton } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { FaQuoteRight } from "react-icons/fa6";
import { Variants, motion } from "framer-motion";

export function Testimonials() {
  3;
  const [testimonials, setTestimonials] = useState<testimonial[]>();

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_APP_URL}/api/testimonials`)
      .then((data) => {
        setTestimonials(data.data);
      })
      .catch((err) => {
        console.log("Error getting testimonials", err);
      });
  }, []);
  const items: Variants = {
    hidden: {
      y: 50,
      opacity: 0,
      transition: {
        type: "tween",
        ease: "circOut",
        duration: 0.55,
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        ease: "circOut",
        duration: 0.55,
      },
    },
  };

  return (
    <div
      id={"testimonials"}
      className="dark:bg-grid-white/[0.05] relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-md bg-[#000121] py-[8rem] antialiased dark:bg-black xsPhone:px-10 smTablet:px-2"
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <motion.p
        whileInView={"visible"}
        initial={"hidden"}
        variants={items}
        className="italics relative z-[10] mb-6 w-fit text-center font-poppins font-bold tracking-[0.18em] text-[#e7aeff] xsPhone:text-[min(3vw,3vh)] smTablet:text-[min(2.5vh,2.5vw)]"
      >
        <FaQuoteRight className="absolute left-[50%] top-[50%] z-[-1] h-auto w-[5rem] translate-x-[-50%] translate-y-[-50%] text-[#232d57]" />
        TESTIMONIALS
      </motion.p>
      <motion.p
        whileInView={"visible"}
        initial={"hidden"}
        variants={items}
        className="relative z-[10] w-full overflow-hidden text-center font-ivy text-white xsPhone:text-[min(10vw,10vh)] smTablet:text-[min(7vh,7vw)]"
      >
        Don&apos;t Just Take Our Word For It
      </motion.p>
      <motion.p
        whileInView={"visible"}
        initial={"hidden"}
        variants={items}
        className="relative z-[10] mt-4 w-full bg-gradient-to-b from-white via-gray-300 to-gray-800 bg-clip-text text-center font-poppins font-light tracking-wider text-transparent xsPhone:text-[min(4vw,4vh)] smTablet:text-[min(2.6vh,2.6vw)]"
      >
        Read What Others Have To Say About Us
      </motion.p>
      {testimonials && testimonials.length ? (
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          className="b mt-[4.5rem] font-poppins"
        />
      ) : (
        <div className="mt-10 h-full w-[80%] gap-10 phone:grid-cols-1 phone:space-y-10 smTablet:grid smTablet:grid-cols-2 smTablet:space-y-0 smLaptop:grid-cols-3">
          <Skeleton
            variant="rectangular"
            width={"100%"}
            height={"12rem"}
            sx={{ bgcolor: "white" }}
          />
          <Skeleton
            variant="rectangular"
            width={"100%"}
            height={"12rem"}
            sx={{ bgcolor: "white" }}
          />
          <Skeleton
            variant="rectangular"
            width={"100%"}
            height={"12rem"}
            sx={{ bgcolor: "white" }}
          />
        </div>
      )}
    </div>
  );
}
