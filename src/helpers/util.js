export const sortData = (data) => {
  const sortedData = [...data];
  return sortedData.sort((x, y) => (x.cases > y.cases ? -1 : 1));
};
