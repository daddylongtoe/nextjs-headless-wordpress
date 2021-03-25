import client from "../src/apollo/client";
import { GET_PAGES_URI } from "../src/queries/pages/get-pages";
import { isEmpty } from "lodash";
import { GET_PAGE } from "../src/queries/pages/get-page";
import { useRouter } from "next/router";
import Layout from "../src/components/layout";
import { GET_MENUS } from "../src/queries/get-menus";
import { isCustomUri } from "../src/utils/slugs";

export default function Page({ data }) {
  console.log("...slug data", data);
  const router = useRouter();

  // if the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return <Layout data={data}>{router?.query?.slug?.join("/")}</Layout>;
}

export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: GET_PAGE,
    variables: {
      uri: params?.slug.join("/"),
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
        page: data?.page ?? {},
        path: params?.slug.join("/"),
      },
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: GET_PAGES_URI,
  });

  const pathsData = [];

  data?.pages?.nodes &&
    data?.pages?.nodes.map((page) => {
      if (!isEmpty(page?.uri) && !isCustomUri(page?.uri)) {
        const slugs = page?.uri?.split("/").filter((pageSlug) => pageSlug);
        pathsData.push({ params: { slug: slugs } });
      }
    });

  return {
    paths: pathsData,
    fallback: true,
  };
}
