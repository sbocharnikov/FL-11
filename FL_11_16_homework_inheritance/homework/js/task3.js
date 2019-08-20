function Pokemon() {
  this.type = 'Pokemon';
  this.specie = 'Pokemon';
  this.hasWings = false;
}

Pokemon.prototype.getType = function() {
  return this.type;
};

Pokemon.prototype.getSpecie = function() {
  return this.specie;
};

Pokemon.prototype.canFly = function() {
  return this.hasWings;
};

Pokemon.prototype.getPokemonType = function() {
  return this.constructor.name;
};

Pokemon.prototype.evolve = function() {
  return this;
};

function Charizard() {
  this.type = 'Fire';
  this.specie = 'Flame Pokemon';
  this.hasWings = true;
}

Charizard.prototype = Object.create(Pokemon.prototype);

Charizard.prototype.constructor = Charizard;

function Charmeleon() {
  this.type = 'Fire';
  this.specie = 'Flame Pokemon';
  this.hasWings = false;
}

Charmeleon.prototype = Object.create(Charizard.prototype);

Charmeleon.prototype.constructor = Charmeleon;

Charmeleon.prototype.evolve = function() {
  return new Charizard();
};

function Charmander() {
  this.type = 'Fire';
  this.specie = 'Lizard Pokemon';
  this.hasWings = false;
}

Charmander.prototype = Object.create(Charmeleon.prototype);

Charmander.prototype.constructor = Charmander;

Charmander.prototype.evolve = function() {
  return new Charmeleon();
};

function Raichu() {
  this.type = 'Electric';
  this.specie = 'Mouse Pokemon';
  this.hasWings = false;
}

Raichu.prototype = Object.create(Pokemon.prototype);

Raichu.prototype.constructor = Raichu;

function Pikachu() {
  this.type = 'Electric';
  this.specie = 'Mouse Pokemon';
  this.hasWings = false;
}

Pikachu.prototype = Object.create(Raichu.prototype);

Pikachu.prototype.constructor = Pikachu;

Pikachu.prototype.evolve = function() {
  return new Raichu();
};

function Pichu() {
  this.type = 'Electric';
  this.specie = 'Mouse Pokemon';
  this.hasWings = false;
}

Pichu.prototype = Object.create(Pikachu.prototype);

Pichu.prototype.constructor = Pichu;

Pichu.prototype.evolve = function() {
  return new Pikachu();
};

const charmander = new Charmander();
const charmeleon = new Charmeleon();
const charizard = new Charizard();

console.log('charmander.getType() -> ', charmander.getType()); // -> “Fire”
console.log(
  'charmander.getType() === charmeleon.getType() -> ',
  charmander.getType() === charmeleon.getType()
); // -> true
console.log(
  'charmeleon.getType() === charizard.getType() -> ',
  charmeleon.getType() === charizard.getType(),
  '\n\n'
); // -> true

console.log(
  'charmander.evolve().constructor === Charmeleon -> ',
  charmander.evolve().constructor === Charmeleon
); // -> true
console.log(
  'charmeleon.evolve().constructor === Charizard -> ',
  charmeleon.evolve().constructor === Charizard, 
  '\n\n'
); // -> true

console.log('charmander.getSpecie() -> ', charmander.getSpecie()); // -> “Lizard Pokémon”
console.log('charmeleon.getSpecie() -> ', charmeleon.getSpecie()); // -> “Flame Pokémon”
console.log(
  'charizard.getSpecie() === charmeleon.getSpecie() -> ',
  charizard.getSpecie() === charmeleon.getSpecie(),
  '\n\n'
); // -> true

console.log('charmander.canFly() -> ', charmander.canFly()); // -> false
console.log(
  'charmander.canFly() === charmeleon.canFly() -> ',
  charmander.canFly() === charmeleon.canFly()
); // -> true
console.log('charizard.canFly() -> ', charizard.canFly(), '\n\n'); // -> true

const pichu = new Pichu();
console.log('pichu.getPokemonType() -> ', pichu.getPokemonType(), '\n\n'); // => Pichu

const pikachu = pichu.evolve();
console.log('pikachu.getPokemonType() -> ', pikachu.getPokemonType()); // Pikachu
console.log(
  'pikachu.constructor === Pikachu -> ',
  pikachu.constructor === Pikachu,
  '\n\n'
); // true

const raichu = pikachu.evolve();
console.log('raichu.getPokemonType() -> ', raichu.getPokemonType()); // Raichu
console.log('raichu.constructor === Raichu -> ', raichu.constructor === Raichu, '\n\n'); // true

const raichu2 = raichu.evolve(); // return raichu back as it's maximum level
console.log('raichu2 === raichu -> ', raichu2 === raichu); // true