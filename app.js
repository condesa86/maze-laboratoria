var mazeArray =
 [ "*", true, true, true,
   true,  false, false, false,
   true, true, true, true,
   true, true, true, "f",
 ];

 function drawMaze(){
    document.getElementById("container").innerText = ""

    for(var i = 0; i<mazeArray.length;i++){
      var divNew = document.createElement("div");
      divNew.id = i+1;
      if(mazeArray[i] === "*"){
        divNew.classList.add("cell");
        divNew.classList.add("active");
      }
      else if (mazeArray[i] === true) {
        divNew.classList.add("cell");
      }
      else if (mazeArray[i] === false) {
        divNew.classList.add("cell");
        divNew.classList.add("wall");
      }
      else if (mazeArray[i] === "f") {
        divNew.classList.add("cell");
        divNew.classList.add("end");
      }
      var container = document.getElementById("container");
      divNew.innerText = i ;
      container.appendChild(divNew);
    }
 }

drawMaze();

document.addEventListener("keydown", mover);

function mover() {
  if (event.keyCode === 38) {
    moveUp();
  } else if (event.keyCode === 40) {
    moveDown();
  } else if (event.keyCode === 37) {
    moveLeft();
  } else if (event.keyCode === 39) {
    moveRight();
  }
}

function moveUp(){
  var currentPosition = buscarAstericoEnArreglo()
  var newPosition = currentPosition - 4;
  if(newPosition < 0){
    return
  }
  else if (newPosition == 5 || newPosition == 6 || newPosition == 7) {
    return
  }
  mazeArray[newPosition] = "*";
  mazeArray[currentPosition] = true;
  drawMaze();
}

function moveDown(){
  var currentPosition = buscarAstericoEnArreglo()
  var newPosition = currentPosition + 4;
  if(newPosition == mazeArray[newPosition] == "f"){
    alert("ganaste");
    document.removeEventListener("keydown",mover);
  }
  if(newPosition >15){
    return
  }
  else if (newPosition == 5 || newPosition == 6 || newPosition == 7) {
    return
  }
  mazeArray[newPosition] = "*";
  mazeArray[currentPosition] = true;
  drawMaze();
}

function moveLeft(){
  var currentPosition = buscarAstericoEnArreglo()
  var newPosition = currentPosition - 1;

  if(currentPosition % 4 == 0){
    return false;
  }
  mazeArray[newPosition] = "*";
  mazeArray[currentPosition] = true;
  drawMaze();
}

function moveRight(){
  var currentPosition = buscarAstericoEnArreglo()
  var newPosition = currentPosition + 1;
  if(newPosition == 15){
    alert("ganaste");
    document.removeEventListener("keydown",mover);
  }
  if(newPosition % 4 == 0 || newPosition == 5){
    return
  }

  mazeArray[newPosition] = "*";
  mazeArray[currentPosition] = true;
  drawMaze();
}

function buscarAstericoEnArreglo(){
  for(var i = 0;i < mazeArray.length;i++){
    if(mazeArray[i]  === "*"){
      return i;
    }
  }
  return false;
}
