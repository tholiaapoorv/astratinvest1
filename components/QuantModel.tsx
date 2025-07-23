"use client";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animatedBeams";
import React, { forwardRef, useRef } from "react";
import { BarChart2, DollarSign, Euro, Globe, Wheat } from "lucide-react";
import OrbitingCircles from "./ui/orbiting-circles";
import { BiRupee, BiYen } from "react-icons/bi";
import { BorderBeam } from "./ui/border-beam";
import { motion } from "framer-motion";

// eslint-disable-next-line react/display-name
const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-border bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

export default function QuantModel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const investUniv = useRef<HTMLDivElement>(null);
  const div8Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="my-10 flex flex-col items-center justify-center gap-[3.5rem] py-6"
      >
        <div className="flex flex-col items-center justify-center gap-[3.5rem]">
          <h1 className="font-poppins font-semibold uppercase tracking-[0.35em] text-[#3959E5] phone:text-[min(4vh,4vw)] smTablet:text-[min(2.35vh,2.35vw)]">
            Quantitative Model
          </h1>
          <p className="w-[80%] text-pretty text-center font-poppins font-light leading-relaxed tracking-wider text-[#000000] phone:text-[min(3vh,3vw)] smTablet:text-[min(2.1vh,2.1vw)]">
            We use an amalgamation of proprietary models to prepare a complete
            and holistic system. Our models churn vast amount of data for every
            stock for a sufficient duration to avoid data inaccuracy and
            marginal errors.
          </p>
        </div>

        {/* Model */}
        <div
          className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-transparent phone:mb-[3.5rem] phone:mt-0 smTablet:mb-[2.5rem] smLaptop:my-[3.5rem]"
          ref={containerRef}
        >
          <div className="flex h-full items-center justify-between phone:w-full phone:flex-col phone:gap-[6rem] smTablet:w-[90%] smLaptop:flex-row smLaptop:gap-10">
            {/* <div
          ref={investUniv}
          className="flex relative z-[10] rounded-lg flex-col  smTablet:p-10 phone:p-6 phone:text-sm bg-[#3959e6] justify-center text-wrap text-center gap-2 text-white font-poppins">
          <Globe className="absolute w-full h-auto z-[-1] opacity-10" />
          Investable
          <br /> Universe
        </div> */}
            <div
              ref={investUniv}
              className="relative z-[10] flex h-fit w-fit items-center justify-center overflow-hidden rounded-lg phone:p-[7rem] smLaptop:p-[5rem]"
            >
              <span className="relative z-[10] flex flex-col justify-center gap-2 text-wrap rounded-lg text-center font-poppins font-semibold uppercase tracking-widest text-[#3959e6] phone:p-6 phone:text-[min(4vh,4vw)] smTablet:p-10 smTablet:text-[min(2.35vh,2.35vw)]">
                <Globe className="absolute left-[50%] top-[50%] z-[-1] h-auto w-[7rem] translate-x-[-50%] translate-y-[-50%] text-[#dde1fac1]" />
                Investible
                <br /> Universe
              </span>

              {/* Inner Circles */}
              <OrbitingCircles
                className="h-[30px] w-[30px] border-none bg-transparent"
                duration={20}
                delay={20}
                radius={80}
              >
                <BiRupee className="h-auto w-10 text-[#3959e6]" />
              </OrbitingCircles>
              <OrbitingCircles
                className="h-[30px] w-[30px] border-none bg-transparent"
                duration={20}
                delay={10}
                radius={80}
              >
                <DollarSign className="h-auto w-10 text-[#3959e6]" />
              </OrbitingCircles>

              {/* Outer Circles (reverse) */}
              <OrbitingCircles
                className="h-[40px] w-[40px] border-none bg-transparent"
                radius={130}
                duration={20}
                delay={10}
                reverse
              >
                <Euro className="h-auto w-10 text-[#3959e6]" />
              </OrbitingCircles>
              <OrbitingCircles
                className="h-[40px] w-[40px] border-none bg-transparent"
                radius={130}
                duration={20}
                delay={20}
                reverse
              >
                <BiYen className="h-auto w-10 text-[#3959e6]" />
              </OrbitingCircles>
            </div>

            <div className="flex justify-center gap-10 phone:flex-row smLaptop:flex-col">
              <div
                style={{
                  boxShadow:
                    "20px 20px 46px #aeb5e956,-10px -10px 20px #f9f9f9",
                }}
                className="relative z-[10] flex items-center justify-center rounded-lg border border-[#3959e6]/5 bg-[#ebf0fa] text-center font-poppins tracking-widest text-[#3959e6] phone:p-4 phone:text-[min(3vh,3vw)] smTablet:p-4 smTablet:text-[min(2vh,2vw)] smLaptop:text-[min(2vh,2vw)]"
                ref={div1Ref}
              >
                <BorderBeam />
                MSQ
              </div>
              <div
                style={{
                  boxShadow:
                    "20px 20px 46px #aeb5e956,-10px -10px 20px #f9f9f9",
                }}
                className="relative z-[10] flex items-center justify-center rounded-lg border border-[#3959e6]/5 bg-[#ebf0fa] text-center font-poppins tracking-widest text-[#3959e6] phone:p-4 phone:text-[min(3vh,3vw)] smTablet:p-4 smTablet:text-[min(2vh,2vw)] smLaptop:text-[min(2vh,2vw)]"
                ref={div2Ref}
              >
                <BorderBeam />
                VSQ
              </div>
              <div
                style={{
                  boxShadow:
                    "20px 20px 46px #aeb5e956,-10px -10px 20px #f9f9f9",
                }}
                className="relative z-[10] flex items-center justify-center rounded-lg border border-[#3959e6]/5 bg-[#ebf0fa] text-center font-poppins tracking-widest text-[#3959e6] phone:p-4 phone:text-[min(3vh,3vw)] smTablet:p-4 smTablet:text-[min(2vh,2vw)] smLaptop:text-[min(2vh,2vw)]"
                ref={div3Ref}
              >
                <BorderBeam />
                S1+S2
              </div>
            </div>

            <div
              ref={div6Ref}
              style={{
                boxShadow: "20px 20px 46px #aeb5e956,-10px -10px 20px #f9f9f9",
              }}
              className="relative z-[10] flex min-h-full flex-col justify-center gap-2 text-wrap rounded-lg bg-[#ebf0fa] text-center font-poppins font-semibold uppercase tracking-widest text-[#3959e6] xsPhone:p-6 xsPhone:text-sm smTablet:p-6 tablet:text-base"
            >
              {/* <ShineBorder
                color={["#3959e6"]}
                className="h-full w-full bg-[#ebf0fa] py-6 text-[#3959e6]"
              > */}
              High Alpha <br />
              Investible <br />
              Opportunities
              {/* </ShineBorder> */}
            </div>

            <div className="flex flex-col justify-center">
              <div
                style={{
                  boxShadow:
                    "20px 20px 46px #aeb5e956,-10px -10px 20px #f9f9f9",
                }}
                className="relative z-[10] flex items-center justify-center rounded-lg border border-[#3959e6]/5 bg-[#ebf0fa] text-center font-poppins tracking-widest text-[#3959e6] phone:p-4 phone:text-[min(3vh,3vw)] smTablet:p-4 smTablet:text-[min(2vh,2vw)] smLaptop:text-[min(2vh,2vw)]"
                ref={div7Ref}
              >
                <BorderBeam />
                RRQ
              </div>
            </div>

            <div
              ref={div8Ref}
              style={{
                boxShadow: "20px 20px 46px #aeb5e956,-10px -10px 20px #f9f9f9",
              }}
              className="relative z-[10] flex min-h-full animate-gradient flex-col justify-center gap-2 text-wrap rounded-lg bg-[#3959e6] text-center font-poppins font-semibold uppercase tracking-widest text-white phone:p-6 phone:text-sm smTablet:p-8 tablet:text-base"
            >
              <BarChart2 className="absolute z-[-1] h-auto w-full opacity-10" />
              <span className="">
                Invested <br />
                AstratInvest <br />
                Stocks
              </span>
            </div>
          </div>
          {/* Laptop Beams */}
          <div className="phone:hidden smLaptop:block">
            <AnimatedBeam
              delay={0}
              duration={8}
              containerRef={containerRef}
              fromRef={investUniv}
              toRef={div1Ref}
              curvature={50}
            />
            <AnimatedBeam
              delay={0}
              duration={8}
              containerRef={containerRef}
              fromRef={investUniv}
              toRef={div2Ref}
            />
            <AnimatedBeam
              delay={0}
              duration={8}
              containerRef={containerRef}
              fromRef={investUniv}
              toRef={div3Ref}
              curvature={-50}
            />
            <AnimatedBeam
              delay={0.3}
              duration={8}
              containerRef={containerRef}
              fromRef={div1Ref}
              toRef={div6Ref}
            />
            <AnimatedBeam
              delay={0.3}
              duration={8}
              containerRef={containerRef}
              fromRef={div2Ref}
              toRef={div6Ref}
            />
            <AnimatedBeam
              delay={0.3}
              duration={8}
              containerRef={containerRef}
              fromRef={div3Ref}
              toRef={div6Ref}
            />

            <AnimatedBeam
              delay={0.5}
              duration={8}
              containerRef={containerRef}
              fromRef={div6Ref}
              toRef={div7Ref}
            />
            <AnimatedBeam
              delay={0.7}
              duration={8}
              containerRef={containerRef}
              fromRef={div7Ref}
              toRef={div8Ref}
            />
          </div>
          {/* Phone Beams */}
          <div className="phone:block smLaptop:hidden">
            <AnimatedBeam
              delay={0}
              duration={8}
              containerRef={containerRef}
              fromRef={investUniv}
              toRef={div1Ref}
              reverse
            />
            <AnimatedBeam
              delay={0}
              duration={8}
              containerRef={containerRef}
              fromRef={investUniv}
              toRef={div2Ref}
              reverse
            />
            <AnimatedBeam
              delay={0}
              duration={8}
              containerRef={containerRef}
              fromRef={investUniv}
              toRef={div3Ref}
            />
            <AnimatedBeam
              delay={0.3}
              duration={8}
              containerRef={containerRef}
              fromRef={div1Ref}
              toRef={div6Ref}
            />
            <AnimatedBeam
              delay={0.3}
              duration={8}
              containerRef={containerRef}
              fromRef={div2Ref}
              toRef={div6Ref}
            />
            <AnimatedBeam
              delay={0.3}
              duration={8}
              containerRef={containerRef}
              fromRef={div3Ref}
              toRef={div6Ref}
              reverse
            />

            <AnimatedBeam
              delay={0.5}
              duration={8}
              containerRef={containerRef}
              fromRef={div6Ref}
              toRef={div7Ref}
              reverse
            />
            <AnimatedBeam
              delay={0.7}
              duration={8}
              containerRef={containerRef}
              fromRef={div7Ref}
              toRef={div8Ref}
              reverse
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-[3.5rem]">
          <p className="text-center font-poppins font-extralight phone:text-[min(7vh,7vw)] smTablet:text-[min(4.5vh,4.5vw)]">
            Key{" "}
            <span className="font-ivy_thin_italic italic text-[#3959E5]">
              Components
            </span>
          </p>
          <div className="grid w-[85%] flex-col items-start justify-center gap-[3rem] phone:grid-cols-1 smLaptop:grid-cols-2">
            <div className="flex h-full flex-col items-start justify-start gap-6 rounded-lg bg-[#fafafa] p-10">
              <h2 className="font-ivy tracking-widest text-[#3959E5] phone:text-[min(5vh,5vw)] smTablet:text-[min(3.5vh,3.5vw)]">
                1. MSQ:{" "}
              </h2>
              <h3 className="font-ivy_thin_italic text-[#3959E5] xsPhone:text-[min(4vh,4vw)] tablet:text-[min(2.5vh,2.5vw)]">
                Market Strength Quantum
              </h3>
              <p className="text-pretty text-start font-poppins font-light leading-relaxed tracking-wider text-[#000000] phone:text-[min(3vh,3vw)] smTablet:text-[min(2.1vh,2.1vw)]">
                This is a complex algorithmic model that measure the complete
                market strength to help us decide the exposure we should have in
                the markets.
              </p>
            </div>

            <div className="flex h-full flex-col items-start justify-start gap-6 rounded-lg bg-[#fafafa] p-10">
              <h2 className="font-ivy tracking-widest text-[#3959E5] phone:text-[min(5vh,5vw)] smTablet:text-[min(3.5vh,3.5vw)]">
                2. VSQ:{" "}
              </h2>
              <h3 className="font-ivy_thin_italic text-[#3959E5] xsPhone:text-[min(4vh,4vw)] tablet:text-[min(2.5vh,2.5vw)]">
                Volatility Strength Quantum
              </h3>
              <p className="text-pretty text-start font-poppins font-light leading-relaxed tracking-wider text-[#000000] phone:text-[min(3vh,3vw)] smTablet:text-[min(2.1vh,2.1vw)]">
                This helps us to plan our exposure in various market caps like
                large caps, mid caps or small caps. There is always a tradeoff
                between risk and returns and we want to ensure that we maximise
                our returns with minimum risk.
              </p>
            </div>

            <div className="flex h-full flex-col items-start justify-start gap-6 rounded-lg bg-[#fafafa] p-10">
              <h2 className="font-ivy tracking-widest text-[#3959E5] phone:text-[min(5vh,5vw)] smTablet:text-[min(3.5vh,3.5vw)]">
                3. S1 + S2:{" "}
              </h2>
              <h3 className="font-ivy_thin_italic text-[#3959E5] xsPhone:text-[min(4vh,4vw)] tablet:text-[min(2.5vh,2.5vw)]">
                Stage 1 and Stage 2
              </h3>
              <p className="text-pretty text-start font-poppins font-light leading-relaxed tracking-wider text-[#000000] phone:text-[min(3vh,3vw)] smTablet:text-[min(2.1vh,2.1vw)]">
                S1+S2 is our stage 1 stage 2 quant models which identify gets
                selected from the entire listed universe based on our
                proprietary 52 parameters designed into one system that run on
                vast amount of data
                <br />
                <br />
                There are 8 additional parameters that do a fundamental hygiene
                check on the stocks.
              </p>
            </div>

            <div className="flex h-full flex-col items-start justify-start gap-6 rounded-lg bg-[#fafafa] p-10">
              <h2 className="font-ivy tracking-widest text-[#3959E5] phone:text-[min(5vh,5vw)] smTablet:text-[min(3.5vh,3.5vw)]">
                4. RRQ:{" "}
              </h2>
              <h3 className="font-ivy_thin_italic text-[#3959E5] xsPhone:text-[min(4vh,4vw)] tablet:text-[min(2.5vh,2.5vw)]">
                Risk Reward Quantum
              </h3>
              <p className="text-pretty text-start font-poppins font-light leading-relaxed tracking-wider text-[#000000] phone:text-[min(3vh,3vw)] smTablet:text-[min(2.1vh,2.1vw)]">
                The entire strategy&apos;s risk reward is systematically
                measured to limit the drawdowns and downside risk.
                <br />
                <br /> Every stock that get&apos;s filtered through our other
                models get&apos;s a risk reward number based on price wave
                analysis and we select the ones that fit our thresholds
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
