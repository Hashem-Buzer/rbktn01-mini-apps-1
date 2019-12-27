var courtEntities = [
  0, 0, 0,
  0, 0, 0,
  0, 0, 0
];
var bool = true;
var count = 0;
var char;

// FUNCTIONALITY

// this function responsible for the changes in the array according to the table in html file.
function entityToggler(id, sign) {
  if (courtEntities[id] === 0) {
    if (sign === 'X') {
      courtEntities[id] += 1;
      return true;
    } else if (sign === 'O') {
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
  if (bool && entityToggler(id, 'X')) {
    char = 'X';
    entity.innerHTML = (char);
    bool = false;
    count++;
  } else if (!bool && entityToggler(id, 'O')) {
    char = 'O';
    entity.innerHTML = (char);
    bool = true;
    count++;
  }
  console.log(count)
  if (count === 9) {
    alert('This is a Tie !!');
    reset();
  }
  if (result(char)) {
    alert(`${char} wins`);
    reset();
  }
}

// this function resets the court.
function reset() {
  var entity = document.getElementsByClassName('entity');
  for (var i = 0; i < entity.length; i++) {
    entity[i].innerText = '';
    courtEntities[i] = 0;
  }
  bool = true;
  count = 0;
}

// this function defines either winning or tie
function result(char) {
  if (
    (courtEntities[0] === 1 && courtEntities[1] === 1 && courtEntities[2] === 1) ||
    (courtEntities[0] === 2 && courtEntities[1] === 2 && courtEntities[2] === 2) ||

    (courtEntities[0] === 1 && courtEntities[4] === 1 && courtEntities[8] === 1) ||
    (courtEntities[0] === 2 && courtEntities[4] === 2 && courtEntities[8] === 2) ||

    (courtEntities[0] === 1 && courtEntities[3] === 1 && courtEntities[6] === 1) ||
    (courtEntities[0] === 2 && courtEntities[3] === 2 && courtEntities[6] === 2) ||

    (courtEntities[1] === 1 && courtEntities[4] === 1 && courtEntities[7] === 1) ||
    (courtEntities[1] === 2 && courtEntities[4] === 2 && courtEntities[7] === 2) ||

    (courtEntities[2] === 1 && courtEntities[4] === 1 && courtEntities[6] === 1) ||
    (courtEntities[2] === 2 && courtEntities[4] === 2 && courtEntities[6] === 2) ||

    (courtEntities[2] === 1 && courtEntities[5] === 1 && courtEntities[8] === 1) ||
    (courtEntities[2] === 2 && courtEntities[5] === 2 && courtEntities[8] === 2) ||

    (courtEntities[3] === 1 && courtEntities[4] === 1 && courtEntities[5] === 1) ||
    (courtEntities[3] === 2 && courtEntities[4] === 2 && courtEntities[5] === 2) ||

    (courtEntities[6] === 1 && courtEntities[7] === 1 && courtEntities[8] === 1) ||
    (courtEntities[6] === 2 && courtEntities[7] === 2 && courtEntities[8] === 2)) {

    return true;
  }
  return false;
}
