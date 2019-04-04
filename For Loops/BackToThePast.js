function backToPast(input) {
    let inheritedMoney = Number(input.shift());
    let returnYear = Number(input.shift());
    let age = 18;

    for (let i = 1800; i <= returnYear; i++) {
        if (i % 2 === 0) {
            inheritedMoney -= 12000;
        } else {
            inheritedMoney -= 12000 + 50 * age;
        }
        age++;
    }

    if (inheritedMoney >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${inheritedMoney.toFixed(2)} dollars left. `);
    } else {
        console.log(`He will need ${Math.abs(inheritedMoney).toFixed(2)} dollars to survive.`);
    }
}

backToPast([50000, 1802]);
backToPast([100000.15, 1808]);