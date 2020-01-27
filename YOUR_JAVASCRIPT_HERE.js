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
  name: "Skeleton",
  health: 8,
  heroic: false,
  weapon: {
    type: "",
    damage: Math.floor(Math.random() * (5 - 2) + 2)
  }
};

//select your hero
function selectFemaleHero() {
  document.getElementById("hero-male").style.visibility = "hidden";
  document.getElementById("hero-male").style.alignContent = "center";
}

function selectMaleHero() {
  document.getElementById("hero-female").style.visibility = "hidden";
  document.getElementById("hero-female").style.alignContent = "center";
}

//create name
function createName() {
  let newName = prompt("Enter your hero name");
  if (newName != null) {
    document.getElementById(
      "name"
    ).innerHTML = `Greetings ${newName}! Ready for your fight?`;

    if (newName != null) {
      hero.name = newName;
    }
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
    displayStats(hero);
  }
}

function fight(person, otherPerson) {
  if (!person.name) {
    alert("Please create your hero name first");
    return false;
  }
  person.health -= otherPerson.weapon.damage;
  otherPerson.health -= person.weapon.damage;
  displayStats(hero);

  if (person.health <= 4 && person.health >= 1) {
    alert("Your health is almost finished. Need rest");
  }
  if (person.health <= 0) {
    alert("You lost!");
  }

  if (otherPerson.health <= 0) {
    alert("You Won!");
    document.getElementById("enemy").remove();
  }
}

//display the hero condition
function displayStats(person) {
  const heroCond = document.getElementById("heroCond");

  while (heroCond.firstChild) {
    heroCond.removeChild(heroCond.firstChild);
  }
  //create elements on browse
  const heroHealth = document.createElement("div");
  const weaponType = document.createElement("div");
  const weaponDamage = document.createElement("div");

  heroHealth.innerHTML = `Health: ${person.health}`;
  weaponType.innerHTML = `Weapon Type: ${person.weapon.type}`;
  weaponDamage.innerHTML = `Weapon Damage: ${person.weapon.damage}`;

  heroCond.appendChild(heroHealth);
  heroCond.appendChild(weaponType);
  heroCond.appendChild(weaponDamage);
}

displayStats(hero);
