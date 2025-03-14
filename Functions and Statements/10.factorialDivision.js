function factorial(p, q) {
  let result = 1;

  if (p > q) {
    for (let n = p; n > q; n--) {
      result *= n;
    }
  } else {
    for (let n = q; n > p; n--) {
      result /= n;
    }
  }

  console.log(result.toFixed(2));
}

factorial(5, 2);
factorial(6, 2);

/*
Write a function that receives two integer numbers. Calculate the factorial of each number. 
Divide the first result by the second and print the division formatted to the second decimal point.
*/
