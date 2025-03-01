function solve(num) {
  let sum = 0;
  let str = `${num}`;
  let bool = true;
  let current = str[0];

  for (let i = 0; i < str.length; i++) {
    sum += parseInt(str[i]);
    if (i > 0) {
      if (current == str[i]) {
        bool = true;
      } else {
        bool = false;
      }
    }
  }
  console.log(bool);
  console.log(sum);
}

solve(2222222);
solve(1234);
solve(777999);
solve(2);

/*Write a function that takes an integer number as an input and check if all the digits in a given number are the same or not.

Print on the console true if all numbers are the same and false if not. On the next line print the sum of all digits.

The input comes as an integer number.

The output should be printed on the console.*/
