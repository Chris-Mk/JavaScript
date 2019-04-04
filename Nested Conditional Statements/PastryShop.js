function pastryShop(input) {
    let sweets = input.shift();
    let quantity = Number(input.shift());
    let day = Number(input.shift());

    let cost = 0;
    if (day <= 15) {
        switch (sweets) {
            case "Cake":
                cost = 24;
                break;
            case "Souffle":
                cost = 6.66;
                break;
            case "Baklava":
                cost = 12.60;
                break;
        }

        cost *= quantity;
        cost *= .90;
    } else {
        switch (sweets) {
            case "Cake":
                cost = 28.70;
                break;
            case "Souffle":
                cost = 9.80;
                break;
            case "Baklava":
                cost = 16.98;
                break;
        }

        cost *= quantity;
    }

    if (day <= 22) {
        if (cost >= 100 && cost < 200) {
            cost *= .85;
        } else if (cost > 200) {
            cost *= .75;
        }
    }

    console.log(`${cost.toFixed(2)}`);
}

pastryShop(["Cake", 5, 12]);
pastryShop(["Cake", 10, 15]);
pastryShop(["Souffle", 20, 24]);
pastryShop(["Baklava", 50, 1]);
