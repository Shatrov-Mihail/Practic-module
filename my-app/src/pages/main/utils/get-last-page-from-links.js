export const getLastPageFromLinks = (links) => {
  if (!links) {
    return 1; // Возвращаем 1, если links равен null или undefined
  }

  const result = links.match(/_page=(\d{1,4})&_limit=\d{1,3}>; rel="last"/);

  return result ? result[1] : 1;
};
