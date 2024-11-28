
document.addEventListener('DOMContentLoaded', function () {

const container = document.querySelector(".container");
const changeSize = document.querySelector(".changeSize");
const changeMode = document.querySelector(".mode");
let size = 16;
let mode = 0;

createNewGrid();



container.addEventListener("mouseover", (event) =>{
  let str = "#" + event.target.id;
  let cell = document.querySelector(str);

  if (mode === 0){
    if (cell.style.backgroundColor !== "black")
      cell.style.opacity = 0;
    cell.style.backgroundColor = "black";
    cell.style.opacity = +cell.style.opacity + 0.1;
  } else{
    cell.style.opacity = 1;
    cell.style.backgroundColor = randomColor();
  }
});

changeMode.addEventListener("click",toggleMode);

changeSize.addEventListener("click",newSize);

function toggleMode(){
  if (changeMode.textContent === "Mode: opacity"){
    changeMode.textContent = "Mode: color";
    mode = 1;
  } else{
    changeMode.textContent = "Mode: opacity";
    mode = 0;
  }
}

function newSize (){
  size = prompt("Insert new size");
  while (size > 100 || size < 1)
    size = prompt("It has to be between 1 and 100");
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
  for(let i = 0; i < size ** 2; i++){
    const div = document.createElement("div");
    div.classList.toggle("cell");
    div.id = "cell" + i;
    div.style.border = "1px solid black";
    div.style.padding = (800 / size / 2) - 1 + "px";
    container.appendChild(div);
  }
}

function randomColor(){
  let value1 = Math.round(Math.random() * 256);
  let value2 = Math.round(Math.random() * 256);
  let value3 = Math.round(Math.random() * 256);
  let newColor = "rgb(" + value1 + "," + 
    value2 + "," + value3 + ")";
  return newColor;
}

});