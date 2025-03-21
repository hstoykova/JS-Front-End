function solve(commands) {
  let parking = new Set();

  for (let row of commands) {
    let [command, id] = row.split(", ");

    if (command == "IN") {
      parking.add(id);
    } else if (command == "OUT") {
      parking.delete(id);
    }
  }

  if (parking.size) {
    console.log([...parking].sort().join("\n"));
  } else {
    console.log("Parking Lot is Empty");
  }
}

solve([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
solve(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);

/*
Write a function that:
· Records a car number for every car that enters the parking lot
· Removes a car number when the car goes out
· Input will be an array of strings in format [direction, carNumber]

Print the output with all car numbers which are in the parking lot sorted in ascending by number.
If the parking lot is empty, print: "Parking Lot is Empty".
*/
