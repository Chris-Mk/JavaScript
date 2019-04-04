function nameWars(input) {
    let name = input.shift();
    let maxSum = 0, winner = "";

    while (name !== "STOP") {
        let sum = 0;

        for (let i = 0; i < name.length; i++) {
            sum += name.charCodeAt(i);
        }

        if (sum > maxSum) {
            maxSum = sum;
            winner = name;
        }
        name = input.shift();
    }

    console.log(`Winner is ${winner} - ${maxSum}!`);
}

nameWars(["Petar", "Georgi", "Stanimir", "STOP"]);