// Your code here
const table = document.getElementById("the-ul");
// Drag click functionallity, to revert change "mouseover" to "click"
table.addEventListener("mouseover", colorize);
////////////////////////////

const addRowButton = document.getElementById("add-row");
addRowButton.addEventListener("click", makeRow);

function makeRow() {
  const newLi = document.createElement("tr");
  for (let i = 0; i < 20; i++) {
    const td = document.createElement("td");
    newLi.appendChild(td);
  }
  table.appendChild(newLi);
}

// Drag click functionallity, to revert just delete these lines
let mouseIsDown = false;
document.addEventListener('mousedown', () => mouseIsDown = true);
document.addEventListener('mouseup', () => mouseIsDown = false);
////////////////////////////

function colorize(event) {
  // Drag click functionallity
  if (!mouseIsDown) return;
  ////////////////////////////
  
  console.log("Clicked!");
  const targetSquare = event.target;

  const color = document.getElementById("color-select").value;

  if (targetSquare.className.length) {
    targetSquare.className = "";
  } else {
    targetSquare.className = color;
  }
}
