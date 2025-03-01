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

/*You are given a group of people, the type of the group, and the day of the week they are going to stay. Based on that information calculate how much they have to pay and print that price on the console. Use the table below. In each cell is the price for a single person.

The output should look like that: `Total price: {price}`. The price should be formatted to the second decimal point.

Friday Saturday Sunday

Students 8.45 9.80 10.46

Business 10.90 15.60 16

Regular 15 20 22.50

There are also discounts based on some conditions:

· Students – if the group is bigger than or equal to 30 people you should reduce the total price by 15%

· Business – if the group is bigger than or equal to 100 people 10 of them can stay for free

· Regular – if the group is bigger than or equal to 10 and less than or equal to 20 reduce the total price by 5%

Note: You should reduce the prices in that EXACT order.*/
