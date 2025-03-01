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

/*Write a program that receives 6 parameters which are a number and a list of five operations. Perform the operations sequentially by starting with the input number and using the result of every operation as a starting point for the next one. Print the result of every operation in order. The operations can be one of the following:

· chop - divide the number by two

· dice - square root of a number

· spice - add 1 to the number

· bake - multiply number by 3

· fillet - subtract 20% from the number

The input comes as 6 string elements. The first element is the starting point and must be parsed to a number. The remaining 5 elements are the names of the operations to be performed.

The output should be printed on the console.*/
