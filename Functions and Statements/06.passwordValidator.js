function validator(pass) {
  let errors = [];

  if (pass.length < 6 || pass.length > 10) {
    errors.push("Password must be between 6 and 10 characters");
  }

  let pattern = /^[a-z0-9]+$/i;

  if (!pattern.test(pass)) {
    errors.push("Password must consist only of letters and digits");
  }

  let digitPattern = /\d.*\d/;

  if (!digitPattern.test(pass)) {
    errors.push("Password must have at least 2 digits");
  }

  if (errors.length) {
    console.log(errors.join("\n"));
  } else {
    console.log("Password is valid");
  }
}

validator("logIn");
validator("MyPass123");
validator("Pa$s$s");

/*
Write a function that checks if a given password is valid. Password validations are:
· The length should be 6 - 10 characters (inclusive)
· It should consist only of letters and digits
· It should have at least 2 digits

If a password is a valid print: "Password is valid".

If it is NOT valid, for every unfulfilled rule print a message:
· "Password must be between 6 and 10 characters"
· "Password must consist only of letters and digits"
· "Password must have at least 2 digits"
*/
