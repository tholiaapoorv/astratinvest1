import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import BlogLayout from "@/components/layouts/BlogLayout";
import { Loader2 } from "lucide-react";
import React, { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="relative mb-12 overflow-x-clip">
        <NavBar />
        <BlogLayout />
        <div className="mt-12 flex w-full items-center justify-center">
          <div className="flex h-full w-[95%] flex-col items-center justify-center rounded-[2rem] bg-[#ECF0FB] phone:gap-[2rem] phone:py-[2.5rem] smLaptop:gap-[4.5rem] smLaptop:py-[5rem]">
            <Suspense
              fallback={
                <div className="flex h-full w-full items-center justify-center">
                  <Loader2 className="h-auto w-10 animate-spin text-[#000121]" />
                </div>
              }
            >
              {children}
            </Suspense>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
