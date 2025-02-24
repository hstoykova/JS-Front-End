function solve(a, b, c) {
  let word;
  for (let i = 3; i > 0; i--) {
    word = c + " " + b + " " + a;
  }
  console.log(word);
}

solve("A", "B", "C");
