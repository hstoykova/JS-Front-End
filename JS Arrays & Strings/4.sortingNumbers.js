function solve(numbersArr) {
  numbersArr.sort((a, b) => a - b);

  let result = [];

  while (numbersArr.length) {
    if (result.length % 2 == 0) {
      result.push(numbersArr.shift());
    } else {
      result.push(numbersArr.pop());
    }
  }

  return result;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));

/*Write a function that sorts an array of numbers so that the first element is the smallest one, the second is the biggest one, the third is the second smallest one, the fourth is the second biggest one, and so on.

Return the resulting array.*/
