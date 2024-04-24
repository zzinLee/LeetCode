/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
function updateMatrix(mat) {
  const m = mat.length;
  const n = mat[0].length;
  const moves = [[-1, 0], [1, 0], [0, 1], [0, -1]];
  const q = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) {
        q.push([i, j, 0]);
      } else {
        mat[i][j] = Infinity;
      }
    }
  }

  while (q.length) {
    const [i, j, dep] = q.shift();

    for (const move of moves) {
      const [dx, dy] = move;
      const x = i + dx;
      const y = j + dy;
      
      if (x >= 0 && y >= 0 && x < m && y < n) {
        if (mat[x][y] === Infinity) {
          mat[x][y] = dep + 1;

          q.push([x, y, dep + 1]);
        }
      }
    }
  }

  return mat;
}