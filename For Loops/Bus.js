function bus(input) {
    let initialPassengers = Number(input.shift());
    let busStops = Number(input.shift());
    let counter= 0;

    for (let i = 1; i <= busStops * 2; i++) {
        let passengers = Number(input.shift());
        counter++;

        if (i % 2 === 0) {
            initialPassengers += passengers;
        } else {
            initialPassengers -= passengers;
        }

        if (counter === 2) {
            initialPassengers += 2;
        } else if (counter === 4) {
            initialPassengers -= 2;
            counter = 0;
        }
    }
    console.log(`The final number of passengers is : ${initialPassengers}`);
}

bus([20, 2, 10, 5, 5, 3]);