function solve(num) {
  let sum = 0;
  let str = `${num}`;
  let bool = true;
  let current = str[0];

  for (let i = 0; i < str.length; i++) {
    sum += parseInt(str[i]);
    if (i > 0) {
      if (current == str[i]) {
        bool = true;
      } else {
        bool = false;
      }
    }
  }
  console.log(bool);
  console.log(sum);
}

solve(2222222);
solve(1234);
solve(777999);
solve(2);
