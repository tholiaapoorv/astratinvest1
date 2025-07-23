"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Banner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full mt-[5rem] bg-white text-center py-2 text-black font-ivy text-[min(2.2vh,2.2vw)] tracking-wide shadow"
    >
      We&apos;ve just launched our Category III AIF!&nbsp;
      <Link
        href="/AIF"
        className="text-blue-600 underline hover:text-blue-800"
      >
        Click here
      </Link>
      &nbsp;to know more.
    </motion.div>
  );
};

export default Banner;
