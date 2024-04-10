import React from "react";

type Props = {
  //   isSidebar: boolean;
  //   onToggleSidebar: () => void;
};

const Sidebar = ({}: Props) => {
  return (
    <nav
      className={`min-h-screen w-full fixed top-0 ${"left-[-100%]"}  bg-white justify-center dark:bg-black z-50 flex items-center transition-all duration-300`}
    >
      <button className="absolute top-4 right-4 text-2xl">x</button>

      <ul className="flex flex-col text-3xl gap-16">
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
      </ul>
    </nav>
  );
};

export default Sidebar;
