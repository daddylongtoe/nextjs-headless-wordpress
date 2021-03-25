import Footer from "./footer";
import Header from "./header";
import Head from "next/head";
import Seo from "../seo";
import { isEmpty } from "lodash";
import sanitize from "sanitize-html";

export default function Layout({ data, children }) {
  if (isEmpty(data?.page)) return null;

  return (
    <>
      <Seo seo={data?.page?.seo} uri={data?.page?.uri} />
      <Head>
        <link rel="shortcut icon" href={data?.header?.favicon} />
        {data?.page?.seo?.schemaDetails && (
          <script
            type="application/ld+json"
            className="yoast-schema-graph"
            key="yoastSchema"
            dangerouslySetInnerHTML={{
              __html: sanitize(data?.page?.seo?.schemaDetails),
            }}
          />
        )}
      </Head>
      <Header header={data?.header} headerMenus={data?.menus?.headerMenus} />
      <div className="h-almost-screen">{children}</div>
      <Footer footer={data?.footer} footerMenus={data?.menus?.footerMenus} />
    </>
  );
}
