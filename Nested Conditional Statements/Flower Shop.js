function flowerShop(input) {
    let hibiscus = Number(input.shift());
    let roses = Number(input.shift());
    let tulips = Number(input.shift());
    let season = input.shift();
    let isHoliday = input.shift();

    let hibiscusCost = 0;
    let rosesCost = 0;
    let tulipsCost = 0;
    let totalCost = 0;

    if (season === "Spring" || season === "Summer") {
        hibiscusCost = hibiscus * 2.00;
        rosesCost = roses * 4.10;
        tulipsCost = tulips * 2.50;
        totalCost = hibiscusCost + rosesCost + tulipsCost;

        if (isHoliday === "Y") {
            totalCost *= 1.15;
        }

        if (tulips > 7) {
            totalCost *= .95;
        }
    } else if (season === "Autumn" || season === "Winter") {
        hibiscusCost = hibiscus * 3.75;
        rosesCost = roses * 4.50;
        tulipsCost = tulips * 4.15;
        totalCost = hibiscusCost + rosesCost + tulipsCost;

        if (isHoliday === "Y") {
            totalCost *= 1.15;
        }

        if (roses >= 10) {
            totalCost *= .90;
        }
    }

    if ((hibiscus + roses + tulips) > 20) {
        totalCost *= .80;
    }

    console.log(`${(totalCost).toFixed(2)}`);
}

flowerShop([2, 4, 8, "Spring", "Y"]);
flowerShop([10, 10, 10, "Autumn", "N"]);
flowerShop([3, 10, 9, "Winter", "N"]);