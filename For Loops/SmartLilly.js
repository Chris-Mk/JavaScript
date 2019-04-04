function smartLilly(input) {
    let age = Number(input.shift());
    let machinePrice = Number(input.shift());
    let toyPrice = Number(input.shift());

    let receivedMoney = 0;
    let toyCount = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            receivedMoney += 10 * i / 2;
            receivedMoney--;
        } else {
            toyCount++;
        }
    }

    let sum = toyPrice  * toyCount + receivedMoney;
    if (sum >= machinePrice) {
        console.log(`Yes! ${(sum - machinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(machinePrice - sum).toFixed(2)}`);
    }
}

smartLilly([10, 170.00, 6]);
smartLilly([21, 1570.98, 3]);