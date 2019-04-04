function matchTickets(input) {
    let budget = Number(input.shift());
    let category = input.shift();
    let people = Number(input.shift());

    if (people >= 1 && people <= 4) {
        budget *= .25;
    } else if (people >= 5 && people <= 9) {
        budget *= .40;
    } else if (people >= 10 && people <= 24) {
        budget *= .50;
    } else if (people >= 25 && people <= 49) {
        budget *= .60;
    } else if (people >= 50) {
        budget *= .75;
    }

    switch (category) {
        case "Normal":
            budget -= people * 249.99;
            break;
        case "VIP":
            budget -= people * 499.99;
            break;
    }

    if (budget > 0) {
        console.log(`Yes! You have ${budget.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${Math.abs(budget).toFixed(2)} leva.`);
    }
}

matchTickets([30000, "VIP", 49]);
matchTickets([1000, "Normal", 1]);