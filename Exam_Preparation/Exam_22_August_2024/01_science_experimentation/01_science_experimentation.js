function scienceExperimentation(input) {
    const chemicalsNumber = Number(input.shift());
    const chemicalsData = input.slice(0, chemicalsNumber)
        .map(chemical => chemical.split(' # '));
    let commands = input.slice(chemicalsNumber)
        .map(command => command.split(' # '));

    const chemicals = chemicalsData.reduce((result, chemical) => {
        const [name, quantity] = chemical;
        result[name] = {
            quantity: Number(quantity),
        };
        return result;
    }, {});

    commands.forEach(currentCommand => {
        const [command, ...additionalData] = currentCommand;

        if (command === 'End') {
            return;
        }

        if (command === 'Mix') {
            let [firstChemical, secondChemical, amount] = additionalData;
            amount = Number(amount);
            if ((chemicals[firstChemical].quantity >= amount) && (chemicals[secondChemical].quantity >= amount)) {
                chemicals[firstChemical].quantity -= amount;
                chemicals[secondChemical].quantity -= amount;
                console.log(`${firstChemical} and ${secondChemical} have been mixed. ${amount} units of each were used.`);
            } else {
                console.log(`Insufficient quantity of ${firstChemical}/${secondChemical} to mix.`);
            }
            return;
        }

        if (command === 'Replenish') {
            let [chemicalName, amount] = additionalData;
            amount = Number(amount);

            if (!chemicals[chemicalName]) {
                console.log(`The Chemical ${chemicalName} is not available in the lab.`);
                return;
            }

            if ((chemicals[chemicalName].quantity + amount) <= 500) {
                chemicals[chemicalName].quantity += amount

                console.log(`${chemicalName} quantity increased by ${amount} units!`);
            } else {
                const initialQuantity = chemicals[chemicalName].quantity;
                const addedQuantity = 500 - initialQuantity;
                chemicals[chemicalName].quantity = 500;

                console.log(`${chemicalName} quantity increased by ${addedQuantity} units, reaching maximum capacity of 500 units!`);
            }
            return;
        }

        if (command === 'Add Formula') {
            const [chemicalName, formula] = additionalData;

            if (!chemicals[chemicalName]) {
                console.log(`The Chemical ${chemicalName} is not available in the lab.`);
            } else {
                chemicals[chemicalName].formula = formula;
                console.log(`${chemicalName} has been assigned the formula ${formula}.`);
            }
        }        
    });

    Object.entries(chemicals).forEach(([chemical, data]) => {
        let output = `Chemical: ${chemical}, Quantity: ${data.quantity}`;

        if (data.formula) {
            output += `, Formula: ${data.formula}`;
        }

        console.log(output);
    });

}

scienceExperimentation(['4',
    'Water # 200',
    'Salt # 100',
    'Acid # 50',
    'Base # 80',
    'Mix # Water # Salt # 50',
    'Replenish # Salt # 150',
    'Add Formula # Acid # H2SO4',
    'End']
);
