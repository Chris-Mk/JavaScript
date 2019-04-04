function summerOutfit(input) {
    let temperatureDegrees = Number(input.shift());
    let dayTime = input.shift();

    let outfit = '';
    let shoed = '';

    switch (dayTime) {
        case 'Morning':
            if (temperatureDegrees >= 10 && temperatureDegrees <= 18) {
                outfit = 'Sweatshirt';
                shoes = 'Sneakers';
            } else if (temperatureDegrees > 18 && temperatureDegrees <= 24) {
                outfit = 'Shirt';
                shoes = 'Moccasins';   
            } else if (temperatureDegrees >= 25) {
                outfit = 'T-Shirt';
                shoes = 'Sandals';
            }
            break;
        case 'Afternoon':
            if (temperatureDegrees >= 10 && temperatureDegrees <= 18) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            } else if (temperatureDegrees > 18 && temperatureDegrees <= 24) {
                outfit = 'T-Shirt';
                shoes = 'Sandals';   
            } else if (temperatureDegrees >= 25) {
                outfit = 'Swim Suit';
                shoes = 'Barefoot';
            }
            break;
        case 'Evening':
            if (temperatureDegrees >= 10 && temperatureDegrees <= 18) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            } else if (temperatureDegrees > 18 && temperatureDegrees <= 24) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            } else if (temperatureDegrees >= 25) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            }
            break;
    }

    console.log(`It's ${temperatureDegrees} degrees, get your ${outfit} and ${shoes}.`);
}

summerOutfit([28, 'Evening']);