function alcoholMarket(input) {
    let whiskeyPrice = Number(input.shift());
    let beerLitres = Number(input.shift());
    let wineLitres = Number(input.shift());
    let rakiaLitres = Number(input.shift());
    let whiskeyLitres = Number(input.shift());

    let whiskeyCost = whiskeyPrice * whiskeyLitres;
    let rakiaCost = whiskeyPrice / 2 * rakiaLitres;
    let wineCost = whiskeyPrice / 2 * .60 * wineLitres;
    let beerCost = whiskeyPrice / 2 * .20 * beerLitres;
    let totalCost = whiskeyCost + rakiaCost + wineCost + beerCost;

    console.log(totalCost.toFixed(2));
}

alcoholMarket([50, 10, 3.5, 6.5, 1]);