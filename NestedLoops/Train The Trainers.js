function trainTheTrainers(input) {
    let jury = Number(input.shift());
    let presentation = input.shift();
    let totalSum = 0, count = 0;

    while (presentation != "Finish") {
        let currentSum = 0;

        for (let i = 0; i < jury; i++) {
            currentSum += Number(input.shift());
            count++;
        }

        console.log(`${presentation} - ${(currentSum / jury).toFixed(2)}.`);
        totalSum += currentSum;
        presentation = input.shift();
    }

    console.log(`Student's final assessment is ${(totalSum / count).toFixed(2)}.`);
}

trainTheTrainers([2, "While-Loop", 6.00, 5.50, "For-Loop", 5.84, 5.66, "Finish"]);