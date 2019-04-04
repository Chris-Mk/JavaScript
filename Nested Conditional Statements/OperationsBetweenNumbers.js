function numberOperator(input) {
    let num1 = Number(input.shift());
    let num2 = Number(input.shift());
    let operator = input.shift();
    let result = 0;
    
    if (num2 === 0 && (operator === '/' || operator === '%')) {
        console.log(`Cannot divide ${num1} by zero`);
    } else if (operator === '/') {
        result = num1 / num2;
        console.log(`${num1} ${operator} ${num2} = ${result.toFixed(2)}`);
    } else if (operator === '%') {
        result = num1 % num2;
        console.log(`${num1} ${operator} ${num2} = ${result}`);
    } else {
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;   
            }

        if (result % 2 === 0) {
            console.log(`${num1} ${operator} ${num2} = ${result} - even`);
        } else {
            console.log(`${num1} ${operator} ${num2} = ${result} - odd`);
        }
    }
}

numberOperator([10, 12, '+']);