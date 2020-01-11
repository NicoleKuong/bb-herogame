// Write your JS here

//Characters object
const hero = {
  name: "",
  health: 10,
  heroic: true,
  inventory: [],
  weapon: {
    type: "",
    damage: 2
  }
};

const enemy = {
  name: 'Skeleton',
  health: 6,
  heroic: false,
  weapon: {
    type: "",
    damage: 3
  }
}

//select your hero
function selectFemaleHero() {
  document.getElementById("hero-male").style.visibility = "hidden";
  document.getElementById("hero-male").style.alignContent = "center";
}

function selectMaleHero() {
  document.getElementById("hero-female").style.visibility = "hidden";
  document.getElementById("hero-female").style.alignContent = "center";
}

function createName() {
  let newName = prompt("Enter your hero name");
  if (newName != null) {
    document.getElementById(
      "name"
    ).innerHTML = `Greetings ${newName}! Ready for you fight?`;
  }
}

function rest(person) {
  if (person.health === 10) {
    alert("Your health is already full!");
  } else {
    person.health = 10;
    return person;
  }
}

function pickUpItem(person, weapon) {
  person.inventory.push(weapon);
}

function equipWeapon(person) {
  if (person.inventory.length !== 0) {
    person.weapon = person.inventory[0];
  }
}

function fight ()
// function runs once selected hero
function displayStats(person) {
  const heroCond = document.getElementById("heroCond");

  //create elements on browse
  const heroHealth = document.createElement("div");
  const weaponType = document.createElement("div");
  const weaponDamage = document.createElement("div");

  heroHealth.innerHTML = `Health: ${person.health}`;
  weaponType.innerHTMl = `Weapon Type: ${person.weapon.type}`;
  weaponDamage.innerHTML = `Weapon Damage: ${person.weapon.damage}`;

  heroCond.appendChild(heroHealth);
  heroCond.appendChild(weaponType);
  heroCond.appendChild(weaponDamage);
}
displayStats(hero);
