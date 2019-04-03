function evenNumber(input) {
    let num = 0;

    while (true) {
        num = Number(input.shift());

        if (num % 2 === 0) {
            break;
        }

        console.log("The number is not even");
    }

    console.log(`Even number entered: ${num}`);
}

evenNumber([2]);
evenNumber([3, 5, 7, 10]);