import React, { useRef } from "react";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { Variant, Variants } from "framer-motion";
import { motion } from "framer-motion";
gsap.registerPlugin(useGSAP, ScrollTrigger);
const HomePageStats = () => {
  const mainContainer = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl2 = gsap.timeline({
        onComplete: () => {
          gsap.fromTo(
            ".middle",
            { opacity: 0 },
            {
              opacity: 100,
              scrollTrigger: {
                trigger: ".word-wrapper",

                scrub: true,
                start: "top center",
                end: "bottom center",
              },
            },
          );
        },
      });

      tl2
        .fromTo(
          ".left-word",
          {
            xPercent: 0,
          },
          {
            xPercent: -300,
            ease: "ease",
            scrollTrigger: {
              trigger: ".word-wrapper",

              scrub: true,
              start: "top center",
              end: "bottom center",
            },
          },
        )
        .fromTo(
          ".right-word",
          {
            xPercent: 0,
          },
          {
            xPercent: 280,
            ease: "ease",
            scrollTrigger: {
              trigger: ".word-wrapper",

              scrub: true,
              start: "top center",
              end: "bottom center",
            },
          },
          "-=1",
        )
        .fromTo(
          ".hr",
          {
            width: 0,
            opacity: 0,
          },
          {
            width: "30%",
            opacity: 100,
            ease: "ease",
            scrollTrigger: {
              trigger: ".word-wrapper",

              scrub: true,
              start: "top center",
              end: "bottom center",
            },
          },
          "-=2",
        );

      // gsap
      //   .timeline({})
      //   .from(".text", {
      //     yPercent: 120,
      //     ease: "sine.in",
      //     scrollTrigger: {
      //       trigger: ".text-container",
      //       start: "top 80%",
      //       end: "10% 80%",
      //       markers: true,
      //       scrub: 1,
      //     },
      //   })
      //   .from(".text-2", {
      //     yPercent: 120,
      //     ease: "sine.in",
      //     scrollTrigger: {
      //       trigger: ".text-container",
      //       start: "10 80%",
      //       end: "20% 80%",
      //       markers: true,
      //       scrub: 1,
      //     },
      //   });
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
  return (
    <div
      ref={mainContainer}
      className="flex h-fit w-full flex-col items-center justify-center gap-14 bg-[#F3F4F6] pt-[3rem] phone:pb-[4rem] smTablet:pb-[6rem]"
    >
      {/* Laptop and Tablet section */}
      <div className="word-wrapper flex w-[80%] items-center justify-center phone:hidden smTablet:flex">
        <div className="left-word relative z-[2] bg-[#F3F4F6] font-ivy smTablet:text-[min(12vw,12vh)] smLaptop:text-[min(20vw,20vh)]">
          <p className="bg-gradient-to-b from-[#081B74] via-[#081B74] to-[#000121] bg-clip-text text-transparent">
            Q.
          </p>
        </div>

        <div className="absolute z-[1] flex w-2/3 items-center justify-center gap-6 font-poppins text-[min(3vw,3vh)]">
          <hr
            className="hr h-[0.12rem] w-[10%] bg-yellow-500"
            style={{ width: 0 }}
          />
          <p
            style={{ opacity: 0 }}
            className="middle bg-gradient-to-b from-[#081B74] via-[#081B74] to-[#000121] bg-clip-text text-center text-transparent"
          >
            52 Dimensional Alphas
          </p>
          <hr
            className="hr h-[0.12rem] w-[10%] bg-yellow-500"
            style={{ width: 0 }}
          />
        </div>

        <div className="right-word relative z-[2] bg-[#F3F4F6] font-ivy text-[#081B74] smTablet:text-[min(12vw,12vh)] smLaptop:text-[min(20vw,20vh)]">
          <p className="bg-gradient-to-b from-[#081B74] via-[#081B74] to-[#000121] bg-clip-text text-transparent">
            52
          </p>
        </div>
      </div>

      {/* Phone section */}
      <div className="word-wrapper flex w-[95%] flex-col items-center justify-center phone:flex smTablet:hidden">
        <div className="relative z-[2] flex bg-[#F3F4F6] font-ivy text-[min(15vw,15vh)]">
          <p className="bg-gradient-to-b from-[#081B74] via-[#081B74] to-[#000121] bg-clip-text text-transparent">
            Q.52
          </p>
        </div>

        <div className="flex w-2/3 items-center justify-center gap-2 font-poppins text-[min(4.5vw,4.5vh)]">
          <hr className="h-[0.12rem] w-[20%] bg-yellow-500" />
          <p className="bg-clip-texttext-transparent text-center">
            52 Dimensional Alphas
          </p>
          <hr className="h-[0.12rem] w-[20%] bg-yellow-500" />
        </div>
      </div>

      {/* Text section */}
      <div className="text-container flex w-[80%] flex-col items-start justify-center phone:gap-10 smTablet:gap-14">
        <div className="text-wrapper overflow-hidden">
          <p className="text bg-gradient-to-b from-[#081B74] via-[#081B74] to-[#000121] bg-clip-text font-ivy tracking-wide text-transparent xsPhone:text-[min(4.2vh,4.2vw)] xsPhone:text-[#081B74] smTablet:text-[min(3.5vw,3.5vh)] smLaptop:text-[min(5vw,5vh)]">
            Our bespoke quant models navigate India&apos; s market intricacies
            adeptly
          </p>
        </div>
        <div className="">
          <div className="text-wrapper overflow-hidden border-l-2 border-yellow-500 phone:w-[90%] phone:pl-4 smTablet:w-[65%] smTablet:pl-10">
            <motion.p
              whileInView={"visible"}
              initial={"hidden"}
              variants={items}
              className="text-2 font-poppins text-neutral-700 phone:text-[min(3vw,3vh)] smTablet:text-[min(2vw,2vh)] smLaptop:text-[min(2.2vw,2.2vh)]"
            >
              Unlike generic quantitative strategies imported from Western
              markets, our models are purposefully designed to capture the
              nuances and complexities inherent to Indian stocks and market
              microstructure.
            </motion.p>
          </div>
        </div>

        <div className="w-full items-center justify-center gap-6 phone:grid-cols-1 phone:grid-rows-3 phone:space-y-6 smTablet:grid smTablet:grid-cols-3 smTablet:grid-rows-1 smTablet:space-y-0">
          <div className="flex min-h-full flex-col gap-6 bg-gradient-to-b from-[#081B74] to-[#000121] text-white phone:w-full phone:p-6 smTablet:w-full smLaptop:p-10">
            <div className="text-wrapper overflow-hidden">
              <p className="font-poppins font-semibold tracking-wide text-[#F3F4F6] phone:text-[min(4vw,4vh)] smTablet:text-[min(2.5vw,2.5vh)] smLaptop:text-[min(3vw,3vh)]">
                Trade Execution & Risk Management
              </p>
            </div>
            <motion.div
              whileInView={"visible"}
              initial={"hidden"}
              variants={items}
              className="text-4 font-poppins text-[#F3F4F6]/90 phone:text-[min(3vh,3vw)] smTablet:text-[min(1.8vh,1.8vw)] smLaptop:text-[min(2vw,2vh)]"
            >
              Our advanced risk management framework ensures precision in trade
              execution. Our system continuously monitors real-time market
              conditions, optimizing position sizes and rebalancing portfolios
              dynamically to align with evolving risk/return scenarios,
              delivering consistency in returns.
            </motion.div>
          </div>
          <div className="flex min-h-full flex-col gap-6 bg-gradient-to-b from-[#081B74] to-[#000121] text-white phone:w-full phone:p-6 smTablet:w-full smLaptop:p-10">
            <div className="text-wrapper overflow-hidden">
              <p className="text-3 font-poppins font-semibold tracking-wide text-[#F3F4F6] phone:text-[min(4vw,4vh)] smTablet:text-[min(2.5vw,2.5vh)] smLaptop:text-[min(3vw,3vh)]">
                Quantitative Research & Strategy Development
              </p>
            </div>
            <motion.div
              whileInView={"visible"}
              initial={"hidden"}
              variants={items}
              className="text-4 font-poppins text-[#F3F4F6]/90 phone:text-[min(3vh,3vw)] smTablet:text-[min(1.8vh,1.8vw)] smLaptop:text-[min(2vw,2vh)]"
            >
              Leveraging cutting-edge quantitative methods, our team designs and
              refines proprietary alpha-generating strategies. We integrate deep
              market insights with innovative data analytics to craft strategies
              that consistently outperform benchmarks, adapting to market
              dynamics with agility.
            </motion.div>
          </div>
          <div className="flex min-h-full flex-col gap-6 bg-gradient-to-b from-[#081B74] to-[#000121] text-white phone:w-full phone:p-6 smTablet:w-full smLaptop:p-10">
            <div className="text-wrapper overflow-hidden">
              <p className="text-3 font-poppins font-semibold tracking-wide text-[#F3F4F6] phone:text-[min(4vw,4vh)] smTablet:text-[min(2.5vw,2.5vh)] smLaptop:text-[min(3vw,3vh)]">
                Compounded Annual Growth Rate (CAGR)
              </p>
            </div>
            <motion.div
              whileInView={"visible"}
              initial={"hidden"}
              variants={items}
              className="text-4 font-poppins text-[#F3F4F6]/90 phone:text-[min(3vh,3vw)] smTablet:text-[min(1.8vh,1.8vw)] smLaptop:text-[min(2vw,2vh)]"
            >
              Our strategies are designed to generate significant alpha,
              consistently outperforming market benchmarks by a wide margin.
              With an alpha value reflecting our ability to deliver returns
              above the market average, we provide clients with exceptional
              long-term growth that redefines success in investment performance.
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageStats;
