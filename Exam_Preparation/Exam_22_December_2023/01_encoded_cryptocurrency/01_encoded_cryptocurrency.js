function encodedCryptocurrency(input) {
    const encodedMessage = input.shift();
    let decodedMessage = encodedMessage;

    let line = input.shift();
    while (line !== 'Buy') {
        let [command, ...args] = line.split('?');
        switch (command) {
            case 'TakeEven':
                decodedMessage = [...decodedMessage]
                    .filter((_, index) => index % 2 === 0)
                    .join('');
                console.log(decodedMessage);
                break;
            case 'ChangeAll':
                let [substring, replacement] = args;
                while (decodedMessage.includes(substring)) {
                    decodedMessage = decodedMessage.replace(substring, replacement);
                }
                console.log(decodedMessage);
                break;
            case 'Reverse':
                let [subStr] = args;
                if (!decodedMessage.includes(subStr)) {
                    console.log('error');
                } else {
                    const reversedSubstring = [...subStr].reverse().join('');
                    decodedMessage = decodedMessage.replace(subStr, '') + reversedSubstring;
                    console.log(decodedMessage);
                }
                break
        }
        line = input.shift();
    }
    console.log(`The cryptocurrency is: ${decodedMessage}`);
}

encodedCryptocurrency(["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs",
    "TakeEven",
    "Reverse?!nzahc",
    "ChangeAll?m?g",
    "Reverse?adshk",
    "ChangeAll?z?i",
    "Buy"]);
