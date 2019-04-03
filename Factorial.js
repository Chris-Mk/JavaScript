function factorial(input) {
    let n = Number(input.shift());
    let fact = 1;

    do {
        fact *= n;
        n--;
    } while (n > 1);

    console.log(fact);
}

factorial([5]);