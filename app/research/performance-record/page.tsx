import React from "react";
import SchemePerformance from "@/components/Graphs/PerformanceRecords/SchemePerformace";
import HPCAGR from "@/components/Graphs/PerformanceRecords/HPCAGR";
import CalenderPerformance from "@/components/Graphs/PerformanceRecords/CalenderPerformance";
import Image from "next/image";
import performanceRecordInvestment from "@/public/graphs/PerformanceRecordInvestment.png";

const Page = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-[5rem] py-16">
      <div className="flex flex-col items-center justify-center gap-[3.5rem]">
        <h1 className="font-poppins font-semibold uppercase tracking-[0.35em] text-[#3959E5] phone:text-[min(4vh,4vw)] smTablet:text-[min(2.35vh,2.35vw)]">
          Performance Record
        </h1>
        <p className="w-[80%] text-pretty text-center font-poppins font-light leading-relaxed tracking-wider text-[#000000] phone:text-[min(3vh,3vw)] smTablet:text-[min(2.1vh,2.1vw)]">
          We&apos;ve consistently outperformed the market, staying resilient
          even when the market dropped. Our strategies ensure stability and
          reliability in all conditions.
        </p>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-10">
        <p className="font-ivy xsPhone:text-[min(4.2vh,4vw)] tablet:text-[min(3vh,3vw)]">
          Scheme Performance as on March 31, 2024
        </p>
        <SchemePerformance />
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-10">
        <p className="font-ivy xsPhone:text-[min(4.2vh,4vw)] tablet:text-[min(3vh,3vw)]">
          Historical Performance (CAGR)
        </p>
        <HPCAGR />
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-10">
        <p className="font-ivy xsPhone:text-[min(4.2vh,4vw)] tablet:text-[min(3vh,3vw)]">
          Calender Year Performance
        </p>
        <CalenderPerformance />
      </div>
      <div className="grid w-full gap-10 px-10 pt-2 xsPhone:grid-cols-1 smLaptop:grid-cols-2">
        <Image
          src={performanceRecordInvestment}
          alt="performanceRecordInvestment Graph"
        />
        <div className="space-y-10 pt-2 font-poppins font-light text-[#000121] opacity-90">
          <p>
            <b>Disclaimer:</b> Our strategies backtested results are provided on
            a calender year basis. Please note that individual portfolio
            performance may vary due to factors such as fund inflow/outflow and
            risk profiles. Performance information is not verification is not
            verified by the regulator.
          </p>
          <p>
            Past performance is not an indicator of future returns. Investment
            is subject to market risks. **The performance data for the scheme
            presented above is unaudited and has not been verified by any
            regulatory authority. It&apos;s important to note that past
            performance is not indicative of future results. The fund-level
            performance is calculated using TWRR (Time-Weighted Rate of Return),
            and individual investor returns may vary based on factors such as
            investment size, tier, fee structure, and the timing of fund
            infusion.. Please refer the link to check AIF Benchmark returns:
            https://www.crisil.com/en/home/what-we-do/financial-products/alternate-investment-funds-benchmarks.html
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
