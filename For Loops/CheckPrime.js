function checkPrime(input) {
    let n = Number(input.shift());
    let isPrime = true;
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime && n > 2) {
        console.log("Prime");
    } else {
        console.log("Not Prime");
    }
}

checkPrime([5]);