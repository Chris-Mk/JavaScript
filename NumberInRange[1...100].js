function numberRange(input) {
    let n = Number(input.shift());

    while (n < 1 || n > 100) {
        console.log("Invalid number!");
        n = Number(input.shift());
    }

    console.log("The number is: " + n);
}

numberRange([-1, 100]);