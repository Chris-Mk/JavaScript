function halfSumElement(input) {
    let n = Number(input.shift());
    let sum = 0;
    let maxNumber = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < n; i++) {
        let num = Number(input.shift());
        sum += num;
        
        if (num > maxNumber) {
            maxNumber = num;
        }
    }

    if (sum - maxNumber == maxNumber) {
        console.log(`Yes\nSum = ${maxNumber}`);
    } else {
        console.log(`No\nDiff = ${Math.abs(maxNumber - (sum - maxNumber))}`);
    }
}

halfSumElement([4, 6, 1, 2, 3]);
halfSumElement([3, 1, 1, 10]);
halfSumElement([3, 5, 5, 1]);
halfSumElement([3, 1, 1, 1]);