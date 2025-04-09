function solve(input) {
  // String assoc array
  let farmerArea = {};
  // Set assoc array
  let farmerTasks = {};

  let n = Number(input.shift()); //or input[0]

  for (let i = 0; i < n; i++) {
    let line = input.shift();

    let [name, area, tasksAsString] = line.split(" ");
    let tasks = tasksAsString.split(",");
    farmerArea[name] = area;
    farmerTasks[name] = new Set(tasks);
  }

  while (input[0] != "End") {
    let line = input.shift();

    let tokens = line.split(" / ");
    let command = tokens[0];

    if (command == "Execute") {
      let name = tokens[1];
      let area = tokens[2];
      let task = tokens[3];

      if (farmerArea[name] != area || !farmerTasks[name].has(task)) {
        console.log(`${name} cannot execute the task: ${task}.`);
        continue;
      }

      console.log(`${name} has executed the task: ${task}!`);
    } else if (command == "Change Area") {
      let name = tokens[1];
      let area = tokens[2];

      farmerArea[name] = area;

      console.log(`${name} has changed their work area to: ${area}`);
    } else if (command == "Learn Task") {
      let name = tokens[1];
      let task = tokens[2];

      if (farmerTasks[name].has(task)) {
        console.log(`${name} already knows how to perform ${task}.`);

        continue;
      }

      farmerTasks[name].add(task);
      console.log(`${name} has learned a new task: ${task}.`);
    }
  }

  for (let name in farmerArea) {
    let sortedTasks = [...farmerTasks[name].values()].sort((a, b) =>
      a.localeCompare(b)
    );

    console.log(
      `Farmer: ${name}, Area: ${farmerArea[name]}, Tasks: ${sortedTasks.join(
        ", "
      )}`
    );
  }
}

// parse setup input and populate data structures
// - determine how many lines are setup lines
// - take the next n lines and parse them
// - split line into name, area and tasks types
// - split task types
//
// process commands until command End is received
//
// # Execute
// - verify work area and print error message if it doesn't match
// - verify the farmer knows how to do the task
// - print success message
//
// # Change area
// - modify farmer record and set new area
//
// # Learn
// - verify farmer doesn't know task and print error message if they do
// - add task to farmer's liand and print success message otherwise
//
// output:
// - print each farmer and their area
// - sort tasks by name

solve([
  "2",
  "John garden watering,weeding",
  "Mary barn feeding,cleaning",
  "Execute / John / garden / watering",
  "Execute / Mary / garden / feeding",
  "Learn Task / John / planting",
  "Execute / John / garden / planting",
  "Change Area / Mary / garden",
  "Execute / Mary / garden / cleaning",
  "End",
]);

console.log("------");

solve([
  "3",
  "Alex apiary harvesting,honeycomb",
  "Emma barn milking,cleaning",
  "Chris garden planting,weeding",
  "Execute / Alex / apiary / harvesting",
  "Learn Task / Alex / beeswax",
  "Execute / Alex / apiary / beeswax",
  "Change Area / Emma / apiary",
  "Execute / Emma / apiary / milking",
  "Execute / Chris / garden / watering",
  "Learn Task / Chris / pruning",
  "Execute / Chris / garden / pruning",
  "End",
]);

/*
You are the owner of a farm in a small picturesque village. Your team consists of farmers, and you need to manage their tasks and the areas they work in. Each farmer has a name, a work area, and a list of tasks they can perform.
On the first line of the input, you will receive an integer n – the number of farmers in your team. On the next n lines, the details of each farmer will follow in the format: 
"{farmer name} {work area} {task 1,task 2,...}"
The work area represents the location where the farmer works (e.g., garden, barn, apiary), and the list of tasks includes the activities the farmer can perform.
After forming your team, you will receive different commands, separated by " / ", until the command "End" is given. There are three types of actions farmers can perform:
"Execute / {farmer name} / {work area} / {task}"
⦁	If the farmer is in the correct work area and can perform the task, print: 
"{farmer name} has executed the task: {task}!"
⦁	If the farmer is not in the correct work area or cannot perform the task, print: 
"{farmer name} cannot execute the task: {task}."
"Change Area / {farmer name} / {new work area}"
⦁	The farmer changes their work area. Print:
"{farmer name} has changed their work area to: {new work area}"
"Learn Task / {farmer name} / {new task}"
⦁	If the farmer already knows the task, print:
"{farmer name} already knows how to perform {new task}."
⦁	Otherwise, add the new task to their list and print: 
"{farmer name} has learned a new task: {new task}."
Input
⦁	On the first line, you will receive an integer n.
⦁	On the next n lines, you will receive details about the farmers.
⦁	After that, you will receive commands until the "End" command.
Output
⦁	Print the results of each command.
⦁	At the end, print all farmers with their updated work areas and task lists in the format: 
"Farmer: {farmer name}, Area: {work area}, Tasks: {task 1, task 2, ...}"
⦁	The Tasks should be printed in alphabetical order.
Constraints
⦁	The names of the farmers will be unique.
⦁	All given commands will be valid.
*/
