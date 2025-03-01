function solve(number, op1, op2, op3, op4, op5) {
  let startingPoint = parseInt(number);
  let options = [op1, op2, op3, op4, op5];

  for (let i = 0; i < options.length; i++) {
    if (options[i] == "chop") {
      startingPoint /= 2;
      console.log(startingPoint);
    }
    if (options[i] == "dice") {
      startingPoint = Math.sqrt(startingPoint);
      console.log(startingPoint);
    }
    if (options[i] == "spice") {
      startingPoint += 1;
      console.log(startingPoint);
    }
    if (options[i] == "bake") {
      startingPoint *= 3;
      console.log(startingPoint);
    }
    if (options[i] == "fillet") {
      startingPoint *= 0.8;
      console.log(startingPoint);
    }
  }
}

solve("32", "chop", "chop", "chop", "chop", "chop");
console.log("----");
solve("9", "dice", "spice", "chop", "bake", "fillet");
