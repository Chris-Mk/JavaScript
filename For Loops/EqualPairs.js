function equalPairs(input) {
    let n = Number(input.shift());
    let maxDiff = 0;
    let lastPair = 0;

    for (let i = 0; i < n ; i++) {
        let num1 = Number(input.shift());
        let num2 = Number(input.shift());
        
        let currPair = num1 + num2;
        
        if (i >= 1) {
            let diff = Math.abs(currPair - lastPair);
            if (diff > maxDiff) {
                maxDiff = diff;
            }
        }

        lastPair = currPair;
    }

    if (maxDiff === 0) {
        console.log(`Yes, value=${lastPair}`);
    } else {
        console.log(`No, maxdiff=${maxDiff}`);
    }
}

equalPairs([7, 34, -33, 52, 12, -32, 32, 23, 41, 7, 25, 34, 23, 124, 21]);
//equalPairs([3, 1, 2, 0, 3, 4, -1]);
//equalPairs([2, 1, 2, 2, 2]);
//equalPairs([4, 1, 1, 3, 1, 2, 2, 0, 0]);
// equalPairs([1, 5, 5]);
// equalPairs([2, -1, 0, 0, -1]);
// equalPairs([2, -1, 2, 0, -1]);