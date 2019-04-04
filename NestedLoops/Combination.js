function combination(input) {
    let n = Number(input.shift());
    let validCount = 0;

    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
            for (let k = 0; k <= n; k++) {
                for (let l = 0; l <= n; l++) {
                    for (let m = 0; m <= n; m++) {
                        if (i + j + k + l + m === n) {
                            validCount++;
                        }
                    }
                }
            }
        }
    }

    console.log(validCount);
}

combination([25]);