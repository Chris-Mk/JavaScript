function logistics(input) {
    let loads = Number(input.shift());
    let minibus = 0, truck = 0, train = 0;
    let totalTonnes = 0;

    for (let i = 0; i < loads; i++) {
        let tonnes = Number(input.shift());
        totalTonnes += tonnes;

        if (tonnes <= 3) {
            minibus += tonnes;
        } else if (tonnes <= 11) {
            truck += tonnes;
        } else if (tonnes > 11) {
            train += tonnes;
        }
    }

    let avgPrice = (minibus * 200 + truck * 175 + train * 120) / totalTonnes;
    console.log(`${avgPrice.toFixed(2)}`);
    console.log(`${(minibus / totalTonnes * 100).toFixed(2)}%`);
    console.log(`${(truck / totalTonnes * 100).toFixed(2)}%`);
    console.log(`${(train / totalTonnes * 100).toFixed(2)}%`);
}

logistics([4, 1, 5, 16, 3]);
logistics([5, 2, 10, 20, 1, 7]);
logistics([4, 53, 7, 56, 999]);