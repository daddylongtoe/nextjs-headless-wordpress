import Head from "next/head";
import client from "../src/apollo/client";
import Layout from "../src/components/layout";
import { GET_PAGE } from "../src/queries/pages/get-page";
import { handleRedirectsAndReturnData } from "../src/utils/slugs";

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

  const defaultProps = {
    props: {
      data: data || {},
    },
    revalidate: 1,
  };

  return handleRedirectsAndReturnData(defaultProps, data, errors, "page");
}
