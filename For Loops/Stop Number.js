function stopNumber(input) {
    let N = Number(input.shift());
    let M = Number(input.shift());
    let S = Number(input.shift());

    let res = "";
    for (let i = M; i >= N; i--) {
        if (i % 2 === 0 && i % 3 === 0) {
            if (i !== S) {
                res += `${i} `;
            } else {
                break;
            }
        }
    }

    console.log(res);
}

stopNumber([1, 30, 15]);
stopNumber([1, 36, 12]);
stopNumber([20, 1000, 36]);