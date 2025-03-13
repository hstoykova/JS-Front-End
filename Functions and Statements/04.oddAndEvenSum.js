function oddEvenSum(numbers) {
  let numberAsString = numbers.toString();
  let evenSum = 0;
  let oddSum = 0;

  for (let digit of numberAsString) {
    digit = Number(digit);

    if (digit % 2 == 0) {
      evenSum += digit;
    } else {
      oddSum += digit;
    }
  }

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddEvenSum(1000435);
oddEvenSum(3495892137259234);

/*
You will receive a single number. You have to write a function, that returns the sum of all even and all odd digits from that number.
*/
