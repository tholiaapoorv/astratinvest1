import React, { useRef } from "react";
import JimSimonsImage from "@/public/JimSimons.jpeg";
import Image from "next/image";
import { CgArrowTopRight } from "react-icons/cg";
import { TbArrowUpRight } from "react-icons/tb";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { Variants, motion } from "framer-motion";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const JimSimons = () => {
  const mainContainer = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const tl = gsap.timeline();
      const para = new SplitType(".title");
      tl.from(para.lines, {
        duration: 1,
        ease: "none",

        y: 110,
        opacity: 0,

        transformOrigin: "left center",
        scrollTrigger: {
          trigger: ".title-wrap",
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
          // markers: true,
        },
      });
    },
    { scope: mainContainer },
  );
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
  const items2: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      transition: {
        type: "tween",
        ease: "circOut",
        duration: 0.8,
      },
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "tween",
        ease: "circOut",
        duration: 0.8,
      },
    },
  };
  return (
    <div
      ref={mainContainer}
      className="flex h-fit w-screen items-center justify-center bg-[#F3F4F6] py-20"
    >
      <div className="jim-simons-wrap flex h-[100%] justify-center gap-14 phone:w-[95%] phone:flex-col phone:items-center smLaptop:w-[85%] smLaptop:flex-row smLaptop:items-start">
        <div className="relative flex flex-col items-center justify-center phone:w-[70%] smLaptop:w-[50%]">
          <Image
            src={JimSimonsImage}
            alt={""}
            className="h-auto w-fit max-w-[90%] grayscale"
          />
          <motion.p
            whileInView={"visible"}
            initial={"hidden"}
            variants={items}
            className="absolute bg-white bg-clip-text font-ivy text-[min(7vh,7vw)] font-bold text-transparent mix-blend-exclusion phone:bottom-[-2.3vh] smTablet:bottom-[-3.5vh] smLaptop:bottom-[-5vh]"
          >
            Jim Simons
          </motion.p>
        </div>
        <div className="flex h-full flex-col items-start justify-between gap-10 px-10 phone:w-full smLaptop:w-[50%]">
          <div className="title-wrap flex flex-col items-start justify-center gap-10">
            <motion.p
              whileInView={"visible"}
              initial={"hidden"}
              variants={items}
              className="w-full overflow-hidden font-ivy text-[#000121] xsPhone:text-[min(10vw,10vh)] phone:text-center smTablet:text-[min(7vh,7vw)] smLaptop:text-start smLaptop:text-[min(7vh,7vw)]"
            >
              The <span className="text-[#3959e6]">{`"Quant King"`}</span>
            </motion.p>
            <div>
              <motion.p
                whileInView={"visible"}
                initial={"hidden"}
                variants={items}
                className="font-poppins font-light italic text-[#000121]/80 phone:text-[min(4vh,4vw)] smTablet:text-[min(2.8vh,2.8vw)] smLaptop:text-[min(2.5vh,2.5vw)]"
              >
                {/* “Past performance is the best predictor of success.” */}
                {`"The advantage scientists bring into investing is that they have a certain rigor, a certain critical attitude, that can be very useful."`}
              </motion.p>
            </div>
          </div>
          <motion.div
            whileInView={"visible"}
            initial={"hidden"}
            variants={items}
            className="font-poppins leading-relaxed tracking-wide text-[#000121]/80 phone:text-justify phone:text-[min(3vw,3vh)] smTablet:text-[min(2.5vh,2.5vw)] smLaptop:text-start smLaptop:text-[min(2vh,2vw)] laptop:text-[min(1.8vh,1.8vw)]"
          >
            At Astratinvest, we embrace the rigorous, analytical mindset
            championed by pioneering quant experts like Jim Simons. Our strategy
            revolves around quantitative research and data-driven modeling. We
            employ a team dedicated to developing unique, bespoke quant models.
            Through systematic and disciplined analysis of vast datasets using
            our proprietary system, we extract invaluable insights. This enables
            us to identify high-quality investment opportunities across the
            listed Indian market to generate alpha. Our adherence to strict
            quantitative investing principles, coupled with our focus on the
            Indian market, sets&nbsp;us&nbsp;apart.
          </motion.div>

          <motion.div
            whileInView={"visible"}
            initial={"hidden"}
            variants={items}
            className=""
          >
            <button className="flex cursor-pointer items-center justify-center gap-1 border border-[#000121] p-4 font-ivy tracking-widest text-[#000121] transition hover:bg-[#000121] hover:text-white xsPhone:text-[min(3.5vw,3.5vh)] smTablet:text-[min(1.8vw,1.8vh)]">
              Learn More About Quant Investing{" "}
              <TbArrowUpRight className="h-auto w-6" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default JimSimons;
