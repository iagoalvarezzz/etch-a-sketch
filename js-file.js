
document.addEventListener('DOMContentLoaded', function () {

const container = document.querySelector(".container");
const changeSize = document.querySelector(".changeSize");

for(let i = 0; i < 16 * 16; i++){
  const div = document.createElement("div");
  div.classList.toggle("cell");
  div.id = "cell" + i;
  div.style.border = "2px solid black";
  div.style.padding = "23px";
  container.appendChild(div);
}



container.addEventListener("mouseover", (event) =>{
  let str = "#" + event.target.id;
  let cell = document.querySelector(str);
  cell.style.backgroundColor = "red";
});

changeSize.addEventListener("click",newSize);

function newSize (){
  let size = prompt("Insert new size");
  while (size > 100)
    if (size > 100) size = prompt("It can't be over 100");
  

}

});