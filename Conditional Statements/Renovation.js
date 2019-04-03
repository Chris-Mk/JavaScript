function renovation(input) {
    let budget = Number(input.shift());
    let width = Number(input.shift());
    let length = Number(input.shift());
    let base = Number(input.shift());
    let height = Number(input.shift());
    let tilePrice = Number(input.shift());
    let master = Number(input.shift());

    let floorArea = width * length;
    let tileArea = (base * height) / 2;
    let tilesNeeded = Math.ceil(floorArea / tileArea) + 5;
    let totalCost = tilesNeeded * tilePrice + master;

    if (totalCost <= budget) {
        console.log(`${(budget - totalCost).toFixed(2)} lv left.`);
    } else {
        console.log(`You'll need ${(totalCost - budget).toFixed(2)} lv more.`)
    }
}

renovation([500, 3, 2.5, 0.5, 0.7, 7.80, 100]);