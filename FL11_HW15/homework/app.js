function Hamburger(type, calories, isSecretAdded = false) {
  const secretIngredientCalories = 100;
  const cheeseCalories = 120;
  const tomatoCalories = 20;
  const maxTomatosCount = 2;
  this.type = type;
  calories = isSecretAdded ? calories + secretIngredientCalories : calories;
  let cheeseCount = 0,
    tomatoCount = 0,
    biteCount = 0;

  this.getCalories = function() {
    return calories;
  };

  this.setCalories = function(value) {
    calories = value;
  };

  this.addCheese = function() {
    if (biteCount === 0) {
      if (cheeseCount === 0) {
        calories += cheeseCalories;
        console.log('cheese has been added');
        cheeseCount++;
      } else {
        console.log('Sorry, you can add cheese only once');
      }
    } else {
      console.log('Sorry, you cannot add cheese');
    }
  };

  this.addTomato = function() {
    if (biteCount === 0) {
      if (tomatoCount < maxTomatosCount) {
        calories += tomatoCalories;
        console.log('tomato has been added');
        tomatoCount++;
      } else {
        console.log('Sorry, you can add tomato only twice');
      }
    } else {
      console.log('Sorry, you cannot add tomato');
    }
  };

  this.addSecretIngredient = function() {
    if (
      !isSecretAdded &&
      cheeseCount === 0 &&
      tomatoCount === 0 &&
      biteCount === 0
    ) {
      calories += secretIngredientCalories;
      console.log('Secret ingredient has been added');
      isSecretAdded = true;
    } else if (isSecretAdded) {
      console.log('Sorry, you can add secret ingredient only once');
    } else if (cheeseCount > 0 || tomatoCount > 0) {
      console.log(
        'Sorry, you can add secret ingredient only before all other ingredients'
      );
    } else if (biteCount > 0) {
      console.log('Sorry, you cannot add secret ingredient');
    }
  };

  this.bite = function() {
    console.log('bite');
    biteCount++;
  };

  this.info = function() {
    const secretIngredient = isSecretAdded ? '\n - with secret ingredient;' : '';
    const cheese = cheeseCount > 0 ? '\n - with cheese;' : '';
    let tomato = '';
    let bit = '';

    switch (tomatoCount) {
      case 1:
        tomato = '\n - with 1 tomato;';
        break;
      case 2:
        tomato = '\n - with 2 tomatos;';
        break;
      default:
        tomato = '';
    }    

    switch (biteCount) {
      case 0:
        bit = '';
        break;
      case 1:
        bit = '\n - is bit 1 time;';
        break;
      default:
        bit = `\n - is bit ${biteCount} times;`;
    }

    console.log(`${type} hamburger:${secretIngredient}${cheese}${tomato}${bit}\n - total calories: ${calories}.`);
  };
}
