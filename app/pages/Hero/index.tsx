import Image from "next/image";
import React from "react";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section id="home">
      <div className="mx-auto max-w-5xl px-4 md:px-16 py-4">
        <div
          className="flex flex-col-reverse items-center gap-12 h-auto text-center lg:items-center 
                        lg:flex-row lg:relative lg:justify-center"
        >
          <div className="flex flex-col max-w-[50rem] relative gap-5">
            <h1 className="font-bold text-[#2d2e32] text-[40px] dark:text-white md:text-6xl leading-[1.2]">
              Full-Stack Developer
            </h1>

            <p className="text-lg">
              Hi, I&apos;m Parames Ajhan. A passionate Front-end Developer based
              in Bangkok, Thailand. 📍
            </p>

            <div></div>
          </div>
          <div className="overflow-hidden rounded-xl">
            <Image
              src="/images/profile-image.jpeg"
              alt="profile"
              width={350}
              height={350}
            />
          </div>
        </div>

        <div
          className="flex flex-col items-center gap-12 h-auto text-center lg:items-center 
                        lg:flex-row lg:relative lg:justify-center"
        >
          <h2>Tech stack</h2>

          <div></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
