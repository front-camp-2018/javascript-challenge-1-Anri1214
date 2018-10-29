/* eslint-disable-next-line */
export const doubleNum = num => {
  const numStr = num.toString();
  const length = numStr.length;
  const half = length / 2;
  const first = numStr.substr(0, half);
  const second = numStr.substr(half);

  return length % 2 !== 0 || first !== second ? num * 2 : num;
};
