import Footer from "./footer";
import Header from "./header";
import Head from "next/head";

export default function Layout({ data, children }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={data?.header?.favicon} />
      </Head>
      <Header header={data?.header} headerMenus={data?.menus?.headerMenus} />
      {children}
      <Footer footer={data?.footer} footerMenus={data?.menus?.footerMenus} />
    </>
  );
}
