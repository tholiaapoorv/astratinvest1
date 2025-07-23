"use client";
import React, {
  CSSProperties,
  MouseEventHandler,
  ReactNode,
  useRef,
  useState,
} from "react";
import Spline from "@splinetool/react-spline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ChevronDown } from "lucide-react";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const Hero = () => {
  const containerMain = useRef<HTMLDivElement>(null);

  return (
    <div className="h-fit w-screen" ref={containerMain}>
      <div className="relative h-screen bg-[#000121]">
        <div className="absolute mt-[8rem] w-full text-center">
          <div className="font-poppins uppercase text-white phone:text-[min(3.6vh,3.6vw)] phone:tracking-[0.3em] smTablet:text-[min(2vh,2vw)] smTablet:tracking-[0.5em]">
            Quantitative Excellence with{" "}
            <br className="phone:block smLaptop:hidden" />
            Indian Ingenuity
          </div>
        </div>
        {/* Center Taglines */}

        <Carousel
          autoPlay
          animationHandler={"fade"}
          stopOnHover={false}
          infiniteLoop
          interval={6000}
          showStatus={false}
          swipeable={false}
          transitionTime={550}
          showIndicators={false}
          showThumbs={false}
          className="absolute left-[50%] top-[50%] w-full translate-x-[-50%] translate-y-[-50%]"
        >
          <div className="flex flex-col items-center justify-center gap-6">
            <h1 className="hero-tagline-2 text-pretty text-center font-ivy leading-tight text-white phone:text-[min(12.5vw,12.5vh)] smTablet:text-[min(11vw,11vh)]">
              Unlock Opportunities{" "}
              <br className="phone:block smLaptop:hidden" />
              with Quant
            </h1>
            <h4 className="hero-desc-2 text-pretty text-center font-poppins font-extralight leading-relaxed tracking-wide text-white phone:w-[80%] phone:text-[min(4.4vw,4.4vh)] smTablet:w-full smTablet:text-[min(3.4vw,3.4vh)]">
              Offer extreme personalization, bespoke research,
              <br />
              tailored to Indian markets.
            </h4>
          </div>

          <div className="flex flex-col items-center justify-center gap-6">
            <h1 className="hero-tagline-1 text-pretty text-center font-ivy leading-tight text-white phone:text-[min(12.5vw,12.5vh)] smTablet:text-[min(11vw,11vh)]">
              Maximize <br className="phone:block smLaptop:hidden" />
              Risk Adjusted Returns
            </h1>
            <h4 className="hero-desc-1 text-pretty text-center font-poppins font-extralight leading-relaxed tracking-wide text-white phone:w-[80%] phone:text-[min(4.4vw,4.4vh)] smTablet:w-full smTablet:text-[min(3.4vw,3.4vh)]">
              Maximize returns through quantitative models, balancing <br />
              alphas and risk exposure.
            </h4>
          </div>

          <div className="flex flex-col items-center justify-center gap-6">
            <h1 className="hero-tagline-2 text-pretty text-center font-ivy leading-tight text-white phone:text-[min(12.5vw,12.5vh)] smTablet:text-[min(11vw,11vh)]">
              Tailored for India, <br className="phone:block smLaptop:hidden" />
              Fueled by Data
            </h1>
            <h4 className="hero-desc-2 text-pretty text-center font-poppins font-extralight leading-relaxed tracking-wide text-white phone:w-[80%] phone:text-[min(4.4vw,4.4vh)] smTablet:w-full smTablet:text-[min(3.4vw,3.4vh)]">
              Capitalize on opportunities with
              <br />
              quant-driven investments.
            </h4>
          </div>
        </Carousel>
        <div className="absolute bottom-[3rem] flex w-full flex-col items-center justify-center gap-2 text-center">
          <div className="font-poppins tracking-widest text-white phone:text-[min(3.6vh,3.6vw)] smTablet:text-[min(2vh,2vw)]">
            scroll down
          </div>
          <ChevronDown className="text-white" />
        </div>
        <Spline scene="https://prod.spline.design/p3X3DxHpnkcXzYlu/scene.splinecode" />
      </div>
    </div>
  );
};

export default Hero;
