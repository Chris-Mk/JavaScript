function skiTrip(input) {
    let daysOfStay = Number(input.shift());
    let roomType = input.shift();
    let evaluation = input.shift();

    let nightsSlept = daysOfStay - 1;
    let cost = 0;

    switch (roomType) {
        case 'room for one person':
            cost = 18.00 *nightsSlept;
            break;
        case 'apartment':
            cost = 25.00 * nightsSlept;
            if (daysOfStay < 10) {
                cost *= .70;
            } else if (daysOfStay >= 10 && daysOfStay <= 15) {
                cost *= .65;
            } else {
                cost *= .50;
            }
            break;
        case 'president apartment':
            cost = 35.00 * nightsSlept;
            if (daysOfStay < 10) {
                cost *= .90;
            } else if (daysOfStay >= 10 && daysOfStay <= 15) {
                cost *= .85;
            } else {
                cost *= .80;
            }
            break;
    }

    if (evaluation === 'positive') {
        cost += cost * .25;
    } else {
        cost -= cost * .10;
    }

    console.log(cost.toFixed(2));
}

skiTrip([14, 'apartment', 'positive']);