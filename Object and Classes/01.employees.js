function personalNumber(names) {
  let result = {};

  for (let name of names) {
    result[name] = name.length;
  }

  for (let name in result) {
    console.log(`Name: ${name} -- Personal Number: ${result[name]}`);
  }
}

personalNumber([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);

personalNumber(["Samuel Jackson", "Will Smith", "Bruce Willis", "Tom Holland"]);

/*
You're tasked to create a list of employees and their personal numbers.
You will receive an array of strings. Each string is an employee name and to assign them a personal number you have to find the length of the name (whitespace included).
Try to use an object.
At the end print all the list employees in the following format:
"Name: {employeeName} -- Personal Number: {personalNum}"
*/
