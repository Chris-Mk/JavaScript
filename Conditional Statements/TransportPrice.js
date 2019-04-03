function transportPrice(input) {
    let kilometers = Number(input.shift());
    let period = input.shift();

    let price = 0;
    let taxiCost = 0;

    if (period === 'day') {
        taxiCost = .79;
    } else {
        taxiCost = .90;
    }

    if (kilometers < 20) {
        price = .70 + (kilometers * taxiCost);
    } else if (kilometers < 100) {
        price = kilometers * .09;
    } else {
        price = .06 * kilometers;
    }

    console.log(cost.toFixed(2));
}

transportPrice([5, 'day']);