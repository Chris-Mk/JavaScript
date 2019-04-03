function bachelorParty(input) {
    let performerCost = Number(input.shift());
    let people = input.shift();
    let totalGuests = 0, sum = 0;

    while (people !== "The restaurant is full") {
        totalGuests += Number(people);

        if (people < 5) {
            sum += people * 100;
        } else if (people >= 5) {
            sum += people * 70;
        }

        people = input.shift();
    }

    if (sum >= performerCost) {
        console.log(`You have ${totalGuests} guests and ${(sum - performerCost).toFixed(0)} leva left.`);
    } else {
        console.log(`You have ${totalGuests} guests and ${sum.toFixed(0)} leva income, but no singer.`);
    }
}

bachelorParty([2800, 5, 5, 4, 6, 6, 12, 12, "The restaurant is full"]);