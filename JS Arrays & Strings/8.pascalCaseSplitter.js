function solve(text) {
  let pattern = /[A-Z][a-z]*/g;

  let result = text.match(pattern);

  console.log(result.join(", "));
}

solve("SplitMeIfYouCanHaHaYouCantOrYouCan");
solve("HoldTheDoor");
solve("ThisIsSoAnnoyingToDo");

/*
You will receive a single string.

This string is written in PascalCase format. Your task here is to split this string by every word in it.

Print them joined by comma and space.
*/
