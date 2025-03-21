function wordsTracker(array) {
  let searchedWords = array[0].split(" ");
  let targetWords = array.splice(1, array.length - 1);
  let wordObj = {};

  for (let word of searchedWords) {
    wordObj[word] = 0;

    for (let element of targetWords) {
      if (element === word) {
        wordObj[word] += 1;
      }
    }
  }

  let sortedEntries = Object.entries(wordObj).sort((a, b) => b[1] - a[1]);

  for (let entry of sortedEntries) {
    console.log(`${entry[0]} - ${entry[1]}`);
  }
}

wordsTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);

wordsTracker([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);

/*
Write a function that receives an array of words and finds occurrences of given words in that sentence.
The input will come as an array of strings. The first string will contain the words you will be looking for separated by a space. 
All strings after that will be the words in which you will check for a match.
Print for each word how many times it occurs. The words should be sorted by count in descending.
*/
