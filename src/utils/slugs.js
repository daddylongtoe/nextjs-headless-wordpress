import { isEmpty } from "lodash";

export const isCustomUri = (uri) => {
  const pagesToExclude = ["/"];

  return pagesToExclude.includes(uri);
};

export const handleRedirectsAndReturnData = (
  defaultProps,
  data,
  errors,
  field
) => {
  if (isEmpty(data)) {
    console.log("data is empty");
    return {
      redirect: {
        destination: "/503",
        statusCode: 301,
      },
    };
  }

  if (field && isEmpty(data?.[field])) {
    return {
      // returns the default 404 page with a status code of 404
      notFound: true,
    };
  }

  return defaultProps;
};
