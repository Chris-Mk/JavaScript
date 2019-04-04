function powerOfTwo(input) {
    let n = Number(input.shift());
    let power = 1;

    for (let i = 0; i <= n; i++) {
        console.log(power);
        power = 2 * power;
    }
}

powerOfTwo([10]);