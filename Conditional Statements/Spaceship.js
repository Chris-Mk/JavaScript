function spaceShip(input) {
    let width = Number(input.shift());
    let length = Number(input.shift());
    let height = Number(input.shift());
    let astronautHeight = Number(input.shift());

    let spaceshipVol = width * length * height;
    let roomVol = (astronautHeight + .40) * 4;
    let astronauts = Math.floor(spaceshipVol / roomVol);

    if (astronauts >= 3 && astronauts <= 10) {
        console.log(`The spacecraft holds ${astronauts.toFixed(0)} astronauts.`);
    } else if (astronauts > 10) {
        console.log("The spacecraft is too big.");
    } else {
        console.log("The spacecraft is too small.");
    }
}

spaceShip([3.5, 4, 5, 1.70]);