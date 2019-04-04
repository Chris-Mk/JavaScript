function fibonacci(input) {
    let n = Number(input.shift());
    let f0 = 1, f1 = 1;

    for (let i = 0; i < n - 1; i++) {
        let fn = f0 + f1;
        f0 = f1;
        f1 = fn;
    }
    console.log(f1);
}

fibonacci([5]);