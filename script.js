function filtraPares(array) {
  return array.filter(callback)
}

function callback(item) {
  return item % 2 === 0
}

const MEUARRAY = [2, 6, 67, 5, 4, 90]

console.log(filtraPares(MEUARRAY))
