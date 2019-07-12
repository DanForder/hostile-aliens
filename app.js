class Ship {
  constructor() {
    // this._hitpoints;
    // this._damageLoss;
    this._isAlive = true;
    // this._shipType;
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
    if (!ship._isAlive) {
      str += `<p id="ship">${ship._shipType} : DEAD</p>`;
    } else {
      str += `<p id="ship">${ship._shipType} : ${ship._hitpoints}</p>`;
    }
    HTMLShipContainer.innerHTML = str;
  });
}

function fire() {
  let filteredArray = filterDeadShips();
  let randomArrayIndex = Math.floor(Math.random() * filteredArray.length);
  filteredArray[randomArrayIndex].takeDamage;
  filteredArray[randomArrayIndex].checkAlive;
  if (filteredArray[randomArrayIndex]._shipType === "Mother Ship" && !filteredArray[randomArrayIndex]._isAlive) {
    killAll();
  }
  convertShipsToHTML();
  if(filterDeadShips().length === 0){
    winGame();
  }
}

function filterDeadShips() {
  return shipArray.filter(ship => ship._isAlive);
}

function killAll() {
  shipArray.forEach(ship => {
    ship._isAlive = false;
  });
  convertShipsToHTML();
}

function winGame(){
    HTMLdescription.innerHTML = "You've killed all the innocent aliens! Play again?";
}

function reset(){
    HTMLdescription.innerHTML = "The aliens are here! Can you save the world?";
    shipArray = [];
    makeShips(numOfMotherShips,numOfDefenceShips,numOfAttackShips);
    convertShipsToHTML();
}
const numOfMotherShips = 1;
const numOfDefenceShips = 5;
const numOfAttackShips = 8;

const HTMLShipContainer = document.getElementById("ship-container");
const HTMLdescription = document.getElementById("description");

let shipArray = [];

reset();