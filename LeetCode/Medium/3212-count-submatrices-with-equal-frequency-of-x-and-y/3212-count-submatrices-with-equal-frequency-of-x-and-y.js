/**
 * @param {character[][]} grid
 * @return {number}
 */
var numberOfSubmatrices = function(grid) {
  const [maxCol, maxRow] = [grid.length, grid[0].length];
  const dp = Array.from({ length: maxCol + 1}, () => new Array(maxRow + 1).fill(0));
  const xChecker = Array.from({ length: maxCol + 1}, () => new Array(maxRow + 1).fill(false));
  let result = 0;

  for (let i = 0; i < maxCol; i++) {
    for (let j = 0; j < maxRow; j++) {
      dp[i + 1][j + 1] = dp[i][j + 1] + dp[i + 1][j] - dp[i][j];
      xChecker[i + 1][j + 1] = xChecker[i][j + 1] || xChecker[i + 1][j] || grid[i][j] === "X";

      if (grid[i][j] === "X") dp[i + 1][j + 1]++;
      if (grid[i][j] === "Y") dp[i + 1][j + 1]--;

      if (dp[i + 1][j + 1] === 0 && xChecker[i + 1][j + 1]) result++;
    }
  }

  return result;
}