function solve(wordsAsString, text) {
  let words = wordsAsString.split(", ");
  let tokens = text.split(" ");

  for (let i = 0; i < tokens.length; i++) {
    for (let word of words) {
      let stars = "*".repeat(word.length);
      if (tokens[i] == stars) {
        tokens[i] = word;
        break;
      }
    }
  }

  console.log(tokens.join(" "));
}

solve("great", "softuni is ***** place for learning new programming languages");
solve(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);

/*
Write a function, which receives two parameters.

The first parameter will be a string with some words separated by ', '.

The second parameter will be a string that contains templates containing '*'.

Find the word with the same length as the template and replace it
*/
