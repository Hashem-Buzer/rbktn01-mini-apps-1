// FUNCTIONALITY
var courtEntities = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var bool = true;
var char;

// this function responsible for the changes in the array according to the table in html file.
function entityToggler(id) {
  if (courtEntities[id] === 0) {
    courtEntities[id] = 1;
    return true;
  }
  return false;
}


// VIEW

// this function responsible for the shapes.
function choose(id) {
  var entity = document.getElementById(id);
  if (entityToggler(id)) {
    if (bool) {
      char = 'X'
      entity.innerHTML = (char);
      bool = false;
    } else {
      char = 'O'
      entity.innerHTML = (char);
      bool = true;
    }
  }
}

// this function resets the court.
function reset() {
  var entity = document.getElementsByClassName('entity');
  for (var i = 0; i < entity.length; i++) {
    entity[i].innerText = '';
    courtEntities[i] = 0;
  }
}








// this function clear the main div.
// function playButton() {
//   var mainDiv = document.getElementById("main");
//   mainDiv.parentNode.innerHTML = ''

//   var courtDiv = document.createElement('div')
//   courtDiv.style.border = '1px solid black'
//   courtDiv.style.width = '50px';
//   courtDiv.style.height = '50px';
//   courtDiv.style.backgroundColor = 'red';
//   document.getElementById(mainDiv).appendChild(courtDiv);
//   // document.body.appendChild(courtDiv);
// }
