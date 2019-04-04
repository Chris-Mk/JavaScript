function projectPrize(input) {
    let parts = Number(input.shift());
    let prize = Number(input.shift());
    let totalPoints = 0;

    for (let i = 1; i <= parts; i++) {
        let points = Number(input.shift());

        if (i % 2 == 0) {
            points *= 2;
        }
        totalPoints += points;
    }

    console.log(`The project prize was ${(totalPoints * prize).toFixed(2)} lv.`);
}

projectPrize([7, 100.5, 2, 4, 5, 1, 1, 7, 3]);