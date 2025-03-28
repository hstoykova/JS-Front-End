function solve() {
  let textInput = document.getElementById("text");
  let commandInput = document.getElementById("naming-convention");

  let text = textInput.value.toLocaleLowerCase();
  let tokens = text.split(" ");
  let command = commandInput.value;

  let output = document.getElementById("result");

  if (command != "Pascal Case" && command != "Camel Case") {
    output.textContent = "Error!";
    return;
  }

  for (let i = 1; i < tokens.length; i++) {
    let word = tokens[i];
    word = word[0].toLocaleUpperCase() + word.slice(1);
    tokens[i] = word;
  }

  if (command == "Pascal Case") {
    let word = tokens[0];
    tokens[0] = word[0].toLocaleUpperCase() + word.slice(1);
  }

  output.textContent = tokens.join("");
}
