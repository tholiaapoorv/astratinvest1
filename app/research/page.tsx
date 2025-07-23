import { redirect } from "next/navigation";
import React from "react";

const page = () => {
  redirect("/research/quantitative-model");
  return <div>Loading...</div>;
};

export default page;
