function magicNumbers(input) {
    let magicNum = Number(input.shift());
    let result = "";

    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            for (let k = 1; k <= 9; k++) {
                for (let l = 1; l <= 9; l++) {
                    for (let m = 1; m <= 9; m++) {
                        for (let o = 1; o <= 9; o++) {
                            if (i * j * k * l * m * o === magicNum) {
                                result += `${i}${j}${k}${l}${m}${o} `;
                            }
                        }
                    }
                }
            }
        }
    }

    console.log(result);
}

magicNumbers([2]);