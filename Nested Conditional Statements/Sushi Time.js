function sushiTime(input) {
    let sushiName = input.shift();
    let restaurantName = input.shift();
    let servings = input.shift();
    let order = input.shift();

    let totalSushiCost = 0, totalCost = 0;
    if (restaurantName === "Sushi Zone") {
        if (sushiName ==="sashimi") {
            totalSushiCost = servings * 4.99;
        } else if (sushiName === "maki") {
            totalSushiCost = servings * 5.29;
        } else if (sushiName === "uramaki") {
            totalSushiCost = servings * 5.99;
        } else if (sushiName === "temaki") {
            totalSushiCost = servings * 4.29;
        }
    } else if (restaurantName === "Sushi Time") {
        if (sushiName === "sashimi") {
            totalSushiCost = servings * 5.49;
        } else if (sushiName === "maki") {
            totalSushiCost = servings * 4.69;
        } else if (sushiName === "uramaki") {
            totalSushiCost = servings * 4.49;
        } else if (sushiName === "temaki") {
            totalSushiCost = servings * 5.19;
        }
    } else if (restaurantName === "Sushi Bar") {
        if (sushiName === "sashimi") {
            totalSushiCost = servings * 5.25;
        } else if (sushiName === "maki") {
            totalSushiCost = servings * 5.55;
        } else if (sushiName === "uramaki") {
            totalSushiCost = servings * 6.25;
        } else if (sushiName === "temaki") {
            totalSushiCost = servings * 4.75;
        }
    } else if (restaurantName === "Asian Pub") {
        if (sushiName === "sashimi") {
            totalSushiCost = servings * 4.50;
        } else if (sushiName === "maki") {
            totalSushiCost = servings * 4.80;
        } else if (sushiName === "uramaki") {
            totalSushiCost = servings * 5.50;
        } else if (sushiName === "temaki") {
            totalSushiCost = servings * 5.50;
        }
    } else {
        console.log(`${restaurantName} is invalid restaurant!`);
        return;
    }

    if (order === "Y") {
        totalCost = totalSushiCost * 1.2;
        console.log(`Total price: ${Math.ceil(totalCost).toFixed(0)} lv.`);
    } else {
        console.log(`Total price: ${Math.ceil(totalSushiCost).toFixed(0)} lv.`);
    }
}

sushiTime(["maki", "Sushi Zone", 4, "Y"]);