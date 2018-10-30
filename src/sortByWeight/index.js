/* eslint-disable-next-line */
export const sortByWeight = arr => {
  return arr.sort((a, b) => {
    const first = a.split('').reduce((acc, val) => {
      return acc = parseInt(acc) + parseInt(val);
    });
    const second = b.split('').reduce((acc, val) => {
      return acc = parseInt(acc) + parseInt(val);
    });

    return first - second;
  });
};
