// * External components
import React from "react";
import axios from "axios";

// * Static data
import footerStatic from "./footer.json";

interface IFooter {
  copyright: string;
  by: {
    name: string;
    url: string;
  };
}

const fetchFooter = async () => {
  try {
    const response = await axios.get(
      `${process.env.STRAPI_BASE_URL}/api/footer`
    );
    return response?.data.data.attributes.detail;
  } catch (error) {
    console.error(error);
    return footerStatic?.data;
  }
};

const Footer = async () => {
  const footer: IFooter = await fetchFooter();

  return (
    <footer
      className="fixed bottom-0 left-0 flex py-8 h-48 w-full items-center flex-col
                    justify-end bg-gradient-to-t from-white 
                    via-white dark:from-black dark:via-black 
                    text-center text-xs"
    >
      <div className="flex flex-col gap-1">
        <p>{footer?.copyright}</p>
        <p>
          Made with 💖 by{" "}
          <a
            className="nav cursor-pointer"
            href={footer?.by?.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {footer?.by?.name}
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
