function spellbook(input) {
    let spell = input.shift();

    for (const element of input) {
        const [command, ...args] = element.split('!');

        if (command === 'End') {
            console.log(`The concealed spell is: ${spell}`);
            return
        }

        if (command === 'RemoveEven') {
            spell = [...spell]
                .filter((_, index) => index % 2 === 0)
                .join('');
        } else if (command === 'TakePart') {
            const [, fromIndex, toIndex] = element.split('!');
            spell = spell.slice(Number(fromIndex), Number(toIndex));
        } else if (command === 'Reverse') {
            let [, substring] = element.split('!');
            if (!spell.includes(substring)) {
                console.log('Error');
                continue;
            } else {
                reversedSubstring = [...substring].reverse().join('');
                spell = spell.replace(substring, '') + reversedSubstring;
            }
        }
        console.log(spell);
    }
}

spellbook(["asAsl2adkda2mdaczsa",
    "RemoveEven",
    "TakePart!1!9",
    "Reverse!maz",
    "End"]);
