function solve(num) {
  let sum = 0;
  let str = `${num}`;
  for (let i = 0; i < str.length; i++) {
    sum += parseInt(str[i]);
  }
  console.log(sum);
}

solve(245678);
solve(97561);
