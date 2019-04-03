function cake(input) {
    let width = Number(input.shift());
    let length = Number(input.shift());

    let area = width * length;
    let command = input.shift();
    
    while (command !== "STOP") {
        area -= Number(command);

        if (area < 0) {
            console.log(`No more cake left! You need ${Math.abs(area)} pieces more.`);
            break;
        }
        command = input.shift();
    }

    if (area > 0) {
        console.log(`${area} pieces are left.`);
    }
}

cake([10, 2, 2, 4, 6, "STOP"]);
cake([10, 10, 20, 20, 20, 20, 21]);