function sleepyCat(input) {
    let daysOff = Number(input.shift());
    let workingDays = 365 - daysOff;
    let annualPlayingTime = ((workingDays * 63) + (daysOff * 127));
    let timeDiff = Math.abs(30000 - annualPlayingTime);
    let hours = timeDiff / 60;
    let mins = timeDiff % 60;

    if (annualPlayingTime > 30000) {
        console.log("Tom will run away");
        console.log(`${Math.floor(hours)} hours and ${Math.floor(mins)} minutes more for play`);
    } else {
        console.log("Tom sleeps well");
        console.log(`${Math.floor(hours)} hours and ${mins} minutes less for play`);
    }
}

sleepyCat([20]);