function coins(input) {
    let number = Number(input.shift()) * 100;
    let coins = 0;

    while (number > 0) {
        if (number >= 200) {
            number -= 200
        } else if (number >=100) {
            number -= 100;
        } else if (number >= 50) {
            number -= 50;
        } else if (number >= 20) {
            number -= 20;
        } else if (number >= 10) {
            number -= 10;
        } else if (number >= 5) {
            number -= 5;
        } else if (number >= 2) {
            number -=   2;
        } else if (number >= 1) {
            number -= 1;
        } else {
            break;
        }
        coins++;
    }

    console.log(coins);
}

coins([0.56]);