var courtEntities = [
  0, 0, 0,
  0, 0, 0,
  0, 0, 0
];
var bool = true;
var char;


// FUNCTIONALITY

// this function responsible for the changes in the array according to the table in html file.
function entityToggler(id, sign) {
  if (courtEntities[id] === 0) {
    if (sign === 'X') {
      courtEntities[id] += 1;
      return true;
    } else {
      courtEntities[id] += 2;
      return true;
    }
  }
  return false;
}


// VIEW

// this function responsible for the shapes.
function viewForEntityToggler(id) {
  var entity = document.getElementById(id);
  // if (entityToggler(id, 'X')) {
  if (bool && entityToggler(id, 'X')) {
    char = 'X';
    entity.innerHTML = (char);
    bool = false;
  } else if (!bool && entityToggler(id, 'O')) {
    // bool = false
    char = 'O';
    entity.innerHTML = (char);
    bool = true;
  }
  // }
  result(char)
}

// this function resets the court.
function reset() {
  var entity = document.getElementsByClassName('entity');
  for (var i = 0; i < entity.length; i++) {
    entity[i].innerText = '';
    courtEntities[i] = 0;
  }
  bool = true;
}

// this function defines either winning or tie
function result(char) {

  if (((courtEntities[0] && courtEntities[1] && courtEntities[2]) === 1) ||
    ((courtEntities[3] && courtEntities[4] && courtEntities[5]) === 1) ||
    ((courtEntities[6] && courtEntities[7] && courtEntities[8]) === 1) ||


    ((courtEntities[0] && courtEntities[4] && courtEntities[8]) === 1) ||
    ((courtEntities[2] && courtEntities[4] && courtEntities[6]) === 1)) {

    alert(`${char} wins`);

  }
}

// alert('This is a Tie');