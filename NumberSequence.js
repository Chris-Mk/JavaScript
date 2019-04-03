function numberSequence(input) {
    let minNumber = Number.MAX_SAFE_INTEGER;
    let maxNumber = Number.MIN_SAFE_INTEGER;
    let command = input.shift();

    while (command !== "END") {
        let number = Number(command);

        if (number < minNumber) {
            minNumber = number;
        }
        
        if (number > maxNumber) {
            maxNumber = number;
        }
        command = input.shift();
    }

    console.log(`Max number: ${maxNumber}`);
    console.log(`Min number: ${minNumber}`);
}

numberSequence([10, 20, 304, 0, 50, "END"]);