function poolPipes(input) {
    let totalVolume = Number(input.shift());
    let pipe1 = Number(input.shift());
    let pipe2 = Number(input.shift());
    let hours = Number(input.shift());

    let water = pipe1 * hours + pipe2 * hours;

    if (water <= totalVolume) {
        console.log(`The pool is ${Math.trunc(water / totalVolume * 100)}% full. Pipe 1: ${Math.trunc(pipe1 * hours / water * 100)}%. Pipe 2: ${Math.trunc(pipe2 * hours / water * 100)}%.`);
    } else {
        console.log(`For ${hours} hours the pool overflows with ${water - totalVolume} liters.`);
    }
}

poolPipes([1000, 100, 120, 3]);
poolPipes([100, 100, 100, 2.5]);