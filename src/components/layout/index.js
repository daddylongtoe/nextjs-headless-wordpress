import Footer from "./footer";
import Header from "./header";
import Head from "next/head";
import Seo from "../seo";
import { isEmpty } from "lodash";
import sanitize from "sanitize-html";

export default function Layout({ data, children }) {
  if (isEmpty(data?.page)) return null;

  const { page, header, footer, headerMenus, footerMenus } = data || {};

  return (
    <>
      <Seo seo={page?.seo} uri={page?.uri} />
      <Head>
        <link rel="shortcut icon" href={header?.favicon} />
        {page?.seo?.schemaDetails && (
          <script
            type="application/ld+json"
            className="yoast-schema-graph"
            key="yoastSchema"
            dangerouslySetInnerHTML={{
              __html: sanitize(page?.seo?.schemaDetails),
            }}
          />
        )}
      </Head>
      <Header header={header} headerMenus={headerMenus?.edges} />
      <div className="h-almost-screen">{children}</div>
      <Footer footer={footer} footerMenus={footerMenus?.edges} />
    </>
  );
}
