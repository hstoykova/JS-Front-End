function solve(peopleCount, groupType, dayOfWeek) {
  let totalSum = 0;
  let price;

  if (dayOfWeek == "Friday") {
    if (groupType == "Students") {
      price = 8.45;
    } else if (groupType == "Business") {
      price = 10.9;
      if (groupType == "Business" && peopleCount >= 100) {
        peopleCount -= 10;
      }
    } else {
      price = 15;
    }
  }

  if (dayOfWeek == "Saturday") {
    if (groupType == "Students") {
      price = 9.8;
    } else if (groupType == "Business") {
      price = 15.6;
      if (groupType == "Business" && peopleCount >= 100) {
        peopleCount -= 10;
      }
    } else {
      price = 20;
    }
  }

  if (dayOfWeek == "Sunday") {
    if (groupType == "Students") {
      price = 10.46;
    } else if (groupType == "Business") {
      price = 16;
      if (groupType == "Business" && peopleCount >= 100) {
        peopleCount -= 10;
      }
    } else {
      price = 22.5;
    }
  }

  totalSum += price * peopleCount;

  if (groupType == "Students" && peopleCount >= 30) {
    totalSum *= 0.85;
  }
  if (groupType == "Regular" && peopleCount >= 10 && peopleCount <= 20) {
    totalSum *= 0.95;
  }

  console.log("Total price: " + totalSum.toFixed(2));
}

solve(30, "Students", "Sunday");
solve(40, "Regular", "Saturday");
solve(150, "Business", "Saturday");
