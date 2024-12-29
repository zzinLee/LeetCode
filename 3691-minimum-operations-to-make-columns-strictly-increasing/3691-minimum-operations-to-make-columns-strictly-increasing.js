/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumOperations = function(grid) {
   const m = grid.length;
   const n = grid[0].length;
   let total = 0;

   for (let i = 0; i < n; i++) {
    let target = grid[0][i] + 1;

    for (let j = 1; j < m; j++) {
        const diff = target - grid[j][i];
        
        if (diff > 0) {
            target = grid[j][i] + diff + 1;
            total += diff;
        } else {
          target = grid[j][i] + 1;
        }
    }
   }

    return total;
};