function accountBalance(input) {
    let n = Number(input.shift());
    let sum = 0;

    while (n > 0) {
        let deposits = Number(input.shift());

        if (deposits < 0) {
            console.log("Invalid operation!");
            break;
        } else {
            sum += deposits;
            console.log(`Increase: ${deposits.toFixed(2)}`);
        }

        n--;
    }
    console.log(`Total: ${sum.toFixed(2)}`);
}

accountBalance([5, 120, 45.55, -150])