const sort = require('./sort.js')

function deduplication(arr) { 
  return Array.from(new Set(arr))
}

function deduplication1(arr) {
  return [...new Set(arr)]
}
module.exports = {
  ...sort,
  deduplication,
  deduplication1
}