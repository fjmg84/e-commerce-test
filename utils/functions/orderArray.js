export const orderArray = (arr = [], camp = undefined, type = "<") => {
  if (type === ">")
    return arr.sort((a, b) =>
      camp ? (a[camp] > b[camp] ? -1 : 1) : a > b ? -1 : 1
    );
  else
    return arr.sort((a, b) =>
      camp ? (a[camp] < b[camp] ? -1 : 1) : a < b ? -1 : 1
    );
};

export const unorderedArray = (arr) => {
  let i, j, temp;
  for (i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};
