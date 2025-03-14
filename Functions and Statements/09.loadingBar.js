function load(num) {
  if (num == 100) {
    console.log("100% Complete!");
    console.log("[%%%%%%%%%%]");
    return;
  }

  let progress = num / 10;
  let remaining = 10 - progress;

  console.log(`${num}% [${"%".repeat(progress)}${".".repeat(remaining)}]`);
  console.log("Still loading...");
}

load(30);
load(50);
load(100);

/*
You will receive a single number between 0 and 100, which is divided with 10 without residue (0, 10, 20, 30...).

Your task is to create a function that visualizes a loading bar depending on the number you have received in the input.
*/
