class Ship {
  constructor() {
    this._isAlive = true;
  }
  get takeDamage() {
    this._hitpoints -= this._damageLoss;
  }
  get checkAlive() {
    this._isAlive = this._hitpoints <= 0 ? false : true;
    return this._isAlive;
  }
}

class Mothership extends Ship {
  constructor() {
    super();
    this._hitpoints = 100;
    this._damageLoss = 9;
    this._shipType = "Mother Ship";
  }
}

class DefenceShip extends Ship {
  constructor() {
    super();
    this._hitpoints = 80;
    this._damageLoss = 10;
    this._shipType = "Defence Ship";
  }
}

class AttackShip extends Ship {
  constructor() {
    super();
    this._hitpoints = 45;
    this._damageLoss = 12;
    this._shipType = "Attack Ship";
  }
}

function makeShips(motherShips, defenceShips, attackShips) {
  for (let index = 0; index < motherShips; index++) {
    shipArray.push(new Mothership());
  }
  for (let index = 0; index < defenceShips; index++) {
    shipArray.push(new DefenceShip());
  }
  for (let index = 0; index < attackShips; index++) {
    shipArray.push(new AttackShip());
  }
}

function convertShipsToHTML() {
  let str = "";
  shipArray.forEach(ship => {
    !ship._isAlive
      ? (str += `<p id="ship">${ship._shipType} : DEAD</p>`)
      : (str += `<p id="ship">${ship._shipType} : ${ship._hitpoints}</p>`);
  });
  document.getElementById("ship-container").innerHTML = str;
}

function fire() {
  let filteredArray = filterDeadShips();
  let randomArrayIndex = Math.floor(Math.random() * filteredArray.length);
  filteredArray[randomArrayIndex].takeDamage;
  filteredArray[randomArrayIndex].checkAlive;
  if (
    filteredArray[randomArrayIndex]._shipType === "Mother Ship" &&
    !filteredArray[randomArrayIndex]._isAlive
  ) {
    killAll();
  }
  convertShipsToHTML();
  if (filterDeadShips().length === 0) winGame();
}

function filterDeadShips() {
  return shipArray.filter(ship => ship._isAlive);
}

function killAll() {
  shipArray.forEach(ship => (ship._isAlive = false));
}

function winGame() {
  description.innerHTML = "Killed all the innocent aliens! Play again?";
  button.innerHTML = "Reset";
  button.setAttribute("onclick", "reset()");
}

function reset() {
  description.innerHTML = "The aliens are here! Can you save the world?";
  shipArray = [];
  button.innerHTML = "FIRE!";
  button.setAttribute("onclick", "fire()");
  makeShips(1, 5, 8);
  convertShipsToHTML();
}

const description = document.getElementById("description");
const button = document.getElementById("fire");
let shipArray = [];
reset();