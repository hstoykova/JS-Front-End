function perfectNum(num) {
  let divisors = [1];
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      divisors.push(i);
    }
  }

  let sum = 0;
  for (let n of divisors) {
    sum += n;
  }

  if (sum == num) {
    console.log("We have a perfect number!");
  } else {
    console.log("It's not so perfect.");
  }
}

perfectNum(6);
perfectNum(28);
perfectNum(1236498);

/*
Write a function that receives a number and checks if that number is perfect or NOT.
A perfect number is a positive integer that is equal to the sum of its proper positive divisors. 
That is the sum of its positive divisors excluding the number itself (also known as its aliquot sum).

Output
If the number is perfect, print: "We have a perfect number!"
Otherwise, print: "It's not so perfect."
*/
