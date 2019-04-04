function fishingBoat(input) {
    let budget = Number(input.shift());
    let season = input.shift();
    let fishermen = input.shift();

    let cost = 0;

    switch (season) {
        case 'Summer':
        case 'Autumn':
            cost = 4200;
            break;
        case 'Spring':
            cost = 3000;
            break;
        case 'Winter':
            cost = 2600;
            break;
    }

    if (fishermen <= 6) {
        cost *= .90;
    } else if (fishermen <= 11) {
        cost *= .85;
    } else {
        cost *= .75;
    }

    if (season !== 'Autumn' && fishermen % 2 === 0) {
        cost *= .95;
    }

    if (cost <= budget) {
        console.log(`Yes! You have ${(budget - cost).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(cost - budget).toFixed(2)} leva.`);
    }
}

fishingBoat([2000, 'Winter', 13]);