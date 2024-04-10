import axios from "axios";
import Image from "next/image";
import React from "react";

import stacksStatic from "./stacks.json";

interface IStacks {
  id: number;
  attributes: {
    title: string;
    description: string;
    url: string;
    detail?: {};
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    thumbnail?: {
      data: [
        {
          attributes: {
            url: string;
          };
        }
      ];
    };
  };
}

const fetchStacks = async () => {
  try {
    const response = await axios.get(
      `${process.env.STRAPI_BASE_URL}/api/stacks?populate=*`
    );
    return response?.data.data;
  } catch (error) {
    console.error(error);
    return stacksStatic?.data;
  }
};

const Stacks = async () => {
  const stacksList: IStacks[] = await fetchStacks();

  console.log("static", stacksStatic);

  return (
    <section
      id="stacks"
      className="w-full flex flex-col items-center gap-6 h-auto text-center lg:items-center 
                lg:relative lg:justify-center p-4"
    >
      <h2 className="font-semibold text-2xl">Tech stacks</h2>
      <ul className="flex gap-4 items-center flex-wrap w-full justify-center">
        {stacksList?.map((stack, index) => {
          const { attributes } = stack;
          const imgUrl = attributes?.thumbnail?.data[0]?.attributes?.url;
          console.log(attributes?.thumbnail?.data[0]?.attributes?.url);
          return (
            <li key={index} className="hover:scale-125 transition-all">
              <a
                href={attributes?.url || "#"}
                target="_blank"
                className="transition-all duration-300"
              >
                {imgUrl ? (
                  <div
                    className={`rounded-full w-20 h-20 flex justify-center items-center min-w-[64px] p-2 border border-[#2d3238]`}
                  >
                    <Image
                      src={`${process.env.STRAPI_BASE_URL}${imgUrl}` || ""}
                      alt={attributes?.description}
                      width={40}
                      height={40}
                    />
                  </div>
                ) : (
                  <span className="rounded-full flex items-center gap-1 text-[#848d97] text-xs px-2 leading-[18px] border border-[#2d3238] h-5">
                    {attributes?.title}
                  </span>
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Stacks;
