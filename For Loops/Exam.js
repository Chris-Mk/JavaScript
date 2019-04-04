function exam(input) {
    let students = Number(input.shift());

    let grade2 = 0, grade3 = 0, grade4 = 0, grade5 = 0;
    let scoreSum = 0;

    for (let i = 0; i < students; i++) {
        let score = Number(input.shift());
        scoreSum += score;

        if (score < 3.00) {
            grade2++;
        } else if (score < 4.00) {
            grade3++;
        } else if (score < 5.00) {
            grade4++;
        } else {
            grade5++;
        }
    }

    console.log(`Top students: ${(grade5 / students * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(grade4 / students * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(grade3 / students * 100).toFixed(2)}%`);
    console.log(`Fail: ${(grade2 / students * 100).toFixed(2)}%`);
    console.log(`Average: ${(scoreSum / students).toFixed(2)}`);
}

exam([10,
    3.00,
    2.99,
    5.68,
    3.01,
    4,
    4,
    6.00,
    4.50,
    2.44,
    5]);