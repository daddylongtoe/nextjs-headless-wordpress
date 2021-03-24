import Head from "next/head";
import { GET_MENUS } from "../src/queries/get-menus";
import client from "../src/apollo/client";
import Layout from "../src/components/layout";

export default function Index({ data }) {
  console.log(data);
  return (
    <Layout data={data}>
      <h3 className="text-lg leading-6 font-medium text-gray-900">Content</h3>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const { data, loading, networkStatus } = await client.query({
    query: GET_MENUS,
  });

  return {
    props: {
      data: {
        header: data?.header || [],
        menus: {
          headerMenus: data?.headerMenus?.edges || [],
          footerMenus: data?.footerMenus?.edges || [],
        },
        footer: data?.footer || [],
      },
    },
    // revalidate: 1,
  };
}
