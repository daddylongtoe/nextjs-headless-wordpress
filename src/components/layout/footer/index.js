import { isNonEmptyArray } from "@apollo/client/utilities";
import { isEmpty, isArray } from "lodash";
import Link from "next/link";
import sanitizeHtml from "sanitize-html";

export default function Footer({ footer, footerMenus }) {
  return (
    <footer className="bg-teal-500 p-6">
      <div className="flex flex-wrap -mx-1 overflow-hidden text-white">
        {/* Widget One */}
        <div className="my-1 px-1 w-full overflow-hidden sm:w-full lg:w-1/3 xl:w-1/3">
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(footer?.sidebarOne),
            }}
          ></div>
        </div>

        {/* Widget Two */}
        <div className="my-1 px-1 w-full overflow-hidden sm:w-full lg:w-1/3 xl:w-1/3">
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(footer?.sidebarTwo),
            }}
          />
        </div>

        {/* Footer Menus */}

        <div className="my-1 px-1 w-full overflow-hidden sm:w-full lg:w-1/3 xl:w-1/3">
          {!isEmpty(footerMenus) || isArray(footerMenus) ? (
            <ul>
              {footerMenus?.map((item) => (
                <li key={item?.node?.id}>
                  <Link href={item?.node?.path}>
                    <a>{item?.node?.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
      {/* Copyright text */}
      <div className="flex flex-wrap mt-8 mb-8 w-full">
        <div className="my-2 px-2 w-full overflow-hidden xl:w-1/2 text-white">
          {" "}
          {footer?.copyrightText
            ? footer?.copyrightText
            : "Copyright Mr Blobby 2021"}
        </div>

        <div className="my-2 px-2 w-full overflow-hidden xl:w-1/2"></div>
      </div>
    </footer>
  );
}
