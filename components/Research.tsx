"use client";
import Image from "next/image";
import research1 from "@/public/research1.svg";
import researchBg from "@/public/UntitledResearch.svg";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

const buttons = [
  {
    title: "Quantitative Model",
    href: "/quantitative-model",
  },

  // {
  //   title: "Performance Record",
  //   href: "/performance-record",
  // },
  {
    title: "Case Studies",
    href: "/case-studies",
  },
  {
    title: "Risk Management",
    href: "/risk-management",
  },
];

const Research = () => {
  const pathname = usePathname();

  return (
    <div className="mt-[5rem] flex h-full w-screen flex-col items-center justify-center bg-transparent">
      <Image
        src={researchBg}
        alt="dp"
        className="absolute z-[-1] h-auto w-full phone:mt-0 smLaptop:mt-[30rem]"
      />
      <div className="flex flex-col items-center justify-center gap-0">
        <Image
          src={research1}
          alt="dp"
          className="mt-[3rem] h-auto w-[4.2rem]"
        />

        <div className="flex flex-col items-center justify-center gap-2">
          <p className="font-ivy text-[min(11.5vh,11.5vw)] text-[#FFFFFF]">
            Research
          </p>
          <p className="w-[80%] text-center font-poppins font-extralight leading-relaxed tracking-wider text-[#FFFFFF] phone:text-[min(3.2vh,3.2vw)] smTablet:text-[min(2.3vh,2.3vw)]">
            Let us be the compass that guides you towards effective portfolio
            management. Harness real-time data and cutting-edge analytics to
            uncover investment insights, evaluate market trends, and grow your
            capital sustainably.
          </p>
        </div>
      </div>
      <div className="no-scrollbar mt-3 flex w-[80%] items-center justify-start gap-6 overflow-x-scroll p-6">
        {buttons.map((item, index) => {
          return (
            <Link
              href={`${process.env.NEXT_PUBLIC_APP_URL}/research/${item.href}`}
              key={index}
              className={cn(
                "flex h-[4rem] w-[70%] items-center justify-center whitespace-nowrap rounded-full bg-[#07335B] px-9 py-4 font-poppins font-semibold tracking-wider text-[#FFFFFF] transition hover:bg-[#4D75FD] phone:text-[min(3vh,3vw)] smTablet:text-[min(1.8vh,1.8vw)]",
                pathname.includes(item.href) && "bg-[#4D75FD]",
              )}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Research;
