import axios from "axios";
import React from "react";

// const fetchHeader = async () => {
//   try {
//     const response = await axios.get(
//       `${process.env.STRAPI_BASE_URL}/api/header`
//     );

//     return response.data.data;
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// };

type Props = {
  // onToggleSidebar: () => void;
};

const Header = async ({}: Props) => {
  // const header = await fetchHeader();

  const paths = [
    {
      title: "Home",
      url: "#home",
    },
    {
      title: "About",
      url: "#about",
    },
    {
      title: "Projects",
      url: "#projects",
    },
    {
      title: "Contact",
      url: "#contact",
    },
  ];

  return (
    <header
      className="z-10 px-10 w-full items-center justify-between font-mono text-sm 
                         fixed left-0 top-0 flex border-b border-gray-300 bg-gradient-to-b 
                        from-zinc-200 py-8 backdrop-blur-2xl dark:border-neutral-800 
                        dark:bg-zinc-800/30 dark:from-inherit"
    >
      <h3 className="nav text-xl">maxexq.dev</h3>
      <div className="hidden sm:flex gap-5">
        {paths?.map((path, index) => (
          <a key={index} className="nav" id={path.url}>
            {path.title}
          </a>
        ))}
      </div>

      <button className="sm:hidden">Open</button>
    </header>
  );
};

export default Header;
