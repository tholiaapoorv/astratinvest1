import Image from "next/image";
import blog1 from "@/public/1.jpeg";
import { TbArrowUpRight } from "react-icons/tb";
import BlogCard from "@/components/ui/BlogCard";
import { blogs } from "@/types";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState<blogs[]>([]);
  useEffect(() => {
    const response = axios.get(`${process.env.NEXT_PUBLIC_APP_URL}/api/blogs`);
    response
      .then((data) => {
        setBlogs(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="h-auto w-screen bg-white py-10">
      <div className="m-9 flex flex-col items-center justify-center">
        {/* top */}
        <div className="mb-8 flex items-center justify-center">
          <h1 className="bg-[#FFFFFF] font-ivy text-[min(6.5vh,6.5vw)] font-semibold tracking-wide text-[#000122]">
            Exploring Financial Frontiers
          </h1>
        </div>

        {/* bottom */}
        {/* <div className="mx-16 my-4 flex w-[90%] items-center justify-center gap-12">
          <div>
            <Image src={blog1} alt="" className="h-auto w-[44rem]" />
            <div className="text-[min1.50vh,1.50vw)] flex gap-2 font-poppins font-extralight">
              <p className="pb-4 pt-10">
                Financial News Private Equity Assets{" "}
              </p>{" "}
              &nbsp; &nbsp; &nbsp;
              <p className="pb-4 pt-10">May 29, 2024</p>
            </div>
            <p className="pb-4 font-poppins text-[min(2.75vh,2.75vw)] font-semibold tracking-wide">
              How to select a Private fund equity?
            </p>
            <p className="text-[min1.50vh,1.50vw)] pb-5 font-poppins font-extralight">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque beatae quos reprehenderit quo veritatis corrupti
              officia accusamus officiis....
            </p>
            <div className="">
              <button className="flex cursor-pointer items-center justify-center gap-1 border border-[#000121] p-3 font-ivy tracking-wide text-[#000121] transition hover:bg-[#000121] hover:text-white">
                Learn More About Private Funds{" "}
                <TbArrowUpRight className="h-auto w-6" />
              </button>
            </div>
          </div>

          <div>
            <Image src={blog1} alt="" className="h-auto w-[44rem]" />
            <div className="text-[min1.50vh,1.50vw)] flex gap-2 font-poppins font-extralight">
              <p className="pb-4 pt-10">
                Financial News Private Equity Assets{" "}
              </p>{" "}
              &nbsp; &nbsp; &nbsp;
              <p className="pb-4 pt-10">May 29, 2024</p>
            </div>
            <p className="pb-4 font-poppins text-[min(2.75vh,2.75vw)] font-semibold tracking-wide">
              How to select a Private fund equity?
            </p>
            <p className="text-[min1.50vh,1.50vw)] pb-5 font-poppins font-extralight">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque beatae quos reprehenderit quo veritatis corrupti
              officia accusamus officiis....
            </p>
            <div className="">
              <button className="flex cursor-pointer items-center justify-center gap-1 border border-[#000121] p-3 font-ivy tracking-wide text-[#000121] transition hover:bg-[#000121] hover:text-white">
                Learn More About Private Funds{" "}
                <TbArrowUpRight className="h-auto w-6" />
              </button>
            </div>
          </div>
        </div> */}
        <div className="grid text-[#000121] xsPhone:w-[100%] phone:grid-cols-1 phone:gap-[2rem] smTablet:w-[90%] tablet:grid-cols-2 tablet:gap-[2rem] smLaptop:gap-[2rem]">
          {blogs &&
            blogs.length !== 0 &&
            blogs.slice(0, 2).map((blog, idx) => {
              return (
                <Link
                  href={`${process.env.NEXT_PUBLIC_APP_URL}/viewBlog/${blog.slug.current}`}
                  key={idx}
                  className="flex items-center justify-center transition hover:scale-105 xsPhone:py-4 smLaptop:p-4"
                >
                  <BlogCard
                    title={blog.title}
                    date={blog.publishedAt}
                    description={blog.description}
                    imageSrc={blog.mainImage}
                    slug={blog.slug.current}
                  />
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
