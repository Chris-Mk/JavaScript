function travelling(input) {
    let destination = input.shift();
    let minBudget = Number(input.shift());

    while (destination !== "End") {
        let savings, sum = 0;

        for (let i = 0; i < minBudget; i += savings) {
            savings = Number(input.shift());
            sum += savings;
        }

        if (sum >= minBudget) {
            console.log(`Going to ${destination}!`);
        }

        destination = input.shift();
        minBudget = Number(input.shift());
    }
}

travelling(["Greece", 1000, 200, 200, 300, 100, 150, 240, "Spain", 1200, 300, 500, 193, 423, "End"]);