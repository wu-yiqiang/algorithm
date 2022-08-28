function uniqueFrom(arr) {
  return Array.from(new Set(arr))
}

function uniqueSet(arr) {
  return [...new Set(arr)]
}


module.exports = {
  uniqueFrom,
  uniqueSet
}