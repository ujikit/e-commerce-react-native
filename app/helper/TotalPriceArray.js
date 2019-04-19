export function TotalPriceArray(arr) {
  return arr.reduce((accumulator, currentValue) => parseInt(accumulator, 10) + parseInt(currentValue, 10))
}
