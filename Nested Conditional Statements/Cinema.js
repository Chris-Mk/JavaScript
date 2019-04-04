function cinema(input) {
    let screen = input.shift();
    let rows = Number(input.shift());
    let columns = Number(input.shift());

    let seats = rows * columns;
    let price = 0;

    switch (screen) {
        case 'Premiere': price = 12.00; break;
        case 'Normal': price = 7.50; break;
        case 'Discount': price = 5.00; break;
    }

    console.log((cost * seats).toFixed(2) + ' leva');
}

cinema(['Normal', 21, 13]);