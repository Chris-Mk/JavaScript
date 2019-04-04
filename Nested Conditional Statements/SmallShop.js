function smallShop(input) {
    let product = input.shift();
    let city = input.shift();
    let quantity = Number(input.shift());

    let price = 0;
    switch (city) {
        case 'Sofia':
            if (product === 'coffee') {
                price = .50;
            } else if (product === 'water') {
                price = .80;
            } else if (product === 'beer') {
                price = 1.20;
            } else if (product === 'sweets') {
                price = 1.45;
            } else {
                price = 1.60;
            }
            break;
        case 'Plovdiv':
            if (product === 'coffee') {
                price = .40;
            } else if (product === 'water') {
                price = .70;
            } else if (product === 'beer') {
                price = 1.15;
            } else if (product === 'sweets') {
                price = 1.30;
            } else {
                price = 1.50;
            }
            break;
        case 'Varna':
            if (product === 'coffee') {
                price = .45;
            } else if (product === 'water') {
                price = .70;
            } else if (product === 'beer') {
                price = 1.10;
            } else if (product === 'sweets') {
                price = 1.35;
            } else {
                price = 1.55;
            }
            break;
    }

    console.log((quantity * cost).toFixed(2));
}

smallShop(['peanuts', 'Plovdiv', 1])