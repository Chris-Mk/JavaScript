function seaTrip(input) {
    let food = Number(input.shift());
    let souvenirs = Number(input.shift());
    let hotel = Number(input.shift());

    let fuelNeeded = (420 * 7) / 100.0;
    let totalFuelCost = fuelNeeded * 1.85;
    let foodCost = food * 3, souvenirsCost = souvenirs * 3;
    let day1 = hotel * .90, day2 = hotel * .85, day3 = hotel * .80;
    let expenditure = foodCost + souvenirsCost + totalFuelCost + day1 + day2 + day3;

    console.log(`Money needed: ${expenditure.toFixed(2)}`);
}

seaTrip([100, 50, 500]);