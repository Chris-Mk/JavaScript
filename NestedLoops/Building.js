function building(input) {
    let floors = Number(input.shift());
    let roomsPerFloor = Number(input.shift());

    for (let i = floors; i >= 1; i--) {
        let floorNumbers = "";

        for (let j = 0; j < roomsPerFloor; j++) {
            if (i === floors) {
                floorNumbers += `L${i}${j} `;
            } else {
                if (i % 2 === 0) {
                    floorNumbers += `O${i}${j} `;
                } else {
                    floorNumbers += `A${i}${j} `;
                }
            }
        }

        console.log(floorNumbers);
    }
}

building([6 , 4]);