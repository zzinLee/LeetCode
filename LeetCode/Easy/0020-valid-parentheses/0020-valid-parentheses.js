/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const origin = s.split("");
    const checker = [];
    const openMap = new Map();
    const closeMap = new Map();
    openMap.set("(", ")");
    openMap.set("[", "]");
    openMap.set("{", "}");
    closeMap.set(")", "(");
    closeMap.set("]", "[");
    closeMap.set("}", "{");

    for (const ch of origin) {
      if (openMap.has(ch)) {
        checker.push(ch);
        continue;
      }
      
      if (closeMap.has(ch)) {
        if (checker.length === 0) return false;

        const pairChar = checker.pop();

        if (closeMap.get(ch) === pairChar) {
          continue;
        } else {
          return false;
        }
      }
    }
    
  return checker.length === 0;
};