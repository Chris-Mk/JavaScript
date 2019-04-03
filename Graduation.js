function graduation(input) {
    let name = input.shift();
    let months = 1;
    let gradeSum = 0;

    while (months <= 12) {
        let grades = Number(input.shift());

        if (grades >= 4.00) {
            gradeSum += grades;
            months++;
        }
    }
    console.log(`${name} graduated. Average grade: ${(gradeSum / 12).toFixed(2)}`);
}

graduation(["Pesho",
    4,
    5.5,
    6,
    5.43,
    4.5,
    6,
    5.55,
    5,
    6,
    6,
    5.43,
    5])