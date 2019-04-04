function division(input) {
    let n = Number(input.shift());
    let divisibleBy2 = 0, divisibleBy3 = 0, divisibleBy4 = 0;

    for (let i = 0; i < n; i++) {
        let num = Number(input.shift());

        if (num % 2 == 0) {
            divisibleBy2++;
        }

        if (num % 3 == 0) {
            divisibleBy3++;
        }
        
        if (num % 4 == 0) {
            divisibleBy4++;
        }
    }

    console.log(`${(divisibleBy2 / n * 100).toFixed(2)}%`);
    console.log(`${(divisibleBy3 / n * 100).toFixed(2)}%`);
    console.log(`${(divisibleBy4 / n * 100).toFixed(2)}%`);
}

division([10, 680, 2, 600, 200, 800, 799, 199, 46, 128, 65]);
division([3, 3, 6, 9]);
division([1, 12]);