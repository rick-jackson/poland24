export const filterEmptyParam = (data) =>
  Object.entries(data)
    .filter(([key, value]) => value)
    .reduce((acc, [key, value]) => {
      return { ...acc, [key]: value };
    }, {});
