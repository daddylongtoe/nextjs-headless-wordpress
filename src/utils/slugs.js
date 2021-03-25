export const isCustomUri = (uri) => {
  const pagesToExclude = ["/"];

  return pagesToExclude.includes(uri);
};
