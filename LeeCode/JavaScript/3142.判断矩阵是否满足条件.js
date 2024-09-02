/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var satisfiesConditions = function (grid) {
    if (!grid.length) return false
    console.log('sdss', grid[0][0])
    const width = grid.length
    const len = grid[0].length
    let flag = true
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < len; j++) {
            if (i + 1 < width && grid[i + 1][j] !== grid[i][j]) {
                flag = false
            } else if (j + 1 < len && grid[i][j] === grid[i][j + 1]) {
                flag = false
            }
        }
    }
    return flag
};