
document.addEventListener('DOMContentLoaded', function () {

const container = document.querySelector(".container");
const changeSize = document.querySelector(".changeSize");
let size = 16;

createNewGrid();



container.addEventListener("mouseover", (event) =>{
  let str = "#" + event.target.id;
  let cell = document.querySelector(str);
  cell.style.backgroundColor = "red";
});

changeSize.addEventListener("click",newSize);

function newSize (){
  size = prompt("Insert new size");
  while (size > 100)
    if (size > 100) size = prompt("It can't be over 100");
  deleteGrid();
  createNewGrid();
}

function deleteGrid(){
  for (let i = 1; i < size ** 2; i++){
    while (container.firstChild) 
      container.removeChild(container.firstChild);   
  }
}

function createNewGrid(){
  console.log("iej");
  for(let i = 0; i < size ** 2; i++){
    console.log("je");
    const div = document.createElement("div");
    div.classList.toggle("cell");
    div.id = "cell" + i;
    div.style.border = "1px solid black";
    div.style.padding = (800 / size / 2) - 1 + "px";
    container.appendChild(div);
  }
}

});