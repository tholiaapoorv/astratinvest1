"use client";
import { client } from "@/sanity/lib/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import React from "react";

function SanityImage({
  src,
  className,
  style,
}: {
  src: SanityImageSource;
  className: string;
  style?: any;
}) {
  const imageProps = useNextSanityImage(client, src);
  return (
    <Image
      {...imageProps}
      style={{ maxWidth: "100%", height: "auto", ...style }} // layout="intrinsic" prior to Next 13.0.0
      alt={""}
      className={className}
    />
  );
}

export default SanityImage;
