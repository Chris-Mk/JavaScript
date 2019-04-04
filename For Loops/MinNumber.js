function minNumber(arg) {
    let minNumber = Number.MAX_SAFE_INTEGER;

    for (let i = 1; i <= arg[0]; i++) {
        let num = Number(arg[i]);

        if (num < minNumber) {
            minNumber = num;
        }
    }

    console.log(minNumber);
}

minNumber([2, 100, 99]);
minNumber([3, -10, 20, -30]);
minNumber([4, 45, -20, 7, 99]);