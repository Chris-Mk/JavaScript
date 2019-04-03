function christmasSweets(input) {
    let baklavaPrice = Number(input.shift());
    let muffinsPrice = Number(input.shift());
    let whiskey = Number(input.shift());
    let candy = Number(input.shift());
    let biscuit = Number(input.shift());

    let totalCost = (whiskey * baklavaPrice * 1.60) +
                    (candy * muffinsPrice * 1.80) +
                    (biscuit * 7.50);

    console.log(totalCost.toFixed(2));
}

christmasSweets([6.90, 4.20, 1.5, 2.5, 1]);