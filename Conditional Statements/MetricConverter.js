function metricConverter(input) {
    let value = Number(input.shift());
    let inputUnit = input.shift();
    let outputUnit = input.shift();

    if (inputUnit == 'cm') {
        value /= 100;
    } else if (inputUnit == 'mm') {
        value /= 1000;
    } else if (inputUnit == 'mi') {
        value /= 0.000621371192;
    } else if (inputUnit == 'in') {
        value /= 39.3700787;
    } else if (inputUnit == 'km') {
        value /= 0.001;
    } else if (inputUnit == 'ft') {
        value /= 3.2808399;
    } else if (inputUnit == 'yd') {
        value /= 1.0936133;
    }

    if (outputUnit == 'cm') {
        value *= 100;
    } else if (outputUnit == 'mm') {
        value *= 1000;
    } else if (outputUnit == 'mi') {
        value *= 0.000621371192;
    } else if (outputUnit == 'in') {
        value *= 39.3700787;
    } else if (outputUnit == 'km') {
        value *= 0.001;
    } else if (outputUnit == 'ft') {
        value *= 3.2808399;
    } else if (outputUnit == 'yd') {
        value *= 1.0936133;
    }

    console.log(value);
}

metricConverter([12, 'km', 'ft']);