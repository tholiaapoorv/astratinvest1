"use client";
import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "1. Rigorous Stock Selection:",
    description: (
      <p>
        Our quantitative models screen the Indian stock universe to identify
        opportunities with asymmetric risk-reward profiles. We exclusively
        select stocks with a minimum 3:1 reward-to-risk ratio , ensuring that
        potential gains significantly outweigh downside risks.
      </p>
    ),
  },
  {
    title: "2. Dynamic Position Sizing:",
    description: (
      <p>
        Position sizes are determined by our algorithmic models, which factor in
        stock-specific volatility, market conditions, and overall portfolio
        risk. This approach allows us to maximize exposure to high-conviction
        ideas while maintaining prudent risk levels.
      </p>
    ),
  },
  {
    title: "3. Adaptive Trailing Stop-Losses:",
    description: (
      <p>
        We implement sophisticated trailing stop-loss mechanisms for each
        position. These stops dynamically adjust as stocks appreciate, locking
        in gains while providing room for further upside. This strategy helps us
        to &apos;let our winners run&apos; while systematically minimizing
        potential losses.
      </p>
    ),
  },
  {
    title: "4. Capped Drawdowns:",
    description: (
      <p>
        Our risk management protocols are designed to limit overall portfolio
        drawdowns to levels significantly below industry standards. This is
        achieved through a combination of position sizing, stop-losses, and
        portfolio-level hedging strategies when necessary.
      </p>
    ),
  },
  {
    title: "5. Real-Time Risk Monitoring:",
    description: (
      <p>
        Our quantitative systems continuously monitor both individual positions
        and overall portfolio risk. Any significant changes in stock-specific
        data or broader market conditions trigger immediate risk assessments
        across all holdings.
      </p>
    ),
  },
  {
    title: "6. Macro-Risk Integration:",
    description: (
      <p>
        We incorporate macroeconomic factors and market sentiment indicators
        into our risk models. This allows us to adjust our risk posture
        proactively in response to changing economic conditions or market
        regimes.
      </p>
    ),
  },
  {
    title: "7. Correlation Analysis:",
    description: (
      <p>
        Our models analyze the correlation structure of our holdings to ensure
        proper diversification and to avoid concentration risks that may not be
        apparent when examining individual positions in isolation.
      </p>
    ),
  },
  {
    title: "8. Stress Testing and Scenario Analysis:",
    description: (
      <p>
        We regularly conduct stress tests on our portfolio using historical
        scenarios and hypothetical market events. This helps us understand
        potential vulnerabilities and adjust our positioning accordingly.
      </p>
    ),
  },
  {
    title: "9. Liquidity Risk Management:",
    description: (
      <p>
        Given the unique characteristics of the Indian market, we pay special
        attention to liquidity risk. Our models factor in trading volumes and
        potential market impact to ensure we can exit positions efficiently if
        needed.
      </p>
    ),
  },
  {
    title: "10. Continuous Model Refinement:",
    description: (
      <p>
        Our quantitative researchers constantly refine and enhance our risk
        models based on new data and evolving market dynamics. This iterative
        process ensures our risk management strategies remain at the cutting
        edge.
      </p>
    ),
  },
];
const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="my-10 flex flex-col items-center justify-center gap-[3.5rem] py-6"
    >
      <div className="flex flex-col items-center justify-center gap-[3.5rem]">
        <h1 className="text-center font-poppins font-semibold uppercase tracking-[0.35em] text-[#3959E5] phone:text-[min(4vh,4vw)] smTablet:text-[min(2.35vh,2.35vw)]">
          Intelligent Risk Management
        </h1>
        <p className="w-[80%] text-pretty text-center font-poppins font-light leading-relaxed tracking-wider text-[#000000] phone:text-[min(3vh,3vw)] smTablet:text-[min(2.1vh,2.1vw)]">
          At AstratInvest, we believe that superior risk management is the key
          to consistent, long-term outperformance in the Indian equity markets.
          Our proprietary quantitative model integrates risk management at every
          step of the investment process, ensuring that we maintain a balanced
          risk-reward profile across our portfolio.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-[3.5rem]">
        <p className="text-center font-poppins font-extralight phone:text-[min(7vh,7vw)] smTablet:text-[min(4.5vh,4.5vw)]">
          Key{" "}
          <span className="font-ivy_thin_italic italic text-[#3959E5]">
            Features
          </span>
        </p>
        <div className="grid w-[85%] flex-col items-start justify-center gap-[3rem] phone:grid-cols-1 smLaptop:grid-cols-2">
          {features.map((item, idx) => {
            return (
              <div
                key={idx}
                className="flex h-full flex-col items-start justify-start gap-6 rounded-lg bg-[#fafafa] p-10"
              >
                <h2 className="font-ivy tracking-widest text-[#3959E5] phone:text-[min(5vh,5vw)] smTablet:text-[min(3.5vh,3.5vw)]">
                  {item.title}{" "}
                </h2>
                <div className="text-pretty text-start font-poppins font-light leading-relaxed tracking-wider text-[#000000] phone:text-[min(3vh,3vw)] smTablet:text-[min(2.1vh,2.1vw)]">
                  {item.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default page;
