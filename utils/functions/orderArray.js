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
