import type { Metadata } from "next";
import React from "react";
import HeaderVod from "./compnents/headerVod";

export const metadata: Metadata = {
  title: "VOD Project layout",
  description: "Searching of movise",
};

export default function VodLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <React.Fragment>
        {children}
    </React.Fragment>
  );
}
