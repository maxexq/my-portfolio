import React from "react";

const Footer = () => {
  return (
    <footer
      className="fixed bottom-0 left-0 flex py-8 h-48 w-full items-center flex-col
                    justify-end bg-gradient-to-t from-white 
                    via-white dark:from-black dark:via-black 
                    text-center text-xs"
    >
      <div className="flex flex-col gap-1">
        <p>© All rights are reserved 2023.</p>
        <p>
          Made with 💖 by{" "}
          <a
            className="pointer-events-none nav"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            maxexq
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
