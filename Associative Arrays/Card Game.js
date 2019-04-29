function cardGame(input) {
    let players = new Map();

    for (const element of input) {
        let [name, cards] = element.split(': ');
        let cardsArray = cards.split(', ');
        const setArray = new Set(cardsArray);

        let sum = 0;
        for (const card of setArray) {
            let [power, type] = card.split('');

            if (power === 'J') {
                power = 11;
            } else if (power === 'Q') {
                power = 12;
            } else if (power === 'K') {
                power = 13;
            } else if (power === 'A') {
                power = 14;
            } else {
                power = Number(power);
            }

            if (type === 'S') {
                type = 4;
            } else if (type === 'H') {
                type = 3;
            } else if (type === 'D') {
                type = 2;
            } else if (type === 'C') {
                type = 1;
            }
            sum += power * type;
        }

        if (!players.has(name)) {
            players.set(name, sum);
        } else {
            players.set(name, players.get(name) + sum);
        }
    }

    [...players].forEach(e => console.log(`${e[0]}: ${e[1]}`));
}

cardGame(['Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD']);