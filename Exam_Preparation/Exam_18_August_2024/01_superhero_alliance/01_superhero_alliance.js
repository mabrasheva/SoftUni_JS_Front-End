function superhero_alliance(input) {
    const hero_number = Number(input.shift());
    const heroesData = input.slice(0, hero_number)
        .map(hero => hero.split('-'));
    let commands = input.slice(hero_number)
        .map(command => command.split(' * '));

    const heroes = heroesData.reduce((result, hero) => {
        const [name, superpowers, energy] = hero;
        const superpowerList = superpowers.split(',');
        result[name] = {
            superpowers: superpowerList,
            energy: Number(energy),
        };
        return result;
    }, {});

    commands.reduce((acc, currentCommand) => {
        const [command, heroName, ...additionalData] = currentCommand;

        if (command === 'Evil Defeated!') {
            return acc;
        }

        if (command === 'Use Power') {
            const [superpower, energyRequired] = additionalData;

            if (heroes[heroName].superpowers.includes(superpower) && (heroes[heroName].energy >= Number(energyRequired))) {
                heroes[heroName].energy -= energyRequired;
                console.log(`${heroName} has used ${superpower} and now has ${heroes[heroName].energy} energy!`);
            } else {
                console.log(`${heroName} is unable to use ${superpower} or lacks energy!`);
            };
        }

        if (command === 'Train') {
            const [trainingEnergy] = additionalData;
            if (heroes[heroName].energy === 100) {
                console.log(`${heroName} is already at full energy!`);
            } else {
                const initialEnergy = heroes[heroName].energy;
                heroes[heroName].energy += Number(trainingEnergy);
                if (heroes[heroName].energy > 100) {
                    heroes[heroName].energy = 100;
                }
                const energyGained = heroes[heroName].energy - initialEnergy;
                console.log(`${heroName} has trained and gained ${energyGained} energy!`);
            };
        }

        if (command === 'Learn') {
            const [newSuperpower] = additionalData;
            let heroSuperPowers = heroes[heroName].superpowers;

            if (heroSuperPowers.includes(newSuperpower)) {
                console.log(`${heroName} already knows ${newSuperpower}.`);
            } else {
                heroSuperPowers.push(newSuperpower);
                console.log(`${heroName} has learned ${newSuperpower}!`);
            }
        }

        return acc;
    }, heroes);

    for (const hero in heroes) {
        console.log(`Superhero: ${hero}`);
        console.log(`- Superpowers: ${heroes[hero].superpowers.join(', ')}`);
        console.log(`- Energy: ${heroes[hero].energy}`);
    }

}

superhero_alliance([
    "3",
    "Iron Man-Repulsor Beams,Flight-80",
    "Thor-Lightning Strike,Hammer Throw-10",
    "Hulk-Super Strength-60",
    "Use Power * Iron Man * Flight * 30",
    "Train * Thor * 20",
    "Train * Hulk * 50",
    "Learn * Hulk * Thunderclap",
    "Use Power * Hulk * Thunderclap * 70",
    "Evil Defeated!"
]);
