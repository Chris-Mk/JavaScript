function vegetableMarket(input) {
    let vegPricePerKg = parseFloat(input.shift());
    let fruitPricePerKg = parseFloat(input.shift());
    let vegKg = parseInt(input.shift());
    let fruitKg = parseInt(input.shift());
    
    let totalVegCost = vegPricePerKg * vegKg;
    let totalFruitCost = fruitPricePerKg * fruitKg;
    let totalCost = totalVegCost + totalFruitCost;
    let euro = totalCost / 1.94;

    console.log(euro);
}

vegetableMarket([.194, 19.4, 10, 10]);