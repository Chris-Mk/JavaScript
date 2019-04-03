function bonusScore(input) {
    let number = Number(input.shift());
    let bonus = 0;

    if (number % 2 === 0) {
        bonus += 1;
    } else if (number % 5 === 0) {
        bonus += 2;
    }

    if (number <= 100) {
        bonus += 5;
    } else if (number <= 1000) {
        bonus += number * .20;
    } else {
        bonus += number * .10;
    }

    console.log(bonus);
    console.log(number + bonus);
}

bonusScore([175]);