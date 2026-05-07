import Footer from "@/components/Footer";

import NavBar from "@/components/NavBar";
import WhyUs from "@/components/WhyUs";
import React from "react";

const page = () => {
  return (
    <div>
      <NavBar />
      <main id="main-content">
        <WhyUs />
      </main>
      <Footer />
    </div>
  );
};

export default page;
