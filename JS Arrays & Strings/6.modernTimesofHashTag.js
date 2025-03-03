function solve(text) {
  let pattern = /^#([A-Za-z]+)$/;

  let tokens = text.split(" ");

  for (let token of tokens) {
    let match = token.match(pattern);

    if (match) {
      console.log(match[1]);
    }
  }
}

solve("Nowadays everyone uses # to tag a #special word in #socialMedia");
solve(
  "The symbol # is known #variously in English-speaking #regions as the #number sign"
);

/*
The input will be a single string.

Find all special words starting with #. If the found special word does not consist only of letters, then it is invalid and should not be printed.

Finally, print out all the special words you found without the label (#) on a new line.
*/
