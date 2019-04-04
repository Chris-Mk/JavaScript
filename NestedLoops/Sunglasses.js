function sunglasses(n) {

    //prints the top line
    let topLine = "*".repeat(2 * n);
    topLine += " ".repeat(n);
    topLine += "*".repeat(2 * n);
    console.log(topLine);

    //prints the middle part
    for (let i = 0; i < n - 2; i++) {
        let middleLine = "*";
        middleLine += "/".repeat(n * 2 - 2);
        middleLine += "*";

        if (i === Math.floor((n - 1)/ 2 - 1)) {
            middleLine += "|".repeat(n);
        } else {
            middleLine += " ".repeat(n);
        }

        middleLine += "*";
        middleLine += "/".repeat(n * 2 - 2);
        middleLine += "*";

        console.log(middleLine);
    }

    //prints the bottom part
    let bottomLine = "*".repeat(2 * n);
    bottomLine += " ".repeat(n);
    bottomLine += "*".repeat(2 * n);
    console.log(bottomLine);
}

sunglasses([4]);