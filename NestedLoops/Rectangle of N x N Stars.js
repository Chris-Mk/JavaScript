function nxnStars(input) {
    let n = Number(input.shift());

    for (let rows = 0; rows < n; rows++) {
        console.log("*".repeat(n));
    }
}

nxnStars([4]);