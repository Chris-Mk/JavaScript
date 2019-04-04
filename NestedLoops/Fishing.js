function fishing(input) {
    let quota = Number(input.shift());
    let money = 0, count = 0;

    for (let i = 1; i <= quota; i++) {
        let fishName = input.shift();

        if (fishName == "Stop") {
            break;
        }

        count++;
        let fishWeight = Number(input.shift());

        let sum = 0;
        for (let j = 0; j < fishName.length; j++) {
            sum += fishName.charCodeAt(j);
        }

        if (i % 3 === 0) {
            money += sum / fishWeight;
        } else {
            money -= sum / fishWeight;
        }
    }

    if (count === quota) {
        console.log("Lyubo fulfilled the quota! ");
    }

    if (money >= 0) {
        console.log(`Lyubo's profit from ${count} fishes is ${money.toFixed(2)} leva.`);
    } else {
        console.log(`Lyubo lost ${Math.abs(money).toFixed(2)} leva today.`);
    }
}

fishing([3, "catfish", 70, "carp", 20, "tench", 14]);