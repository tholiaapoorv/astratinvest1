"use client";
import React, { useEffect, useState } from "react";
import { TbArrowLeft, TbArrowRight, TbArrowUpRight } from "react-icons/tb";
import { motion } from "framer-motion";
import axios from "axios";
import { caseStudy } from "@/types";
import SanityImage from "@/components/ui/SanityImage";
import { Separator } from "@radix-ui/react-separator";
import { PortableText, PortableTextComponents } from "next-sanity";
import Link from "next/link";

import { getImageDimensions } from "@sanity/asset-utils";
import Heatmap from "@/components/Graphs/Heatmap";

const Page = () => {
  const [caseStudies, setCaseStudies] = useState<any[]>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const response = axios.get(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/caseStudies`,
    );
    response
      .then((res) => {
        setCaseStudies(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  console.log(caseStudies);

  const SampleImageComponent = ({ value, isInline }: any) => {
    const { width, height } = getImageDimensions(value);
    return (
      <div className="flex w-full items-center justify-center">
        <SanityImage
          src={value}
          className="h-auto object-contain phone:w-[80%] tablet:w-[50%]"
          style={{
            // Display alongside text if image appears inside a block text span
            display: isInline ? "inline-block" : "block",

            // Avoid jumping around with aspect-ratio CSS property
            aspectRatio: width / height,
          }}
        />
      </div>
    );
  };

  const components: PortableTextComponents = {
    types: {
      image: SampleImageComponent,
      // Any other custom types you have in your content
      // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
    },
    block: {
      h1: ({ children }: any) => {
        return (
          <h1 className="font-ivy text-5xl font-semibold text-[#000121]">
            {children}
          </h1>
        );
      },
      h2: ({ children }: any) => {
        return (
          <h2 className="font-ivy text-4xl font-semibold text-[#000121]">
            {children}
          </h2>
        );
      },
      h3: ({ children }: any) => {
        return (
          <h3 className="font-ivy text-3xl font-semibold text-[#000121]">
            {children}
          </h3>
        );
      },
      h4: ({ children }: any) => {
        return (
          <h4 className="font-ivy text-2xl font-semibold text-[#000121]">
            {children}
          </h4>
        );
      },
      h5: ({ children }: any) => {
        return (
          <h5 className="font-ivy text-xl font-semibold text-[#000121]">
            {children}
          </h5>
        );
      },
      h6: ({ children }: any) => {
        return (
          <h6 className="font-ivy text-lg font-semibold text-[#000121]">
            {children}
          </h6>
        );
      },
      normal: ({ children }: any) => {
        return (
          <p className="font-poppins font-light text-[#000121]">{children}</p>
        );
      },

      blockquote: ({ children }: any) => {
        return (
          <blockquote className="border-l-4 border-[#3959e6] font-poppins font-light text-[#3959e6]">
            {children}
          </blockquote>
        );
      },
    },
    list: {
      bullet: ({ children }: any) => {
        return (
          <ul className="py-auto list-disc space-y-5 font-poppins font-light text-[#000121]">
            {children}
          </ul>
        );
      },
      number: ({ children }: any) => {
        return (
          <ol className="py-auto list-decimal space-y-5 font-poppins font-light text-[#000121]">
            {children}
          </ol>
        );
      },
    },
    marks: {
      link: ({ value, children }: any) => {
        return (
          <Link
            href={value.href}
            className="rounded-md bg-blue-100 p-1 font-poppins font-semibold text-blue-700 underline"
          >
            {children}
          </Link>
        );
      },
    },
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="my-10 flex flex-col items-center justify-center gap-[3.5rem] py-6">
        {/* top */}
        {/* <div className="flex items-center justify-center gap-4">
          
          <div className="relative flex w-full flex-col gap-3 px-[5rem] pb-8">
            <h1 className="font-ivy text-[min(8vh,8vw)] font-bold tracking-wide">
              Case Studies
            </h1>
            <hr className="border-[#000121]/10" />
          </div>
        </div> */}
        <div className="flex flex-col items-center justify-center gap-[3.5rem]">
          <h1 className="font-poppins font-semibold uppercase tracking-[0.35em] text-[#3959E5] phone:text-[min(4vh,4vw)] smTablet:text-[min(2.35vh,2.35vw)]">
            Case Studies
          </h1>
          <p className="w-[80%] text-pretty text-center font-poppins font-light leading-relaxed tracking-wider text-[#000000] phone:text-[min(3vh,3vw)] smTablet:text-[min(2.1vh,2.1vw)]">
            We use an amalgamation of proprietary models to prepare a complete
            and holistic portfolio. Our models churn vast amount of data for
            every stock for a very long duration to ensure for data inaccuracy
            and marginal errors.
          </p>
        </div>

        {/* bottom */}

        <div>
          <div className="grid w-full grid-cols-1 gap-[5rem] py-[2rem] pb-8 xsPhone:px-[2rem] smTablet:px-[3.5rem] smLaptop:px-[5rem]">
            {loading ? (
              <div>Loading...</div>
            ) : (
              caseStudies?.map((caseStudy, idx) => {
                return (
                  <div key={caseStudy._id} className="flex flex-col gap-10">
                    <h1 className="font-ivy text-[min(4vh,4vw)] font-bold tracking-wide">
                      {caseStudy.name}:
                    </h1>
                    <div className="flex w-full items-center justify-center">
                      {caseStudy.body && (
                        <p className="w-full">
                          <PortableText
                            value={caseStudy.body}
                            components={components}
                          />
                        </p>
                      )}
                    </div>
                    <div className="flex w-full items-center justify-center gap-10 xsPhone:flex-col tablet:flex-row">
                      {caseStudy.image2 ? (
                        <>
                          <SanityImage
                            src={caseStudy.image}
                            className="h-auto w-fit xsPhone:w-full tablet:w-[50%]"
                          />
                          <SanityImage
                            src={caseStudy.image2}
                            className="h-auto w-fit xsPhone:w-full tablet:w-[50%]"
                          />
                        </>
                      ) : (
                        <SanityImage
                          src={caseStudy.image}
                          className="h-auto w-fit xsPhone:w-full tablet:w-[70%]"
                        />
                      )}
                    </div>
                  </div>
                );
              })
            )}
            <div className="flex flex-col gap-10">
              <h1 className="font-ivy text-[min(4vh,4vw)] font-bold tracking-wide">
                Dynamic Calculative Exposure
              </h1>
              <div className="flex w-full items-center justify-center font-poppins font-light text-[#000121]">
                Our dynamic models stay vigilant in pre-empting sectors where
                outperformance can come , thereby helping us in aligning our
                exposure and identify market beating opportunities. Our
                strategies are designed for stability and reliability in all
                market conditions.
              </div>
              <div className="flex w-full items-center justify-center gap-10 xsPhone:flex-col tablet:flex-row">
                <Heatmap />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Page;
