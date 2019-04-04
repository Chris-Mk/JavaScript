function histogram(input) {
    let n = Number(input.shift());
    let p1 = 0, p2 = 0, p3 = 0, p4 = 0, p5 = 0;

    for (let i = 0; i < n; i++) {
        let num = Number(input.shift());

        if (num < 200) {
            p1++;
        } else if (num < 400) {
            p2++;
        } else if (num < 600) {
            p3++;
        } else if (num < 800) {
            p4++;
        } else if (num >= 800) {
            p5++;
        }
    }

    console.log(`${(p1 / n * 100).toFixed(2)}%`);
    console.log(`${(p2 / n * 100).toFixed(2)}%`);
    console.log(`${(p3 / n * 100).toFixed(2)}%`);
    console.log(`${(p4 / n * 100).toFixed(2)}%`);
    console.log(`${(p5 / n * 100).toFixed(2)}%`);
}

histogram([3, 1, 2, 999]);
histogram([4, 53, 7, 56, 999]);
histogram([9, 367, 99, 200, 799, 999, 333, 555, 111, 9]);