function triangleOfDollars(input) {
    let n = Number(input.shift());

    for (let rows = 1; rows <= n; rows++) {
        console.log("$ ".repeat(rows));
    }
}

triangleOfDollars([4]);