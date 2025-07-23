import React from "react";
import { PortableText, PortableTextComponents } from "@portabletext/react";

import { getImageDimensions } from "@sanity/asset-utils";

import SanityImage from "@/components/ui/SanityImage";

import axios from "axios";
import { ChevronLeft, Loader } from "lucide-react";
import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const page = async ({ params }: { params: { slug: string } }) => {
  if (!params.slug) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <Loader className="h-auto w-10 animate-spin text-[#000121]" />
      </div>
    );
  }
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/viewBlog`,
    {
      headers: {
        slug: params.slug[0],
      },
    },
  );
  const blog = response.data;

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
    <div className="flex w-full flex-col items-center justify-center text-white">
      <div className="relative">
        <SanityImage
          src={blog[0].mainImage}
          className="relatve max-h-[80vh] min-w-full object-fill brightness-50"
        />
        <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] font-ivy font-bold xsPhone:text-[min(5vw,5vh)] smLaptop:text-[min(6.5vw,6.5vh)]">
          {blog[0].title}
        </div>
      </div>
      <div className="prose-base my-10 w-[80%]">
        <Breadcrumb className="flex items-center justify-center">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="font-poppins">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/blog" className="font-poppins">
                All Blogs
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-poppins">
                {blog[0].title}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {blog && blog.length !== 0 && (
          <PortableText value={blog[0].body} components={components} />
        )}
      </div>
    </div>
  );
};

export default page;
