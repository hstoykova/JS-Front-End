function solve(word, text) {
  let current = text.toLowerCase();
  let wordsInText = current.split(/\s+/);
  let result = wordsInText.indexOf(word);

  if (result >= 0) {
    console.log(word);
  } else {
    console.log(`${word} not found!`);
  }
}

solve("javascript", "JavaScript is the bestprogramming language");
solve("python", "JavaScript is the best programming language");

/*
The input will be given as two separated strings (a word as a first parameter and a text as a second).

Write a function that checks given text for containing a given word. The comparison should be case insensitive. Once you find a match, print the word and stop the program.

If you don't find the word print: "{word} not found!"
*/
