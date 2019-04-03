function schoolSupplies(input) {
    let chemicalPackets = Number(input.shift());
    let markerPackets = Number(input.shift());
    let detergentLiters = Number(input.shift());
    let percentageDiscount = Number(input.shift());

    let totalCost = (chemicalPackets * 5.80) +
                    (markerPackets * 7.20) + (detergentLiters * 1.20);
    
    let finalCost = totalCost - (totalCost * percentageDiscount/100);

    console.log(finalCost.toFixed(3));
}

schoolSupplies([2, 3, 2.5, 25]);
schoolSupplies([4, 2, 5, 13]);
schoolSupplies([7, 8, .5, 45]);