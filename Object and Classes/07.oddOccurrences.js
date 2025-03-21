function solve(string) {
  let wordObj = {};

  let wordArr = string.split(" ");

  for (let word of wordArr) {
    if (word.toLowerCase() in wordObj) {
      wordObj[word.toLowerCase()] += 1;
    } else {
      wordObj[word.toLowerCase()] = 1;
    }
  }

  let wordKeys = Object.keys(wordObj);
  let oddWordKeys = [];

  for (let key of wordKeys) {
    if (wordObj[key] % 2 != 0) {
      oddWordKeys.push(key);
    }
  }

  console.log(oddWordKeys.join(" "));
}

solve("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
solve("Cake IS SWEET is Soft CAKE sweet Food");

/*
Write a function that extracts the elements of a sentence, if it appears an odd number of times (case-insensitive).
The input comes as a single string. The words will be separated by a single space.
*/
