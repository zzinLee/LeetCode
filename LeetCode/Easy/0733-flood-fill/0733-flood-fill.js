/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
function floodFill(image, sr, sc, color) {
  const m = image.length;
  const n = image[0].length;
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const visitChecker = Array.from(Array(m), () => Array(n).fill(0));
  const VISIT = "visited";
  const floodfill = image.map((row) => [...row]);
  const standardColor = image[sr][sc];
  const queue = [[sr, sc]];

  while (queue.length) {
    const [x, y] = queue.shift();

    if (visitChecker[x][y] === VISIT) continue;
    
    visitChecker[x][y] = VISIT;

    if (image[x][y] === standardColor) {
      floodfill[x][y] = color;
    }

    for (let i = 0; i < 4; i++) {
      const moveX = x + dx[i];
      const moveY = y + dy[i];

      if (moveX < 0 || moveY < 0 || moveX >= m || moveY >= n) continue;

      if (image[moveX][moveY] === standardColor) {
        queue.push([moveX, moveY]);
      }
    }
  }
  
  return floodfill;
}
