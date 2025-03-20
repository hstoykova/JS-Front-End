function solve(towns) {
  let result = [];

  for (let item of towns) {
    let [town, latitude, longitude] = item.split(" | ");
    latitude = Number(latitude).toFixed(2);
    longitude = Number(longitude).toFixed(2);

    let current = {
      town,
      latitude,
      longitude,
    };

    result.push(current);

    console.log(current);
  }
}

console.log(
  solve(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"])
);

console.log(solve(["Plovdiv | 136.45 | 812.575"]));

/*
You’re tasked to create and print objects from a text table.
You will receive the input as an array of strings, where each string represents a table row, with values on the row separated by pipes " | " and spaces.
The table will consist of exactly 3 columns "Town", "Latitude" and "Longitude". The latitude and longitude columns will always contain valid numbers. Check the examples to get a better understanding of your task.
The output should be objects. Latitude and longitude must be parsed to numbers and formatted to the second decimal point!
*/
