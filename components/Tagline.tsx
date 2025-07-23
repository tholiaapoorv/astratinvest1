"use client";
import React, { useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const Tagline = () => {
  const containerMain = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      let typeSplit = new SplitType(".tagline-word", {
        types: ["words", "lines", "chars"],
        tagName: "span",
      });
      gsap
        .timeline({
          onUpdate: () => ScrollTrigger.update(),
        })
        .from(typeSplit.lines, {
          yPercent: 100,
          stagger: 0.3,
          duration: 0.9,
          ease: "power1",
          opacity: 0,
          scrollTrigger: {
            trigger: ".tagline-wrapper",
            start: "top 80%",
            end: "60% center",
            scrub: true,
            // snap: 1,
            //   pin: true,
            // markers: true,
          },
        })
        .from(typeSplit.words, {
          opacity: 0.3,
          duration: 1.1,
          ease: "power1",
          stagger: 0.5,
          scrollTrigger: {
            trigger: ".tagline-wrapper",
            start: "top 80%",
            end: "60% center",
            scrub: true,
            // snap: 1,
            //   pin: true,
            // markers: true,
          },
        });
    },
    { scope: containerMain, dependencies: [] },
  );

  return (
    <div
      ref={containerMain}
      className="tagline-container relative flex w-full items-center justify-center bg-gradient-to-b from-[#000121] via-[#000121] to-black/50 phone:h-fit phone:py-[12vh] phone:pt-[5vh] smTablet:h-fit smTablet:pb-[12vh] smLaptop:h-[100vh] smLaptop:pb-[7vh] smLaptop:pt-[5vh]"
    >
      <div className="tagline-wrapper flex h-full w-[80%] flex-col justify-center text-start phone:items-center phone:gap-6 smTablet:items-center smTablet:gap-10 smLaptop:gap-6">
        <p className="tagline-word overflow-hidden font-poppins text-white/90 phone:text-[min(5vh,5vw)] smTablet:text-[min(3.5vw,3.5vh)] smLaptop:text-[min(6vh,6vw)] laptop:text-[min(5vh,5vw)]">
          <span className="mx-2 font-ivy_thin_italic text-[#e7aeff]">
            AStratinvest
          </span>
          aims for superior
          <span className="mx-2 font-ivy_thin_italic text-[#e7aeff]">
            risk-adjusted returns
          </span>
          through a scientific & mathematical investment model.
        </p>
        <p className="tagline-word overflow-hidden font-poppins text-white/90 phone:text-[min(5vh,5vw)] smTablet:text-[min(3.5vw,3.5vh)] smLaptop:text-[min(6vh,6vw)] laptop:text-[min(5vh,5vw)]">
          We conduct quantitative research with rigorous backtesting utilizing
          high-quality data to identify potential{" "}
          <span className="mx-2 font-ivy_thin_italic text-[#e7aeff]">
            {" "}
            outperformers.{" "}
          </span>
        </p>
        <p className="tagline-word overflow-hidden font-poppins text-white/90 phone:text-[min(5vh,5vw)] smTablet:text-[min(3.5vw,3.5vh)] smLaptop:text-[min(6vh,6vw)] laptop:text-[min(5vh,5vw)]">
          We prioritize robust risk management framework to ensure{" "}
          <span className="mx-2 font-ivy_thin_italic text-[#e7aeff]">
            sustained performance
          </span>
          in Indian capital markets.
        </p>
      </div>
    </div>
  );
};

export default Tagline;
