import client from "../src/apollo/client";
import { GET_PAGES_URI } from "../src/queries/pages/get-pages";
import { isEmpty } from "lodash";
import { GET_PAGE } from "../src/queries/pages/get-page";
import { useRouter } from "next/router";
import Layout from "../src/components/layout";
import {
  handleRedirectsAndReturnData,
  isCustomPageUri,
  FALLBACK,
} from "../src/utils/slugs";
import sanitize from "sanitize-html";

export default function Page({ data }) {
  const router = useRouter();

  // if the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout data={data}>
      <div
        dangerouslySetInnerHTML={{
          __html: sanitize(data?.page?.content ?? ""),
        }}
      />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const { data, errors } = await client.query({
    query: GET_PAGE,
    variables: {
      uri: params?.slug.join("/"),
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

export async function getStaticPaths() {
  const { data } = await client.query({
    query: GET_PAGES_URI,
  });

  const pathsData = [];

  data?.pages?.nodes &&
    data?.pages?.nodes.map((page) => {
      if (!isEmpty(page?.uri) && !isCustomPageUri(page?.uri)) {
        const slugs = page?.uri?.split("/").filter((pageSlug) => pageSlug);
        pathsData.push({ params: { slug: slugs } });
      }
    });

  return {
    paths: pathsData,
    fallback: FALLBACK,
  };
}
