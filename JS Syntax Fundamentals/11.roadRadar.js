function solve(speed, area) {
  let limit = 0;
  let status = null;

  if (area == "motorway") {
    limit = 130;
  } else if (area == "interstate") {
    limit = 90;
  } else if (area == "city") {
    limit = 50;
  } else if (area == "residential") {
    limit = 20;
  }

  if (speed <= limit && speed > 0) {
    console.log(`Driving ${speed} km/h in a ${limit} zone`);
  } else {
    if (speed - limit <= 20) {
      status = "speeding";
    } else if (speed - limit > 20 && speed - limit <= 40) {
      status = "excessive speeding";
    } else {
      status = "reckless driving";
    }

    console.log(
      `The speed is ${
        speed - limit
      } km/h faster than the allowed speed of ${limit} - ${status}`
    );
  }
}

solve(40, "city");
solve(21, "residential");
solve(120, "interstate");
solve(200, "motorway");

/*Write a function that determines whether a driver is within the speed limit. You will receive the speed and the area. Each area has a different limit:

· On the motorway, the limit is 130 km/h

· On the interstate, the limit is 90 km/h

· In the city, the limit is 50 km/h

· Within a residential area, the limit is 20 km/h

If the driver is within the limits, there should be a printed speed and the speed limit.

`Driving {speed} km/h in a {speed limit} zone`

If the driver is over the limit, however, your function should print the severity of the infraction and the difference in speeds.

`The speed is {difference} km/h faster than the allowed speed of {speed limit} - {status}`

For speeding up to 20 km/h over the limit, the status should be speeding.

For speeding up to 40 km/h over the limit, the status should be excessive speeding.

For anything else, status should be reckless driving.

The input comes as 2 string parameters. The first element is the current speed (number), the second element is the area.

The output should be printed on the console.*/
