function charityCampaign(input) {
    let daysOfCampaign = Number(input.shift());
    let confectioners = Number(input.shift());
    let cakes = Number(input.shift());
    let waffles = Number(input.shift());
    let pancakes = Number(input.shift());

    let cakePrice = 45 * cakes;
    let wafflesPrice = 5.80 * waffles;
    let pancakePrice = 3.20 * pancakes;
    let totalPrice = cakePrice + wafflesPrice + pancakePrice;
    let dailyPrice = totalPrice * confectioners;
    let totalCost = dailyPrice * daysOfCampaign;
    let finalCost = totalCost * .875;

    console.log(finalCost.toFixed(2));
}

charityCampaign([20, 8, 14, 30, 16]);