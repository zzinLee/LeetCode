/**
 * @param {number} red
 * @param {number} blue
 * @return {number}
 */
var maxHeightOfTriangle = function(redOne, blueOne) {
  const redStart = startsWith("red", 1, redOne, blueOne);
  const blueStart = startsWith("blue", 1, redOne, blueOne);
  
  return Math.max(redStart, blueStart);
};

function startsWith(color, depth, red, blue) {
    if (color === "red") {
      if (red - depth >= 0) {
        red -= depth;
        
        return startsWith("blue", depth + 1, red, blue);
      } else {
        return depth - 1;
      }
    }
    
    if (color === "blue") {
      if (blue - depth >= 0) {
        blue -= depth;
        
        return startsWith("red", depth + 1, red, blue);
      } else {
        return depth - 1;
      }
    }
  }
