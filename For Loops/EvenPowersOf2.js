function evenPowers(input) {
    let n = Number(input.shift());
    let power = 1;

    for (let i = 0; i <= n; i += 2) {
        console.log(power);
        power = power * 2 * 2;
    }
}

evenPowers([10]);