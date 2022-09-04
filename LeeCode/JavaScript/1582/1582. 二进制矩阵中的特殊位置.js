/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
  const rows = mat.length
  const cols = mat[0].length
  
  const rowArray = []
  const colArray = []
  for (let i = 0; i < rows; i++) {
    let rowsSum = 0
    
    for (let j = 0; j < cols; j++) {
      rowsSum += mat[i][j]
     
    }
    if (rowsSum === 1) rowArray.push(i)
    
  }

  for (let o = 0; o < cols; o++) {
    let colSum = 0
    for (let p = 0; p < rows; p++) {
       colSum += mat[p][o]
    }
    if (colSum === 1) colArray.push(o)
  }
  console.log(rowArray, colArray)
  let res = 0
  for (let l = 0; l < rowArray.length; l++) {
   
    for (let m = 0; m < colArray.length; m++) {
       const rowElement = rowArray[l]
      const colElement = colArray[m]
      if (mat[rowElement][colElement] === 1) res++
    }
  }
  return res
}


console.log(
  numSpecial([
    [1, 0, 0],
    [0, 0, 1],
    [1, 0, 0]
  ])
)