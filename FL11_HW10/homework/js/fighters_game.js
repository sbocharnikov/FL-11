const magicHundred = 100;

function Fighter(fighter) {
  this.getName = () => fighter.name;
  this.getDamage = () => fighter.damage;
  this.getAgility = () => fighter.agility;
  this.getHealth = () => fighter.hp;
  this.totalHP = fighter.hp;
  this.heal = value => {
    fighter.hp = Math.min(fighter.hp + value, this.totalHP);
  };
  this.dealDamage = value => {
    fighter.hp = Math.max(fighter.hp - value, 0);
  };  
  this.wins = 0;
  this.losses = 0;
}

Fighter.prototype.attack = function(defender) {
  let attackProbability = magicHundred - defender.getAgility();
  if (Math.random() * magicHundred <= attackProbability) {
    defender.dealDamage(this.getDamage());
    console.log(
      `${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`
    );
  } else {
    console.log(this.getName() + ' attack missed');
  }
};

Fighter.prototype.logCombatHistory = function() {
  console.log(
    `Name: ${this.getName()}, Wins: ${this.wins}, Losses: ${this.losses}`
  );
};

Fighter.prototype.addWin = function() {
  this.wins++;
};

Fighter.prototype.addLoss = function() {
  this.losses++;
};

function battle(fighter1, fighter2) {
  if (!fighter1.getHealth()) {
    console.log(`${fighter1.getName()} is dead and can't fight`);
  }
  if (!fighter2.getHealth()) {
    console.log(`${fighter2.getName()} is dead and can't fight`);
  }
  while (fighter1.getHealth() && fighter2.getHealth()) {
    fighter1.attack(fighter2);
    if (fighter2.getHealth()) {
      fighter2.attack(fighter1);
    }
  }
  if (fighter1.getHealth() === 0) {
    fighter1.addLoss();
    fighter2.addWin();
  }
  if (fighter2.getHealth() === 0) {
    fighter1.addWin();
    fighter2.addLoss();
  }
}
