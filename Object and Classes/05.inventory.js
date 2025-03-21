function inventory(data) {
  let registry = [];

  for (let row of data) {
    let [name, level, items] = row.split(" / ");
    level = Number(level);

    let hero = {
      name,
      level,
      items,
    };

    registry.push(hero);
  }

  registry.sort(compareLevels);

  for (let hero of registry) {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`);
  }

  function compareLevels(a, b) {
    return a.level - b.level;
  }
}

inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
inventory([
  "Batman / 2 / Banana, Gun",
  "Superman / 18 / Sword",
  "Poppy / 28 / Sentinel, Antara",
]);

/*
Create a function, which creates a register for heroes, with their names, level, and items (if they have such).
The input comes as an array of strings. Each element holds data for a hero, in the following format:
"{heroName} / {heroLevel} / {item1}, {item2}, {item3}..."

You must store the data about every hero. The name is a string, a level is a number and the items are all strings.

The output is all of the data for all the heroes you’ve stored sorted ascending by level. The data must be in the following format for each hero:
Hero: {heroName}
level => {heroLevel}
Items => {item1}, {item2}, {item3}

Note: If there are two heroes with the same name, they should be treated as different individuals and the name should be printed twice.
*/
