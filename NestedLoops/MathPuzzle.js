function mathPuzzle(input) {
    let key = Number(input.shift());
    let isEqual = false;

    for (let i = 1; i <= 30; i++) {
        for (let j = 1; j <= 30; j++) {
            for (let k = 1; k <= 30; k++) {
                if (i + j + k == key && i < j && i < k && j < k) {
                    console.log(`${i} + ${j} + ${k} = ${key}`);
                    isEqual = true;
                }

                if (i * j * k == key && i > j && i > k && j > k) {
                    console.log(`${i} * ${j} * ${k} = ${key}`);
                    isEqual = true;
                }
            }
        }
    }

    if (!isEqual) {
        console.log("No!");
    }
}

mathPuzzle([93]);