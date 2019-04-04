function newHouse(input) {
    let flowerType = input.shift();
    let numOfFlowers = Number(input.shift());
    let budget = Number(input.shift());

    let cost = 0;

    switch (flowerType) {
        case 'Roses':
            cost = 5 * numOfFlowers;
            if (numOfFlowers > 80) {
                cost *= .90; 
            }
            break;
        case 'Dahlias':
            cost = 3.80 * numOfFlowers;
            if (numOfFlowers > 90) {
                cost *= .85;
            }
            break;
        case 'Tulips':
            cost = 2.80 * numOfFlowers;
            if (numOfFlowers > 80) {
                cost *= .85;
            }
            break;
        case 'Narcissus':
            cost = 3 * numOfFlowers;
            if (numOfFlowers < 120) {
                cost *= 1.15;
            }
            break;
        case 'Gladiolus':
            cost = 2.50 * numOfFlowers;
            if (numOfFlowers < 80) {
                cost *= 1.20;
            }
            break;
    }

    if (cost <= budget) {
        console.log(`Hey, you have a great garden with ${numOfFlowers} ${flowerType} and ${(budget - cost).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(cost - budget).toFixed(2)} leva more.`);
    }
}

newHouse(['Narcissus', 119, 360]);