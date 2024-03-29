const isValid = function(s) {
    const checker = [];
    const map = new Map([
      [")", "("],
      ["]", "["],
      ["}", "{"],
    ]);

    for (const ch of s) {
      if (map.has(ch)) {
        if (checker.length === 0) {
          return false;
        }
        
        const lastChecker = checker.pop();
        
        if (lastChecker !== map.get(ch)) {
          return false; 
        }  
      } else {
        checker.push(ch);
      }
    }
    
  return checker.length === 0;
};
