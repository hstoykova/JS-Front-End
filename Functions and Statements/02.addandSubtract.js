function solve(num1, num2, num3) {
  console.log(subtract(sum(num1, num2), num3));

  function sum(a, b) {
    return a + b;
  }

  function subtract(x, y) {
    return x - y;
  }
}

solve(23, 6, 10);
solve(1, 17, 30);
solve(42, 58, 100);

/*You will receive three integer numbers.
Write a function sum() to calculate the sum of the first two integers and a function subtract(), which subtracts the result of the function the sum() and the third integer.*/
