function mountainRun(input) {
    let record = Number(input.shift());
    let distance = Number(input.shift());
    let timePerMeter = Number(input.shift());

    let timeDueToSlope = Math.floor((distance / 50)) * 30;
    let totalTime = distance * timePerMeter + timeDueToSlope;

    if (totalTime >= record) {
        console.log(`No! He was ${(totalTime - record).toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
    }
}

mountainRun([10164, 1400, 25]);
mountainRun([5554.36, 1340, 3.23]);
mountainRun([1377, 389, 3]);