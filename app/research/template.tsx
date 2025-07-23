import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Research from "@/components/Research";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavBar />
      <Research />
      <div className="my-12 flex w-full items-center justify-center">
        <div className="h-full w-[95%] rounded-[2rem] bg-[#ebf0fa] py-12">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default layout;
