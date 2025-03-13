function charRange(a, b) {
  let code1 = a.charCodeAt(0);
  let code2 = b.charCodeAt(0);

  let result = [];

  for (let i = Math.min(code1, code2) + 1; i < Math.max(code1, code2); i++) {
    result.push(String.fromCharCode(i));
  }

  console.log(result.join(" "));
}

charRange("a", "d");
charRange("#", ":");
charRange("C", "#");

/*
Write a function that receives two characters and prints on a single line all the characters in between them according to the ASCII code. 
Keep in mind that the second character code might be before the first one inside the ASCII table.
*/
