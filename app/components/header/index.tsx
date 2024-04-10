// * External components
import axios from "axios";
import React from "react";
import Link from "next/link";

//* static data
import headerStatic from "./header.json";

const fetchHeader = async () => {
  try {
    const response = await axios.get(
      `${process.env.STRAPI_BASE_URL}/api/header`
    );
    return response?.data.data.attributes.detail;
  } catch (error) {
    console.error(error);
    return headerStatic?.data;
  }
};

type Props = {
  // onToggleSidebar: () => void;
};

interface IMenu {
  name: string;
  path: string;
}

interface IHeader {
  logo: string;
  menus: IMenu[];
}

const Header = async ({}: Props) => {
  const header: IHeader = await fetchHeader();

  return (
    <header
      className="z-10 px-10 w-full items-center justify-between font-mono text-sm 
                         fixed left-0 top-0 flex border-b border-gray-300 bg-gradient-to-b 
                        from-zinc-200 py-8 backdrop-blur-2xl dark:border-neutral-800 
                        dark:bg-zinc-800/30 dark:from-inherit"
    >
      <h3 className="nav text-xl">{header?.logo}</h3>
      <ul className="hidden sm:flex gap-5">
        {header?.menus?.map((path, index) => {
          return (
            <li key={index}>
              <Link className="nav" href={path.path}>
                {path.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <button className="sm:hidden">Open</button>
    </header>
  );
};

export default Header;
