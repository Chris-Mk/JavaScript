function multipleTable(input) {
    let num = Number(input.shift());
    let fD = num / 100, secD = num / 10, sD = secD % 10, tD = num % 10;

    for (let i = 1; i <= tD; i++) {
        for (let j = 1; j <= sD; j++) {
            for (let k = 1; k <= fD; k++) {
                let prod = i * j * k;
                console.log(`${i} * ${j} * ${k} = ${prod};`);
            }
        }
    }
}

multipleTable([324]);