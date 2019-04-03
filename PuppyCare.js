function puppyCare(input) {
    let purchasedFood = Number(input.shift()) * 1000;
    let foodEaten = input.shift();
    let isEnough = true;
    
    while (foodEaten !== "Adopted") {
        purchasedFood -= Number(foodEaten);

        if (purchasedFood < 0) {
            isEnough = false;
        }

        foodEaten = input.shift();
    }

    if (isEnough) {
        console.log(`Food is enough! Leftovers: ${purchasedFood} grams.`);
    } else {
        console.log(`Food is not enough. You need ${Math.abs(purchasedFood)} grams more.`);
    }
}

puppyCare([4, 130, 345, 400, 180, 230, 120, "Adopted"]);
puppyCare([3, 1000, 1000, 1000, "Adopted"]);
puppyCare([2, 999, 456, 999, 999, 123, 456, "Adopted"]);