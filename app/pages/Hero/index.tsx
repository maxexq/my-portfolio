import Image from "next/image";
import React from "react";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section id="home">
      <div className="mx-auto px-4 md:px-16 py-4">
        <div
          className="flex flex-col-reverse items-center gap-12 h-auto text-center lg:items-center 
                        lg:flex-row lg:relative lg:justify-center"
        >
          <div className="flex flex-col max-w-[50rem] relative gap-5">
            <h1 className="font-bold text-[#2d2e32] text-[40px] dark:text-white md:text-6xl leading-[1.2]">
              Full-
              <code className=" text-[#d60511] drop-shadow-lg filter animate-pulse">
                Stack
              </code>{" "}
              Developer{" "}
            </h1>

            <p className="text-lg">
              Hi, I&apos;m Parames Ajhan. A passionate Full-Stack Developer
              based in Bangkok, Thailand. 📍
            </p>

            <div></div>
          </div>
          <div className="overflow-hidden rounded-tr-xl rounded-tl-lg rounded-bl-3xl rounded-br-md">
            <Image
              priority
              src="/images/profile-image.jpeg"
              alt="profile"
              width={350}
              height={350}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
