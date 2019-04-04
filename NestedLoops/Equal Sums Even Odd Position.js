function equalSumsPosition(input) {
    let firstNumber = Number(input.shift());
    let secondNumber = Number(input.shift());
    let result = "";

    for (let i = firstNumber; i <= secondNumber; i++) {
        let currentNumber = "" + i;
        let evenSum = 0, oddSum = 0;

        for (let j = 0; j < currentNumber.length; j++) {
            let currentDigit = currentNumber.charCodeAt(j);

            if (j % 2 == 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }
        if (evenSum === oddSum) {
            result += i + " ";
        }
    }
    console.log(result);
}

equalSumsPosition([100000, 100050]);