function positionsSums(input) {
    let firstNumber = Number(input.shift());
    let secondNumber = Number(input.shift());
    let result = "";

    for (let i = firstNumber; i <= secondNumber; i++) {
        let currentNumber = "" + i;
        let rightSum = 0, leftSum = 0, middleNumber = 0;

        for (let j = 0; j < currentNumber.length; j++) {
            let currentDigit = currentNumber.charAt(j);

            if (j < 2) {
                rightSum += Number(currentDigit);
            } else if (j > 2) {
                leftSum += Number(currentDigit);
            } else if (j == 2) {
                middleNumber = Number(currentDigit);
            }
        }

        if (rightSum > leftSum) {
            leftSum += middleNumber;
        } else if (leftSum > rightSum) {
            rightSum += middleNumber;
        }

        if (rightSum == leftSum) {
            result += `${currentNumber} `;
        }
    }

    console.log(result);
}

positionsSums([10000, 10100]);
positionsSums([99000, 99199]);