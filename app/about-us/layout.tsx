import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us",
};

function layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export default layout;
