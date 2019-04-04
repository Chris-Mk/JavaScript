function numberPlus3Steps(input) {
    let n = Number(input.shift());

    for (let i = 1; i <= n; i += 3) {
        console.log(i);
    }
}

numberPlus3Steps([10]);