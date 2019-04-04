function coding(input) {
    let number = Number(input.shift());

    while (number > 0) {
        let digit = number % 10;
        number = Math.floor(number / 10);

        if (digit !== 0) {
            console.log(String.fromCharCode(33 + digit).repeat(digit));
        } else {
            console.log("ZERO");
        }
    }
}

coding([2049]);
coding([9347439]);