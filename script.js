// Your code here
const table = document.getElementById("the-ul");
const addRowButton = document.getElementById("add-row");
addRowButton.addEventListener("click", makeRow);

table.addEventListener("click", colorize);

function makeRow() {
  const newLi = document.createElement("tr");
  for (let i = 0; i < 20; i++) {
    const td = document.createElement("td");
    newLi.appendChild(td);
  }
  table.appendChild(newLi);
}

function colorize(event) {
  console.log("Clicked!");
  const targetSquare = event.target;
  if (targetSquare.className.length) {
    targetSquare.className = "";
  } else {
    targetSquare.className = "red";
  }
}
