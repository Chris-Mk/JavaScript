function piccolo(input) {
    const parking = [];

    for (const data of input) {
        const [direction, number] = data.split(', ');

        if (direction === 'IN') {
            if (!parking.includes(number)) {
                parking.push(number);
            }
        } else if (direction === 'OUT') {
            if (parking.includes(number)) {
                parking.splice(parking.indexOf(number), 1);
            }
        }
    }

    if (parking.length > 0) {
        parking
            .sort((a, b) => a.localeCompare(b))
            .forEach(number => console.log(number));
    } else {
        console.log('Parking Lot is Empty');
    }
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']);