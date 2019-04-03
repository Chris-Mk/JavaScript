function choreography(input) {
    let steps = Number(input.shift());
    let dancers = Number(input.shift());
    let studyDays = Number(input.shift());

    let dailySteps = ((steps / studyDays) / steps) * 100;
    let roundedSteps = Math.ceil(dailySteps);
    let dailyPercentage = roundedSteps / dancers;

    if (roundedSteps <= 13) {
        console.log(`Yes, they will succeed in that goal! ${dailyPercentage.toFixed(2)}%.`)
    } else {
        console.log(`No, they will not succeed in that goal! Required ${dailyPercentage.toFixed(2)}% steps to be learned per day.`);
    }
}

choreography([55555, 30, 7]);