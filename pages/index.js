import Head from "next/head";
import client from "../src/apollo/client";
import Layout from "../src/components/layout";
import { GET_PAGE } from "../src/queries/pages/get-page";

export default function Index({ data }) {
  console.log("Home data", data);
  return (
    <Layout data={data}>
      <h3 className="text-lg leading-6 font-medium text-gray-900">Content</h3>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const { data, errors } = await client.query({
    query: GET_PAGE,
    variables: {
      uri: "/",
    },
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
        page: data?.page || [],
      },
    },
    revalidate: 1,
  };
}
