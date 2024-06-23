/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumArea = function(grid) {
  const n = grid.length;
  const m = grid[0].length;
  const coords = [];
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) {
        coords.push([i, j]);
      }
    }
  }
  
  if (coords.length < 2) return coords.length;
  
  let [minI, maxI, minJ, maxJ] = [Infinity, -Infinity, Infinity, -Infinity];
  
  for (const [i, j] of coords) {
    if (minI > i) {
      minI = i;
    }
    
    if (maxI < i) {
      maxI = i;
    }
    
    if (minJ > j) {
      minJ = j;
    }
    
    if (maxJ < j) {
      maxJ = j;
    }
  }
  
  const width = Math.abs(maxJ - minJ) + 1;
  const height = Math.abs(maxI - minI) + 1;
  
  if (!width) return height;
  
  if (!height) return width;

  return width * height;
};