
function isEven(n) {
    if (n % 2 == 0) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(isEven(4)); // true
  console.log(isEven(5)); // false

 
  function smallerNumber(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
console.log(smallerNumber(3, 2)); 
console.log(smallerNumber(100, 50)); 
console.log(smallerNumber(-3, -2)); 

function numberCheck(number){
if (number > 0){
    return "positive";
}else if(number == 0){
    return "zero";
}else {
    return "negative";
}
}
console.log(numberCheck(0));
console.log(numberCheck(-2));
console.log(numberCheck(2));

function isPalindrome(word) {
   
    word = word.toLowerCase();
    let reversedWord = word.split("").reverse().join("");
    
    if (word === reversedWord) {
      return true;
    } else {
      return false;
    }
  }

console.log(isPalindrome("mom")); // Output: true
console.log(isPalindrome("hello")); // Output: false
