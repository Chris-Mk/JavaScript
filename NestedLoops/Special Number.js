function specialNumber(input) {
    let N = Number(input.shift());
    let res = "";

    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            for (let k = 1; k <= 9; k++) {
                for (let l = 1; l <= 9; l++) {
                    if (N % i === 0 && N % j === 0 &&
                        N % k === 0 && N % l === 0) {
                        res += `${i}${j}${k}${l} `;
                    }
                }
            }
        }
    }

    console.log(res);
}

specialNumber([3]);
specialNumber([11]);