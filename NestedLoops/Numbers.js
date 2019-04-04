function numbers(input) {
    let num = Number(input.shift());

    let firstDigit = Math.floor(num / 100);
    let secondDigit = Math.floor((num / 10) % 10);
    let thirdDigit = num % 10;

    for (let i = 0; i < (firstDigit + secondDigit); i++) {
        let result = "";

        for (let j = 0; j < (firstDigit + thirdDigit); j++) {

            if (num % 5 === 0) {
                num -= firstDigit;
            } else if (num % 3 === 0) {
                num -= secondDigit;
            } else {
                num += thirdDigit;
            }

            result += `${num} `;
        }
        console.log(result);
    }
}

numbers([132]);