function sumSeconds(input) {
    let timeFirst = Number(input.shift());
    let timeSecond = Number(input.shift());
    let timeThird = Number(input.shift());

    let totalTime = timeFirst + timeSecond + timeThird;

    if (totalTime >= 60) {
        let minutes = Math.trunc(totalTime / 60);
        let seconds = totalTime % 60;
        if (seconds < 10) {
            console.log(`${minutes}:0${seconds}`);
        } else {
            console.log(`${minutes}:${seconds}`);
        }
    } else {
        if (totalTime > 10) {
            console.log(`0:${totalTime}`);
        } else {
            console.log(`0:0${totalTime}`);
        }
    }
}

sumSeconds([1, 2, 3]);