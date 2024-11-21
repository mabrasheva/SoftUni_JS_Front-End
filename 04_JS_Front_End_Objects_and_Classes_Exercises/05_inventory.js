// Function, which creates a register for heroes, with their names, level, and items (if they have such). 
// The input comes as an array of strings. Each element holds data for a hero, in the following format:
// "{heroName} / {heroLevel} / {item1}, {item2}, {item3}..." 
// You must store the data about every hero. The name is a string, a level is a number and the items are all strings.
// The output is all of the data for all the heroes you’ve stored sorted ascending by level. The data must be in the following format for each hero:
// Hero: {heroName}
// level => {heroLevel}
// Items => {item1}, {item2}, {item3}

function heroInfo(input) {

    class HeroClass {
        constructor(hero, level, items) {
            this.Hero = hero;
            this.level = level;
            this.items = items.join(', ');
        }

        printHeroInfo() {
            console.log(`Hero: ${this.Hero}`);
            console.log(`level => ${this.level}`);
            console.log(`items => ${this.items}`);
        }
    }

    let heroArray = [];

    for (const element of input) {
        let [heroName, heroLevel, heroItems] = element.split(' / ');
        heroLevel = parseInt(heroLevel);
        const heroItemsArray = heroItems.split(', ');
        const hero = new HeroClass(heroName, heroLevel, heroItemsArray);
        heroArray.push(hero);
    }

    heroArray.sort((a, b) => a.level - b.level);

    for (const heroObj of heroArray) {
        heroObj.printHeroInfo();
    }
}

heroInfo([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
