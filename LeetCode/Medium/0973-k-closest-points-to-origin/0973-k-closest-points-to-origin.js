/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
function kClosest(points, k) {
  let count = 0;

  points.sort((a, b) => {
    const [ax, ay] = a;
    const [bx, by] = b;

    const aLength = (ax ** 2) + (ay ** 2);
    const bLength = (bx ** 2) + (by ** 2);

    return aLength - bLength;
  });

  return points.slice(0, k);
}