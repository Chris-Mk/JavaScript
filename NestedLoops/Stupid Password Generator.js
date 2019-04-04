function stupidPassword(input) {
    let n = Number(input.shift());
    let l = Number(input.shift());
    let result = "";

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            for (let k = 97; k < 97 + l; k++) {
                for (let m = 97; m < 97 + l; m++) {
                    for (let o = 1; o <= n; o++) {
                        if (o > i && o > j) {
                            result += `${i}${j}${String.fromCharCode(k)}${String.fromCharCode(m)}${o} `;
                        }
                    }
                }
            }
        }
    }

    console.log(result);
}

stupidPassword([2, 4]);