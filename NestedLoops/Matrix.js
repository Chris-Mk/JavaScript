function matrix(input) {
    let a = Number(input.shift());
    let b = Number(input.shift());
    let c = Number(input.shift());
    let d = Number(input.shift());

    for (let i = a; i <= b; i++) {
        for (let j = a; j <= b; j++) {
            for (let k = c; k <= d; k++) {
                for (let l = c; l <= d; l++) {
                    if (i + l === j + k && i !== j && k !== l) {
                        console.log(`${i}${j}\n${k}${l}\n`);
                    }
                }
            }
        }
    }
}

matrix([1, 2, 3, 4]);