function solve(start, end) {
  let sum = 0;
  let str = "";
  for (var i = start; i <= end; i++) {
    str += i + " ";
    sum += i;
  }
  console.log(str);
  console.log("Sum: " + sum);
}

solve(5, 10);
solve(0, 26);
