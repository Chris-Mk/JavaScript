function energyBooster(input) {
    let fruit = input.shift();
    let size = input.shift();
    let pieces = Number(input.shift());
    let price = 0;
    
    if (size === "small") {
        switch (fruit) {
            case "Watermelon":
                price = 56;
                break;
            case "Mango":
                price = 36.66;
                break;
            case "Pineapple":
                price = 42.10;
                break;
            case "Raspberry":
                price = 20;
                break;
        }
        price *= 2;
    } else if (size === "big") {
        switch (fruit) {
            case "Watermelon":
                price = 28.70;
                break;
            case "Mango":
                price = 19.60;
                break;
            case "Pineapple":
                price = 24.80;
                break;
            case "Raspberry":
                price = 15.20;
                break;
        }
        price *= 5;
    }

    price *= pieces;
    if (cost >= 400 && cost <= 1000) {
        price *= .85;
    } else if (cost > 1000) {
        price *= .50;
    }

    console.log(`${cost.toFixed(2)} lv.`);
}

energyBooster(["Watermelon", "big", 4]);
energyBooster(["Pineapple", "small", 1]);
energyBooster(["Raspberry", "small", 50]);
energyBooster(["Mango", "big", 8]);