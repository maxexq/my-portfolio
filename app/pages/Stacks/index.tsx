import React from "react";

type Props = {};

const mockStacks = [
  {
    name: "React",
    icon: "",
    url: "",
  },
  {
    name: "Nextjs",
    icon: "",
    url: "",
  },
  {
    name: "TypeScript",
    icon: "",
    url: "",
  },
  {
    name: "Tailwind",
    icon: "",
    url: "",
  },
  {
    name: "Go",
    icon: "",
    url: "",
  },
  {
    name: "Node",
    icon: "",
    url: "",
  },
];

const Stacks = (props: Props) => {
  return (
    <section
      id="stacks"
      className="flex flex-col items-center gap-4 h-auto text-center lg:items-center 
                lg:relative lg:justify-center"
    >
      <h2 className="font-semibold text-2xl">Tech stack</h2>
      <ul className="flex gap-4">
        {mockStacks?.map((stack, index) => {
          return (
            <li key={index}>
              <a
                href={stack?.url || "#"}
                target="_blank"
                className="hover:rotate-6 transition-all duration-300"
              >
                {stack.icon ? null : (
                  <span className="rounded-full flex items-center gap-1 text-[#848d97] text-xs px-2 leading-[18px] border border-[#2d3238] h-5">
                    {stack?.name}
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
