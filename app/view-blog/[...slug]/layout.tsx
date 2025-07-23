import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import BlogLayout from "@/components/layouts/BlogLayout";
import { Loader2 } from "lucide-react";
import React, { Suspense } from "react";
import { Metadata } from "next";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>
        <NavBar />
        <div className="mt-12 flex min-h-screen w-full items-center justify-center bg-[#ECF0FB]">
          <Suspense
            fallback={
              <div className="flex h-screen w-screen items-center justify-center">
                <Loader2 className="h-auto w-10 animate-spin text-[#000121]" />
              </div>
            }
          >
            {children}
          </Suspense>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
