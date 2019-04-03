function threeBrothers(input) {
    let timeA = Number(input.shift());
    let timeB = Number(input.shift());
    let timeC = Number(input.shift());
    let fatherTime = Number(input.shift());

    let cleaningTime = 1 / (1/timeA + 1/timeB + 1/timeC);
    let afterResting = cleaningTime * 1.15;
    let remainingTime = fatherTime - afterResting; 

    console.log(`Cleaning time: ${afterResting.toFixed(2)}`);

    if (remainingTime >= 0) {
        console.log(`Yes, there is a surprise - time left -> ${Math.floor(remainingTime)} hours.`);
    } else {
        remainingTime = Math.abs(remainingTime);
        remainingTime = Math.ceil(remainingTime);
        console.log(`No, there isn't a surprise - shortage of time -> ${remainingTime} hours.`)
    }
}

threeBrothers([3.2, 2.5, 1.24, 0.5]);