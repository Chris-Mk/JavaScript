function oddEvenSum(input) {
    let n = Number(input.shift());
    let evenSum = 0, oddSum = 0;

    for (let i = 1; i <= n; i++) {
        let num = Number(input.shift());

        if (i % 2 == 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }

    if (evenSum == oddSum) {
        console.log(`Yes\nSum = ${evenSum}`);
    } else {
        console.log(`No\nDiff = ${Math.abs(evenSum - oddSum)}`);
    }
}

oddEvenSum([4, 10, 50, 60, 20]);
oddEvenSum([4, 3, 5, 1, -2]);
oddEvenSum([3, 5, 8, 1]);