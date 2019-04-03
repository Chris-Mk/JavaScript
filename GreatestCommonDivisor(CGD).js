function gcd(input) {
    let a = Number(input.shift());
    let b = Number(input.shift());

    while (b != 0) {
        let oldB = b;
        b = a % b;
        a = oldB;
    }

    console.log(a);
}

gcd([24, 16]);