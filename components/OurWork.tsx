import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { ArrowUpRight, Globe, Globe2 } from "lucide-react";
import { LuSparkle } from "react-icons/lu";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import smple from "@/public/White_papers.jpg";
import blog1 from "@/public/blog1.jpeg";
import blog2 from "@/public/blog2.jpeg";
import blog3 from "@/public/blog3.jpeg";

function OurWork() {
  const router = useRouter();
  return (
    <>
      <div className="hor-container w-full h-fit text-black bg-[#000121] relative overflow-hidden py-10">
        <div className="hor-container-wrap w-fit  smTablet:gap-10 phone:gap-6  flex relative ">
          <div className="hor-div-work smLaptop:w-[70vw] phone:w-[100vw] h-auto">
            <p className="absolute bottom-0 h-fit w-full leading-tight anim-work text-white font-ivy phone:text-[min(20vh,20vw)] smTablet:text-[10rem] smLaptop:pl-[5rem]">
              Our <br className="" />
              Blogs
            </p>
          </div>

          <div className="hor-div flex flex-col justify-start items-center phone:w-[100vw] smTablet:w-[80vw] smTablet:max-w-[50rem] smLaptop:max-w-[40rem] smTablet:h-[75vh] smTablet:max-h-[40rem] smLaptop:max-h-[37rem] phone:h-[60vh] rounded-xl bg-white bg-clip-padding  ">
            <div className=" flex  flex-col justify-start items-start h-full gap-1">
              <div className="w-full h-auto">
                <Image src={blog1} alt="" className="w-full h-auto" />
              </div>
              <div className="flex flex-col justify-start items-start h-full px-6">
                <div>
                  <p className="font-ivy text-[min(10vw,10vh)] font-thin text-[#3959e6]">
                    01.
                  </p>
                </div>
                <div>
                  <p className="font-poppins text-[min(4vw,4vh)] font-thin text-[#3959e6]">
                    Portfolio Management
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="hor-div flex flex-col justify-start items-center phone:w-[100vw] smTablet:w-[80vw] smTablet:max-w-[50rem] smLaptop:max-w-[40rem] smTablet:h-[75vh] smTablet:max-h-[40rem] smLaptop:max-h-[37rem] phone:h-[60vh] rounded-xl bg-white bg-clip-padding  ">
            <div className=" flex  flex-col justify-start items-start h-full gap-1">
              <div className="w-full h-auto">
                <Image src={blog2} alt="" className="w-full h-auto" />
              </div>
              <div className="flex flex-col justify-start items-start h-full px-6">
                <div>
                  <p className="font-ivy text-[min(10vw,10vh)] font-thin text-[#3959e6]">
                    02.
                  </p>
                </div>
                <div>
                  <p className="font-poppins text-[min(4vw,4vh)] font-thin text-[#3959e6]">
                    Portfolio Management
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hor-div flex flex-col justify-start items-center phone:w-[100vw] smTablet:w-[80vw] smTablet:max-w-[50rem] smLaptop:max-w-[40rem] smTablet:h-[75vh] smTablet:max-h-[40rem] smLaptop:max-h-[37rem] phone:h-[60vh] rounded-xl bg-white bg-clip-padding  ">
            <div className=" flex  flex-col justify-start items-start h-full gap-1">
              <div className="w-full h-auto">
                <Image src={blog3} alt="" className="w-full h-auto" />
              </div>
              <div className="flex flex-col justify-start items-start h-full px-6">
                <div>
                  <p className="font-ivy text-[min(10vw,10vh)] font-thin text-[#3959e6]">
                    03.
                  </p>
                </div>
                <div>
                  <p className="font-poppins text-[min(4vw,4vh)] font-thin text-[#3959e6]">
                    Portfolio Management
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="hor-div smTablet:px-16 phone:px-10 smLaptop:px-0 pt-4 pb-10 flex flex-col justify-start items-center phone:w-[100vw] smTablet:w-[80vw] smTablet:max-w-[50rem] smLaptop:w-fit smTablet:h-fit smLaptop:max-h-fit smLaptop:h-fit phone:h-full rounded-xl bg-[#f5f7fd] bg-clip-padding  ">
            <div className=" flex justify-start items-start h-full gap-6">
              <div className="w-[50%] h-fit">
                <Image src={smple} alt="" className="w-full h-auto" />
              </div>
              <div className="flex flex-col justify-center items-start h-full ">
                <div>
                  <p className="font-ivy text-[min(10vw,10vh)] font-thin text-[#3959e6]">
                    01.
                  </p>
                </div>
                <div>
                  <p className="font-poppins text-[min(4vw,4vh)] font-thin text-[#3959e6]">
                    Portfolio Management
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          {/* flashai */}
          {/* <div className="hor-div smTablet:px-16 phone:px-10 pt-6 pb-10 flex flex-col justify-start items-center phone:w-[100vw] smTablet:w-[80vw] smTablet:max-w-[50rem] smLaptop:max-w-[40rem] smTablet:h-fit smLaptop:max-h-fit smLaptop:h-fit phone:h-full rounded-xl bg-[#EBFBD9] bg-clip-padding  ">
            <div
              onClick={() => {
                router.push("https://www.flash-ai.online");
              }}
              className="cursor-pointer">
              <div className="w-full flex justify-between items-center">
                <p className="anim text-black font-warsaw text-[min(10vh,10vw)] ">
                  FlashAI
                </p>
                <ArrowUpRight className="text-black smTablet:w-[7rem] phone:w-[2rem] h-auto" />
              </div>
              <div className="flex flex-col gap-12">
                <div className="flex w-full justify-items-center gap-3 ">
                  <div className="flex justify-items-center h-full">
                    <LuSparkle className="bg-transparent text-black w-6 h-auto" />
                  </div>
                  <p className="text-black font-poppins font-bold text-xl">
                    Saas Solution
                  </p>
                </div>
                <p className="text-black font-poppins">
                  We crafted an AI-powered SaaS web app to streamline
                  developer&apos;s programming tasks, we ensured precise
                  responses and token management. Integrated with Stripe
                  Payments Gateway, our subscription model offers seamless
                  access to premium features. We implemented an API Rate Limiter
                  for fairness. Features include Code Interpreter, Debugger,
                  Git/Bash command finder, and Code Generation.
                </p>
                <div
                  onClick={() => {
                    router.push("https://www.flash-ai.online");
                  }}>
                  <button className="text-black  -black rounded-full p-4 font-semibold smTablet:text-[min(2.5vh,2.5vw)] phone:text-sm  font-poppins tracking-wider flex justify-start items-center">
                    <Globe className="text-black mr-4" /> www.flash-ai.online
                  </button>
                </div>
              </div>
            </div>
          </div> */}

          {/* bloodf */}
          {/* <div
            onClick={() => {
              router.push("/bloodfinder");
            }}
            className="hor-div smTablet:px-16 phone:px-10 pt-6 pb-10 flex flex-col justify-start items-center phone:w-[100vw] smTablet:w-[80vw] smTablet:max-w-[50rem] smLaptop:max-w-[40rem] smTablet:h-fit smLaptop:max-h-fit smLaptop:h-fit laptop:max-h-full phone:h-full rounded-xl bg-[#EBFBD9] bg-clip-padding  ">
            <div className="cursor-pointer">
              <div className="w-full flex justify-between items-center">
                <p className="anim text-black font-warsaw text-[min(10vh,10vw)] laptop:whitespace-nowrap">
                  Blood Finder
                </p>
                <ArrowUpRight className="text-black smTablet:w-[7rem] phone:w-[2rem] h-auto" />
              </div>
              <div className="flex flex-col gap-12">
                <div className="flex w-full justify-items-center gap-3 ">
                  <div className="flex justify-items-center h-full">
                    <LuSparkle className="bg-transparent text-black w-6 h-auto" />
                  </div>
                  <p className="text-black font-poppins font-bold text-xl">
                    WebApp
                  </p>
                </div>
                <p className="text-black font-poppins">
                  Our agency streamlined blood procurement in India with a
                  user-friendly app and robust backend. Leveraging Google Maps
                  API, we located nearby blood banks. Secure transactions were
                  ensured via Stripe Payment Gateway. Authentication was
                  enhanced with OAuth social login and Email Magic Link login
                  using Auth.JS. Our goal: making blood procurement efficient
                  and accessible through innovation.
                </p>
                <div
                  onClick={() => {
                    router.push("/bloodfinder");
                  }}>
                  <button className="text-black  -black rounded-full p-4 font-semibold smTablet:text-[min(2.5vh,2.5vw)] phone:text-sm  font-poppins tracking-wider flex justify-start items-center">
                    <Globe className="text-black mr-4" /> Will be Live soon..
                  </button>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default OurWork;
