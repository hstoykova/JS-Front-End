window.addEventListener("load", solve);

function solve() {
  let submitBtn = document.getElementById("next-btn");
  submitBtn.addEventListener("click", onSubmit);

  function onSubmit(ev) {
    ev.preventDefault();

    let email = document.getElementById("email").value;
    let event = document.getElementById("event").value;
    let location = document.getElementById("location").value;

    if (!email || !event || !location) {
      return;
    }

    let result = create("li", [
      create("article", [
        create("h4", [email]),
        create("p", [create("strong", ["Event:"]), create("br", []), event]),
        create("p", [
          create("strong", ["Location:"]),
          create("br", []),
          location,
        ]),
      ]),
    ]);

    let editBtn = create("button", ["edit"]);
    editBtn.className = "action-btn edit";
    editBtn.addEventListener("click", () => onEdit(email, event, location));
    result.appendChild(editBtn);

    let applyBtn = create("button", ["apply"]);
    applyBtn.className = "action-btn apply";
    applyBtn.addEventListener("click", () => onApply(result));
    result.appendChild(applyBtn);

    result.className = "application";

    let list = document.getElementById("preview-list");
    list.appendChild(result);
  }

  function onEdit(email, event, location) {}

  function onApply(element) {}

  function create(tagName, content) {
    let element = document.createElement(tagName);

    for (let child of content) {
      if (typeof child == "object") {
        element.appendChild(child);
      } else {
        let node = document.createTextNode(child);

        element.appendChild(node);
      }
    }

    return element;
  }
}

// add event listener to form
//
// parse form
// - prevent form submission
// - read and validate input values
// - create DOM element and add to list
// - configure event listeners
// - clear and disable form
//
// return for editind
// - recover input data
// - populate and enable form
// - remove DOM element
//
// apply event
// - copy values to new DOM element and add it to list
// - remove original element
