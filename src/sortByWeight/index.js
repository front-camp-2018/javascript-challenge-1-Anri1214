/* eslint-disable-next-line */
export const sortByWeight = arr => {
  return arr.sort((a, b) => {
    const first = a.split('').reduce((acc, val) => {
      return acc = parseInt(acc) + parseInt(val);
    });
    const second = b.split('').reduce((acc, val) => {
      return acc = parseInt(acc) + parseInt(val);
    });

    switch (true) {
      case first > second:
        return 1;
      case first < second:
        return -1;
      default:
        return 0;
    }
  });
};
