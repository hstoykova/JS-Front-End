function palindrome(nums) {
  for (let num of nums) {
    let numAsString = num.toString();
    let isPalindrome = true;

    for (let i = 0; i < (numAsString.length - 1) / 2; i++) {
      if (numAsString[i] != numAsString[numAsString.length - i - 1]) {
        isPalindrome = false;
        break;
      }
    }

    console.log(isPalindrome);
  }
}

palindrome([123, 323, 421, 121]);
palindrome([32, 2, 232, 1010]);

/*
A palindrome is a number, which reads the same backward as forward, such as 323 or 1001. 
Write a function, which receives an array of positive integers and checks if each integer is a palindrome or not.

Output
If the current integer is a palindrome, print: "true"
 Otherwise, print: "false"
*/
