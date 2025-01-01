var convertDateToBinary = function (date) {
  const data = date.split('-')
  const year = Number(data[0]).toString(2)
  const month = Number(data[1]).toString(2)
  const day = Number(data[2]).toString(2)
  return `${year}-${month}-${day}`
}
