function equalNumbers(input) {
    let num1 = Number(input.shift());
    let num2 = Number(input.shift());
    let num3 = Number(input.shift());

    if (num1 === num2 && num1 === num3) {
        console.log('yes');
    } else {
        console.log('no');
    }
}

equalNumbers([5, 4, 5]);