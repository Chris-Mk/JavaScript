function primeSums(input) {
    let command = input.shift();
    let sumPrime = 0, sumNonPrime = 0;

    while (command != "stop") {
        let num = Number(command);

        if (num < 0) {
            console.log("Number is negative.");
        } else {
            let isPrime = true;

            if (num == 1) {
                isPrime = false;
            } else {
                for (let i = 2; i <= Math.sqrt(num); i++) {
                    if (num % i == 0) {
                        isPrime = false;
                        break;
                    }
                }

            }

            if (isPrime) {
                sumPrime += num;
            } else {
                sumNonPrime += num;
            }
        }

        command = input.shift();
    }

    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}

primeSums([3, 9, 0, 7, 19, 4, "stop"]);
primeSums([30, 83, 33, -1, 20, "stop"]);
primeSums([0, -9, 0, "stop"]);