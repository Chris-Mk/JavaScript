function toyShop(input) {
    let excursionPrice = parseFloat(input.shift());
    let puzzles = parseInt(input.shift());
    let dolls = parseInt(input.shift());
    let bears = parseInt(input.shift());
    let minions = parseInt(input.shift());
    let trucks = parseInt(input.shift());

    let totalToys = puzzles + dolls + bears + minions + trucks;
    let puzzlesPrice = puzzles * 2.60;
    let dollsPrice = dolls * 3;
    let bearsPrice = bears * 4.10;
    let minionsPrice = minions * 8.20;
    let trucksPrice = trucks * 2;
    let totalPrice = puzzlesPrice + dollsPrice + bearsPrice + minionsPrice + trucksPrice;

    if (totalToys >= 50) {
        totalPrice *= .75;
    }

    totalPrice *= .90;
    if (totalPrice >= excursionPrice) {
        console.log(`Yes! ${(totalPrice - excursionPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(excursionPrice - totalPrice).toFixed(2)} lv needed.`)
    }
}

toyShop([320, 8, 2, 5, 5, 1]);