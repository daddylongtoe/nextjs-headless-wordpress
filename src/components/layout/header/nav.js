import Link from "next/link";
import { useState } from "react";

export default function Nav({ header, headerMenus }) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img
          src={header?.siteLogoUrl}
          alt="Site logo"
          width="40"
          height="40"
          className="mr-4"
        />
        <div className="flex flex-col items-start justify-start">
          <span className="font-semibold text-xl tracking-tight">
            {header.siteTitle}
          </span>
          <span className=" text-sm tracking-tight">{header.siteTagLine}</span>
        </div>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsMenuVisible(!isMenuVisible)}
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isMenuVisible ? "max-h-full" : "h-0"
        } overflow-hidden w-full block flex-grow lg:h-full h lg:flex lg:items-center lg:w-auto`}
      >
        {headerMenus.length ? (
          <div className="text-sm lg:flex-grow">
            {headerMenus.map((item) => {
              return (
                <Link key={item?.node?.id} href={item?.node?.path}>
                  <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    {item?.node?.label}
                  </a>
                </Link>
              );
            })}
          </div>
        ) : null}
        <div>
          <a
            href="#"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
