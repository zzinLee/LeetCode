/**
 * @param {number[]} nums
 * @return {number}
 */
function maximumLength(nums) {
  //홀수이면 1, 짝수이면 0인 배열 numbers
  const numbers = nums.map((value) => value % 2);
  const EvenAndEven = [];
  const EvenAndOdd = [];
  const OddAndEven = [];
  const OddAndOdd = [];
  
  numbers.forEach((num, index) => {
    if (num % 2 === 0) { //짝수
      EvenAndEven.push(num);
      
      if (EvenAndOdd.length % 2 === 0) {
        EvenAndOdd.push(num);
      }
      
      if (OddAndEven.length % 2 === 1) {
        OddAndEven.push(num);
      }
    } else { //홀수
      OddAndOdd.push(num);
      
      if (OddAndEven.length % 2 === 0) {
        OddAndEven.push(num);
      }
      
      if (EvenAndOdd.length % 2 === 1) {
        EvenAndOdd.push(num);
      }
    }
  });
  
  return Math.max(EvenAndEven.length, EvenAndOdd.length, OddAndOdd.length, OddAndEven.length);
}
