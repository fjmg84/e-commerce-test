export const orderArray = (arr = [], camp = undefined, type = '<') => {
  if (type === '>') {
    return arr.sort((a, b) =>
      camp ? (a[camp] > b[camp] ? -1 : 1) : a > b ? -1 : 1
    )
  } else {
    return arr.sort((a, b) =>
      camp ? (a[camp] < b[camp] ? -1 : 1) : a < b ? -1 : 1
    )
  }
}

export const unorderedArray = (arr) => {
  let i, j, temp
  for (i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  return arr
}


export const createListCategories = (data) => {
  let categories = []
  let temp = []

  data.forEach((arr) => {
    const nameCategory = arr.category

    if (temp.includes(nameCategory) === false) {

      const countCategory = data.filter(
        (arr) => arr.category === nameCategory
      ).length

      temp = [...temp, nameCategory]

      categories = [
        ...categories,
        { name: nameCategory, count: countCategory, slug: formattedString(nameCategory, "_", " ") }
      ]
    }
  })

  return { categories }
}

export const formattedString = (str, newChar, oldChar) =>
  str?.replaceAll(oldChar, newChar)


export const filterProducts = ({ listProducts, filter = undefined, key = 'category' }) => listProducts.filter(
  (product) => !filter ? product : product[key] === filter
);

export const findProducts = ({ listProducts, filter = undefined, key = 'category' }) => listProducts.find(
  (product) => !filter ? product : product[key] === filter
);
