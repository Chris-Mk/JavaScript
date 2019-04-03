function schoolTrip(input) {
    let absentDays = Number(input.shift());
    let leftFood = Number(input.shift());
    let firstDog = Number(input.shift());
    let secondDog = Number(input.shift());
    let thirdDog = Number(input.shift());

    let allDogsFood = (firstDog + secondDog + thirdDog) * absentDays;
    if (allDogsFood > leftFood) {
        console.log(`${Math.ceil(allDogsFood - leftFood)} more kilos of food are needed.`);
    } else {
        console.log(`${Math.floor(leftFood - allDogsFood)} kilos of food left.`);
    }
}

schoolTrip([2, 10, 1, 1, 2]);
schoolTrip([5, 10, 2.1, 0.8, 11]);
schoolTrip([1, 5, 3, 1, 1]);