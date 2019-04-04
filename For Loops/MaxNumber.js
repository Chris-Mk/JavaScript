function maxNumber(input) {
    let maxNumber = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i <= input[0]; i++) {
        let num = Number(input[i]);

        if (num > maxNumber) {
            maxNumber = num;
        }
    }

    console.log(maxNumber);
}

maxNumber([2, 100, 99]);
maxNumber([3, -10, 20, 30]);
maxNumber([4, 45, -20, 7, 99]);
maxNumber([1, 999]);
maxNumber([2, -1, -2]);