function christmasDecoration(input) {
    let budget = Number(input.shift());
    let command = input.shift();

    while (command !== "Stop") {

        for (let i = 0; i < command.length; i++) {
            let ch = command[i];
            budget -= ch.charCodeAt(0);
        }

        if (budget > 0) {
            console.log("Item successfully purchased!");
        } else {
            console.log("Not enough money!");
            break;
        }

        command = input.shift();
    }

    if (budget >= 0) {
        console.log(`Money left: ${budget}`);
    }
}

christmasDecoration([3000, "star", "Christmas tree", "tinsel", "Tree stand"]);