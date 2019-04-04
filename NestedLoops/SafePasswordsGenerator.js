function safePassword(input) {
    let a = Number(input.shift());
    let b = Number(input.shift());
    let passwords = Number(input.shift());

    let result = "";
    let ch1 = 35, ch2 = 64;

    for (let k = 1; k <= a; k++) {
        for (let l = 1; l <= b; l++) {

            if (passwords === 0) {
                break;
            }

            result += `${String.fromCharCode(ch1)}
                       ${String.fromCharCode(ch2)}
                       ${k}${l}
                       ${String.fromCharCode(ch2++)}
                       ${String.fromCharCode(ch1++)}|`;

            if (ch1 > 55) {
                ch1 = 35;
            }

            if (ch2 > 96) {
                ch2 = 64;
            }

            passwords--;
        }
    }

    console.log(result);
}

safePassword([2, 3, 10]);
safePassword([20, 50, 10]);