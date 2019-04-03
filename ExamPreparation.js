function examPreparation(input) {
    let unsatisfactoryRating = Number(input.shift());
    let taskName = input.shift();

    let unsatisfactory = 0;
    let lastTask = "";
    let sum = 0, counter = 0;

    while (taskName !== "Enough") {
        let evaluation = Number(input.shift());

        if (evaluation <= 4) {
            unsatisfactory++;
            if (unsatisfactory === unsatisfactoryRating) {
                break;
            }
        }

        counter++;
        sum += evaluation;
        lastTask = taskName;
        taskName = input.shift();
    }

    if (unsatisfactory < unsatisfactoryRating) {
        console.log(`Average score: ${(sum / counter).toFixed(2)}`);
        console.log(`Number of problems: ${counter}`);
        console.log(`Last problem: ${lastTask}`);
    } else {
        console.log(`You need a break, ${unsatisfactory} poor grades.`)
    }
}

examPreparation([3,
    "Money",
    6,
    "Story",
    4,
    "Spring Time",
    5,
    "Bus",
    6,
    "Enough"])