function moving(input) {
    let width = Number(input.shift());
    let length = Number(input.shift());
    let height = Number(input.shift());
    
    let boxes = input.shift();
    let spaceVolume = width * length * height;

    while (boxes !== "Done") {        
        if (spaceVolume <= 0) {
            break;
        }
        
        spaceVolume -= Number(boxes);
        boxes = input.shift();
    }
    
    if (spaceVolume > 0) {
        console.log(`${spaceVolume} Cubic meters left.`);
    } else {
        console.log(`No more free space! You need ${Math.abs(spaceVolume)} Cubic meters more.`)
    }
}

moving([10,
    1,
    2,
    4,
    6,
    "Done"])