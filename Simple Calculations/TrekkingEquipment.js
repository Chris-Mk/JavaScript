function trekkingEquipment(input) {
    let climbers = Number(input.shift());
    let carbines = Number(input.shift());
    let ropes = Number(input.shift());
    let tweezers = Number(input.shift());

    let costPerPerson = (carbines * 36) + (ropes * 3.60) + (tweezers * 19.80);
    let totalCost = costPerPerson * climbers;
    totalCost += totalCost * .20;

    console.log(totalCost.toFixed(2));
}

trekkingEquipment([20, 14, 30, 6]);
trekkingEquipment([131, 9, 33, 46]);