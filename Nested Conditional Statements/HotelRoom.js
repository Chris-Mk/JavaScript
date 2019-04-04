function hotelRoom(input) {
    let month = input.shift();
    let nights = Number(input.shift());

    let studioCost = 0;
    let apartmentCost = 0;

    if (month === 'May' || month === 'October') {
        studioCost = 50 * nights;
        apartmentCost = 65 * nights;
        if (nights > 14) {
            studioCost *= .70;
        } else if (nights > 7) {
            studioCost *= .95;
        }
    } else if (month === 'June' || month === 'September') {
        studioCost = 75.20 * nights;
        apartmentCost = 68.70 * nights;
        if (nights > 14) {
            studioCost *= .80;
        }
    } else if (month === 'July' || month === 'August') {
        studioCost = 76 * nights;
        apartmentCost = 77 * nights;
    }

    if (nights > 14) {
        apartmentCost *= .90;
    }

    console.log(`Apartment: ${apartmentCost.toFixed(2)} lv.`);
    console.log(`Studio: ${studioCost.toFixed(2)} lv.`);
}

hotelRoom(['August', 20]);