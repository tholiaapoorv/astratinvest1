"use client";
import { useGSAP } from "@gsap/react";
import Spline from "@splinetool/react-spline";
import { Variants } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import SplitType from "split-type";
import { motion } from "framer-motion";
import Image from "next/image";
import splineModel from "@/public/spline/splineModel.png";
gsap.registerPlugin(ScrollTrigger, useGSAP);
const SplineScene = () => {
  const mainContainerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({});
      const splitType = new SplitType(".quant-model-text", {
        types: ["words", "lines"],
      });
      const splitTypeGhost = new SplitType(".quant-model-text-ghost", {
        types: ["words", "lines"],
      });

      console.log(splitType.lines);

      tl.fromTo(
        splitType.words,
        { opacity: 0 },
        {
          opacity: 1,

          ease: "none",
          duration: 50,
          stagger: { each: 5 },
          scrollTrigger: {
            trigger: ".spline-scene-container",
            start: "top 80%",
            end: "bottom center",
            scrub: true,
          },
        },
      );
    },
    { scope: mainContainerRef },
  );
  return (
    <div
      ref={mainContainerRef}
      className={
        "spline-scene-wrap relative flex w-screen flex-col items-center justify-start overflow-clip phone:h-[80vh] smLaptop:h-[120vh]"
      }
    >
      <div
        className={
          "spline-scene-container relative top-[5.5rem] flex items-center justify-center"
        }
      >
        <div className="spline-scene absolute"></div>
        <div className="quant-model-text-wrapper relative w-[80%] text-center">
          <p
            className={
              "quant-model-text overflow-hidden font-poppins leading-relaxed tracking-wide text-white phone:text-[min(4vw,4vh)] smTablet:text-[min(2.5vw,2.5vh)] smLaptop:text-[min(4vw,4vh)]"
            }
          >
            Our investment approach relies on a
            <span className="mx-2 font-ivy_thin_italic text-[#e7aeff]">
              sophisticated quantitative system
            </span>
            that processes vast financial data to evaluate opportunities and
            risks. This powerhouse integrates advanced mathematical and
            financial engineering techniques to
            <span className="mx-2 font-ivy_thin_italic text-[#e7aeff]">
              identify investments
            </span>
            and
            <span className="mx-2 font-ivy_thin_italic text-[#e7aeff]">
              manage portfolio risks
            </span>
            in real-time.
          </p>
          <p
            className={
              "quant-model-text-ghost absolute top-0 z-[-1] overflow-hidden font-poppins leading-relaxed tracking-wide text-white/10 phone:text-[min(4vw,4vh)] smTablet:text-[min(2.5vw,2.5vh)] smLaptop:text-[min(4vw,4vh)]"
            }
          >
            Our investment approach relies on a
            <span className="mx-2 font-ivy_thin_italic text-[#e7aeff]/10">
              sophisticated quantitative system
            </span>
            that processes vast financial data to evaluate opportunities and
            risks. This powerhouse integrates advanced mathematical and
            financial engineering techniques to
            <span className="mx-2 font-ivy_thin_italic text-[#e7aeff]/10">
              identify investments
            </span>
            and
            <span className="mx-2 font-ivy_thin_italic text-[#e7aeff]/10">
              manage portfolio risks
            </span>
            in real-time.
          </p>
        </div>
      </div>

      {/* <Spline
        className={"spline-main-scene z-[-2]"}
        scene="https://prod.spline.design/fgJ6cS4W1-Vnsk78/scene.splinecode"
      /> */}

      <div className="absolute z-[-1] xsPhone:bottom-0 xsPhone:w-[180vw] tablet:w-[150vw] smLaptop:bottom-[-3rem] smLaptop:w-full">
        <Image src={splineModel} alt="" className="w-full object-cover" />
      </div>
    </div>
  );
};

export default SplineScene;
