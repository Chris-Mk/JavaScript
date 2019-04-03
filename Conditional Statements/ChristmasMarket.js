function christmasMarket(input) {
    let requiredMoney = Number(input.shift());
    let fantasy = Number(input.shift());
    let horror = Number(input.shift());
    let romance = Number(input.shift());

    let moneyCollected = (fantasy * 14.90 + horror * 9.80 + romance * 4.30) * .80;

    if (moneyCollected >= requiredMoney) {
        let extraMoney = moneyCollected - requiredMoney;
        let vendorMoney = Math.floor(extraMoney * .10);
        let donatedMoney = requiredMoney + (extraMoney - vendorMoney);
        console.log(`${donatedMoney.toFixed(2)} leva donated.\nSellers will receive ${vendorMoney} leva.`);
    } else {
        console.log(`${requiredMoney - moneyCollected.toFixed(2)} money needed.`);
    }
}

christmasMarket([200, 15, 10, 5]);
christmasMarket([168, 5, 3, 8]);