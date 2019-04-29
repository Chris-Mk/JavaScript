function garage(input) {
    let garage = new Map();

    for (const data of input) {
        let [garageNumber, car] = data.split(' - ');
        garageNumber = +garageNumber;

        if (!garage.has(garageNumber)) {
            garage.set(garageNumber, []);
        }

        let regex = /:/gi;
        garage.get(garageNumber).push(car.replace(regex, ' -'));
    }

    [...garage]
        .sort((a, b) => a[0] - b[0])
        .forEach(e => {
            console.log(`Garage № ${e[0]}`);
            e[1].forEach(e => console.log(`--- ${e}`));
        });
}

garage(['1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);