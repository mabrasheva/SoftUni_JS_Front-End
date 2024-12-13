function adventure(input) {
    const heroesNumber = Number(input.shift());
    const heroesData = input.slice(0, heroesNumber);
    const commands = input.slice(heroesNumber);
    const maxNumberOfBullets = 6;
    const maxHp = 100;

    const heroes = heroesData.reduce((result, hero) => {
        const [name, hp, bullets] = hero.split(' ');
        result[name] = {
            hp: Number(hp),
            bullets: Number(bullets),
        };
        return result;
    }, {});

    function printHeroes() {
        Object.keys(heroes).forEach(heroName => {
            console.log(heroName);
            console.log(` HP: ${heroes[heroName].hp}`);
            console.log(` Bullets: ${heroes[heroName].bullets}`);
        })
    }

    for (const element of commands) {
        const [command, ...args] = element.split(' - ');

        if (command === 'Ride Off Into Sunset') {
            printHeroes();
            return;
        }

        if (command === 'FireShot') {
            const [heroName, target] = args;
            if (!heroes[heroName].bullets) {
                console.log(`${heroName} doesn't have enough bullets to shoot at ${target}!`);
            } else {
                heroes[heroName].bullets -= 1;
                console.log(`${heroName} has successfully hit ${target} and now has ${heroes[heroName].bullets} bullets!`);
            }
        }

        if (command === 'TakeHit') {
            const [heroName, damage, attacker] = args;
            heroes[heroName].hp -= Number(damage);
            if (heroes[heroName].hp <= 0) {
                delete heroes[heroName];
                console.log(`${heroName} was gunned down by ${attacker}!`);
            } else {
                console.log(`${heroName} took a hit for ${damage} HP from ${attacker} and now has ${heroes[heroName].hp} HP!`);
            }
        }

        if (command === 'Reload') {
            const [heroName] = args;
            if (heroes[heroName].bullets === maxNumberOfBullets) {
                console.log(`${heroName}'s pistol is fully loaded!`);
            } else {
                const reloadedNumberOfBullets = maxNumberOfBullets - heroes[heroName].bullets;
                heroes[heroName].bullets = maxNumberOfBullets;
                console.log(`${heroName} reloaded ${reloadedNumberOfBullets} bullets!`);
            }
        }

        if (command === 'PatchUp') {
            const [heroName, amount] = args;
            if (heroes[heroName].hp === maxHp) {
                console.log(`${heroName} is in full health!`);
            } else {
                const heroInitialHp = heroes[heroName].hp;
                heroes[heroName].hp += Number(amount);
                if (heroes[heroName].hp > maxHp) {
                    heroes[heroName].hp = maxHp;
                }
                const heroRecoveredHp = heroes[heroName].hp - heroInitialHp;
                console.log(`${heroName} patched up and recovered ${heroRecoveredHp} HP!`);
            }
        }
    }
}

adventure(["2",
    "Gus 100 0",
    "Walt 100 6",
    "TakeHit - Gus - 80 - Bandit",
    "PatchUp - Gus - 20",
    "Ride Off Into Sunset"]);
